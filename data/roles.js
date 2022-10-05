const roleData = {
    "Mafia": {
        //Village
        "Villager": {
            alignment: "Village",
            description: [
                "Wins when no mafia or malevolent independents remain."
            ],
        },
        "Doctor": {
            alignment: "Village",
            description: [
                "Save one person each night from dying, except himself."
            ],
        },
        "Arms Dealer": {
            alignment: "Village",
            description: [
                "Hands out a gun each night."
            ],
        },
        "Cop": {
            alignment: "Village",
            description: [
                "Investigates one person each night and learns their alignment.",
                "Multiple cops meet in a group."
            ],
        },
        "Oracle": {
            alignment: "Village",
            description: [
                "Chooses one player each night.",
                "If she dies during the night that player will be revealed."
            ],
        },
        "Vigilante": {
            alignment: "Village",
            description: [
                "Kills one person each night."
            ],
        },
        "Seer": {
            alignment: "Village",
            description: [
                "Learns the role of one person each night.",
            ],
        },
        "Escort": {
            alignment: "Village",
            description: [
                "Each night, chooses one person and blocks them from performing any actions.",
            ],
        },
        "Blacksmith": {
            alignment: "Village",
            description: [
                "Hands out armor to one player each night.",
                "Armor can block a single attack."
            ],
        },
        "Archer": {
            alignment: "Village",
            description: [
                "When executed, can choose someone to kill."
            ],
        },
        "Watcher": {
            alignment: "Village",
            description: [
                "Watches someone each night and learns who visits them."
            ],
        },
        "Tracker": {
            alignment: "Village",
            description: [
                "Tracks someone each night and learns who they visit."
            ],
        },
        "Monkey": {
            alignment: "Village",
            description: [
                "Each night can steal the actions of a player and do them itself.",
                "The steal cannot be blocked, but the actions themselves can."
            ],
        },
        "Agent": {
            alignment: "Village",
            description: [
                "Attempts to guess the identity of the Spy each night.",
                "Kills the Spy if guess is correct."
            ],
        },
        "Sheriff": {
            alignment: "Village",
            description: [
                "Starts with a gun.",
                "This gun will always reveal the sheriff when shot."
            ],
        },
        "Deputy": {
            alignment: "Village",
            description: [
                "Starts with a gun.",
                "This gun will never reveal the deputy when shot."
            ],
        },
        "Knight": {
            alignment: "Village",
            description: [
                "Starts with armor.",
            ],
        },
        "Bomb": {
            alignment: "Village",
            description: [
                "Starts with a bomb that will explode when the player is killed.",
                "Does not explode if executed.",
            ],
        },
        "Village Idiot": {
            alignment: "Village",
            description: [
                "Sees all speech as coming from random people.",
                "Appears as Villager to self."
            ],
        },
        "Medic": {
            alignment: "Village",
            description: [
                "Can save one person each night from dying, including herself."
            ],
        },
        "Babushka": {
            alignment: "Village",
            description: [
                "Kills all who visit her during the night.",
                "Cannot be killed normally."
            ],
        },
        "Illuminato": {
            alignment: "Village",
            description: [
                "Meets with other Illuminati members during the night."
            ],
        },
        "Suspect": {
            alignment: "Village",
            description: [
                "Appears as Villager to self.",
                "Appears as Mafioso to investigative roles.",
                "Appears as Mafioso upon being executed.",
                "Appears as Suspect upon being killed.",
            ],
        },
        "Mayor": {
            alignment: "Village",
            description: [
                "Is publicly revealed to all players.",
            ],
        },
        "Priest": {
            alignment: "Village",
            description: [
                "Kills the Lycan when visited by him.",
                "Cleanses werewolves when visited by them.",
            ],
        },
        "Mason": {
            alignment: "Village",
            description: [
                "Meets with other Masons during the night.",
                "The group converts one player into a Mason each night.",
                "All Masons die if they attempt to convert a member of the Mafia.",
            ],
        },
        "Jailer": {
            alignment: "Village",
            description: [
                "Chooses someone to jail each day.",
                "Meets with the prisoner at night and the prisoner cannot attend other meetings or perform actions.",
                "Decides whether prisoner should be executed or not.",
            ],
        },
        "Psychic": {
            alignment: "Village",
            description: [
                "Can anonymously contact any non-Village role.",
            ],
        },

        //Mafia
        "Mafioso": {
            alignment: "Mafia",
            description: [
                "Wins when the mafia outnumbers all other players.",
            ],
        },
        "Chemist": {
            alignment: "Mafia",
            description: [
                "Concocts a deadly poison and administers it to one person each night.",
                "The poisoned target will die at the end of the following night unless saved.",
            ],
        },
        "Stalker": {
            alignment: "Mafia",
            description: [
                "Stalks one person each night and learns their role.",
            ],
        },
        "Hooker": {
            alignment: "Mafia",
            description: [
                "Each night, chooses one person and blocks them from performing any actions.",
            ],
        },
        "Godfather": {
            alignment: "Mafia",
            description: [
                "Leads the mafia kill each night.",
                "Appears as Villager/innocent to investigative roles.",
            ],
        },
        "Driver": {
            alignment: "Mafia",
            description: [
                "Each night, chooses two targets, A and B.",
                "Players who visit A will be redirected to B, and players who visit B will be redirected to A.",
                "Does not visit.",
                "Redirection cannot be role blocked."
            ],
        },
        "Spy": {
            alignment: "Mafia",
            description: [
                "Attempts to guess the identity of the Agent each night.",
                "Kills the Agent if guess is correct."
            ],
        },
        "Lawyer": {
            alignment: "Mafia",
            description: [
                "Chooses a fellow mafia member each night and makes them appear as a Villager/innocent to investigative roles."
            ],
        },
        "Disguiser": {
            alignment: "Mafia",
            description: [
                "Can steal the identity of the person killed by the Mafia each night."
            ],
        },
        "Sniper": {
            alignment: "Mafia",
            description: [
                "Starts with a gun.",
                "Gun does not reveal the sniper when shot.",
                "Does not attend Mafia meetings.",
            ],
        },
        "Janitor": {
            alignment: "Mafia",
            description: [
                "Can choose a person to clean each night.",
                "If that person dies their role will not be revealed.",
            ],
        },
        "Telepath": {
            alignment: "Mafia",
            description: [
                "Can anonymously contact any role.",
            ],
        },

        //Monsters
        "Lycan": {
            alignment: "Monsters",
            description: [
                "Invincible during full moons, except for visiting the Priest.",
                "Each night, bites a non-monster player and turns them into a werewolf.",
                "Werewolves retain their original roles, but they unknowingly kill a random non-monster player on full moons."
            ],
        },
        "Witch": {
            alignment: "Monsters",
            description: [
                "Can choose a player to control.",
                "Chooses who that player will perform their actions on.",
                "Redirection cannot be role blocked.",
                "Causes an eclipse during the day following her death.",
                "All votes and speech are anonymous during an eclipse."
            ],
        },
        "Cthulhu": {
            alignment: "Monsters",
            description: [
                "All who visit the Cthulhu go insane.",
                "Insane players speak gibberish."
            ],
        },

        //Independent
        "Jester": {
            alignment: "Independent",
            description: [
                "Wins if executed by the town.",
                "No one else wins if the Jester wins.",
            ],
        },
        "Serial Killer": {
            alignment: "Independent",
            description: [
                "Must kill a player each night.",
                "Wins if among last two alive."
            ],
        },
        "Amnesiac": {
            alignment: "Independent",
            description: [
                "Once per game can become the role of a dead player."
            ],
        },
        "Survivor": {
            alignment: "Independent",
            description: [
                "Wins if survives until the end of the game."
            ],
        },
        "Cultist": {
            alignment: "Independent",
            description: [
                "Meets with other Cultists during the night.",
                "The group converts one player into a Cultist each night.",
                "All Cultists die if a leader (original Cultist) dies.",
            ],
        },
    },
    "Split Decision": {
        //Blue
        "Blue Member": {
            alignment: "Blue",
            description: [
                "Wins if the President is not in the same room as the Bomber at the end of the game."
            ]
        },
        "President": {
            alignment: "Blue",
            description: [
                "The Blue team wins if he is in a different room from the Bomber at the end of the game."
            ]
        },
        //Red
        "Red Member": {
            alignment: "Red",
            description: [
                "Wins if the President is in the same room as the Bomber at the end of the game."
            ]
        },
        "Bomber": {
            alignment: "Red",
            description: [
                "The Red team wins if he is in the same room as the Bomber at the end of the game."
            ]
        },
        //Independent
        "Gambler": {
            alignment: "Independent",
            description: [
                "Guesses which team will win after the last round and wins if correct."
            ]
        },
    },
    "Resistance": {
        //Resistance
        "Rebel": {
            alignment: "Resistance",
            description: [
                "Wins if a certain number of missions are successful."
            ]
        },
        //Spies
        "Spy": {
            alignment: "Spies",
            description: [
                "Wins if a certain number of missions fail."
            ]
        },
    },
    "One Night": {
        //Village
        "Villager": {
            alignment: "Village",
            description: [
                "Wins if at least one Werewolf dies or if no one dies if no Werewovles are present."
            ]
        },
        "Hunter": {
            alignment: "Village",
            description: [
                "If executed, the person he voted to execute is also killed."
            ]
        },
        "Mason": {
            alignment: "Village",
            description: [
                "Learns who the other Masons are at the beginning of the night."
            ]
        },
        "Seer": {
            alignment: "Village",
            description: [
                "At the beginning of the night, learns either one player's role or two excess roles."
            ]
        },
        "Robber": {
            alignment: "Village",
            description: [
                "At 12:00, can choose to exchange roles with another player and learn his new role.",
                "Does not perform the action of his new role.",
            ]
        },
        "Troublemaker": {
            alignment: "Village",
            description: [
                "At 1:00, can swap the roles of two other players.",
                "Those players do not perform the actions of their new roles.",
            ]
        },
        "Insomniac": {
            alignment: "Village",
            description: [
                "Learns what her role is after the night is over.",
            ]
        },
        //Werewolves
        "Werewolf": {
            alignment: "Werewolves",
            description: [
                "Learns who the other Werewolves are at the beginning of the night.",
                "If there are no other Werewolves, learns one excess role.",
                "Wins if Werewovles are present but no Werewolves die.",
            ]
        },
        "Minion": {
            alignment: "Werewolves",
            description: [
                "Learns who the Werewolves are at the beginning of the night.",
                "Wins with the Werewovles, and wins if a non-minion player dies when no Werewolves are present.",
            ]
        },
        //Independent
        "Drunk": {
            alignment: "Independent",
            description: [
                "Becomes a random excess role at the end of the night.",
            ]
        },
        "Tanner": {
            alignment: "Independent",
            description: [
                "Wins if he dies.",
                "The Werewolves do not win if he dies.",
                "The Village does not win if he dies and no Werewolves are present.",
            ]
        },
        "Doppelganger": {
            alignment: "Independent",
            description: [
                "At the beginning of the night, copies and becomes the role of another player.",
                "Performs the actions of that role, unless another Doppelganger was chosen.",
                "Her new actions are performed before the player's whose role was copied."
            ]
        },
    },
};

module.exports = roleData;