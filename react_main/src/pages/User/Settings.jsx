import React, { useState, useEffect, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import update from "immutability-helper";

import { UserContext, SiteInfoContext } from "../../Contexts";
import LoadingPage from "../Loading";
import Form, { useForm } from "../../components/Form";
import { useErrorAlert } from "../../components/Alerts";

import "../../css/settings.css";

export default function Settings(props) {
	const [settingsLoaded, setSettingsLoaded] = useState(false);
	const [accountsLoaded, setAccountsLoaded] = useState(false);
	const [accounts, setAccounts] = useState({});
	const history = useHistory();
	const user = useContext(UserContext);
	const siteInfo = useContext(SiteInfoContext);
	const errorAlert = useErrorAlert();

	const [siteFields, updateSiteFields] = useForm([
		{
			label: "Referral URL",
			ref: "referralURL",
			type: "text",
			value: (deps) => `${process.env.REACT_APP_URL}/auth/login?ref=${deps.user.id}`,
			fixed: true,
			highlight: true
		},
		{
			label: "DMs from Friends Only",
			ref: "onlyFriendDMs",
			type: "boolean",
		},
		{
			label: "Hide Deleted Posts",
			ref: "hideDeleted",
			type: "boolean",
			showIf: (deps) => deps.user.perms.viewDeleted
		}
	]);

	const [profileFields, updateProfileFields] = useForm([
		{
			label: "Name",
			ref: "username",
			type: "text",
			saveBtn: "Change",
			saveBtnDiffer: "name",
			saveBtnOnClick: onUsernameSave,
			confirm: "Are you sure you wish to change your username?"
		},
		{
			label: "Show Discord",
			ref: "showDiscord",
			type: "boolean",
			showIf: (deps) => deps.accounts.discord && deps.accounts.discord.id
		},
		{
			label: "Show Twitch",
			ref: "showTwitch",
			type: "boolean",
			showIf: (deps) => deps.accounts.twitch && deps.accounts.twitch.id
		},
		// {
		// 	label: "Show Google",
		// 	ref: "showGoogle",
		// 	type: "boolean",
		// 	showIf: (deps) => deps.accounts.google && deps.accounts.google.id
		// },
		{
			label: "Show Steam",
			ref: "showSteam",
			type: "boolean",
			showIf: (deps) => deps.accounts.steam && deps.accounts.steam.id
		},
		{
			label: "Background Color",
			ref: "backgroundColor",
			type: "color",
			default: "#262626",
			disabled: (deps) => !deps.user.itemsOwned.customProfile
		},
		{
			label: "Banner Format",
			ref: "bannerFormat",
			type: "select",
			options: [
				{
					label: "Tile",
					value: "tile"
				},
				{
					label: "Stretch",
					value: "stretch"
				}
			],
			disabled: (deps) => !deps.user.itemsOwned.customProfile
		}
	], [accounts]);

	const [gameFields, updateGameFields] = useForm([
		{
			label: "Name Color",
			ref: "nameColor",
			type: "color",
			default: "#fff",
			disabled: (deps) => !deps.user.itemsOwned.textColors
		},
		{
			label: "Text Color",
			ref: "textColor",
			type: "color",
			default: "#fff",
			disabled: (deps) => !deps.user.itemsOwned.textColors
		}
	]);

	useEffect(() => {
		document.title = "Settings | BeyondMafia";
	}, []);

	useEffect(() => {
		if (user.loaded && user.loggedIn) {
			if (!settingsLoaded) {
				axios.get("/user/settings/data")
					.then(res => {
						let siteFormFieldChanges = [];
						let profileFormFieldChanges = [];
						let gameFormFieldChanges = [];

						for (let ref in res.data) {
							if (!res.data[ref]) continue;

							siteFormFieldChanges.push({
								ref: ref,
								prop: "value",
								value: res.data[ref]
							});
							profileFormFieldChanges.push({
								ref: ref,
								prop: "value",
								value: res.data[ref]
							});
							gameFormFieldChanges.push({
								ref: ref,
								prop: "value",
								value: res.data[ref]
							});
						}

						updateSiteFields(siteFormFieldChanges);
						updateProfileFields(profileFormFieldChanges);
						updateGameFields(gameFormFieldChanges);
						setSettingsLoaded(true);
					})
					.catch(errorAlert);
			}

			if (!accountsLoaded) {
				axios.get("/user/accounts")
					.then(res => {
						setAccounts(res.data);
						setAccountsLoaded(true);
					})
					.catch(errorAlert);
			}
		}
	}, [user]);

	function onSettingChange(action, update) {
		if (action.prop == "value" && !action.localOnly) {
			axios.post("/user/settings/update", {
				prop: action.ref,
				value: action.value
			})
				.catch(errorAlert);
		}

		update(action);
	}

	function onUsernameSave(name, deps) {
		var code = "";

		if (reservedNames.indexOf(name.toLowerCase()) != -1)
			code = window.prompt("This name is reserved, please enter your reservation code.");

		axios.post("/user/name", { name, code })
			.then(res => {
				deps.siteInfo.showAlert("Username changed", "success");

				deps.user.set(update(deps.user, {
					name: { $set: name },
					itemsOwned: {
						nameChange: {
							$set: deps.user.itemsOwned.nameChange - 1
						}
					}
				}));
			})
			.catch(deps.errorAlert);
	}

	function onLogoutClick() {
		axios.post("/user/logout")
			.then(res => {
				user.clear();
				history.push("/");
			})
			.catch(errorAlert);
	}

	function onDeleteClick() {
		const shouldDelete = window.confirm("Are you sure you wish to delete your account? This is irreversible.");

		if (!shouldDelete)
			return;

		axios.post("/user/delete")
			.then(res => {
				user.clear();
				history.push("/");
			})
			.catch(errorAlert);
	}

	if (user.loaded && !user.loggedIn)
		return <Redirect to="/play" />;

	if (!settingsLoaded || !accountsLoaded || !user.loaded)
		return <LoadingPage />

	return (
		<div className="span-panel settings">
			<div className="heading">
				Site
			</div>
			<Form
				fields={siteFields}
				deps={{ user }}
				onChange={action => onSettingChange(action, updateSiteFields)} />
			<div className="heading">
				Profile
			</div>
			<Form
				fields={profileFields}
				deps={{ name: user.name, user, accounts, siteInfo, errorAlert }}
				onChange={action => onSettingChange(action, updateProfileFields)} />
			<div className="heading">
				Game
			</div>
			<Form
				fields={gameFields}
				deps={{ user }}
				onChange={action => onSettingChange(action, updateGameFields)} />
			<div className="heading">
				Accounts
			</div>
			<div className="accounts-row">
				<div className="accounts-column">
					<div
						className="btn btn-theme logout"
						onClick={onLogoutClick}>
						Sign Out
					</div>
					<div
						className="btn delete-account"
						onClick={onDeleteClick}>
						Delete Account
					</div>
				</div>
			</div>
		</div>
	);
}

const reservedNames = [
	"admin",
	"administrator",
	"mod",
	"moderator",
	"dev",
	"developer",
	"giga",
	"rend",
	"arcbell",
];