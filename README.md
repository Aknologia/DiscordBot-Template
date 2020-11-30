# DiscordBot Template 
[![NodeJS](https://img.shields.io/badge/NodeJS->%3D%2013.12.0-green.svg)](https://nodejs.org/en/download)
[![License](https://img.shields.io/github/license/Aknologia/DiscordBot-Template)](https://github.com/Aknologia/DiscordBot-Template/blob/master/LICENSE)
[![Star on Github](https://img.shields.io/github/stars/Aknologia/DiscordBot-Template)](https://github.com/Aknologia/DiscordBot-Template/stargazers)
[![Fork on Github](https://img.shields.io/github/forks/Aknologia/DiscordBot-Template)](https://github.com/Aknologia/DiscordBot-Template/fork)
[![Issues](https://img.shields.io/github/issues/Aknologia/DiscordBot-Template)](https://github.com/Aknologia/DiscordBot-Template/issues)

###### Licensed under the **MIT License**.

Installation :
--------------
#### Here's a quick guide on how to use this template.
##### __Useful links:__
##### NodeJS : [Download](https://nodejs.org/en/download/) v13.12.0+
##### Git : [Download](https://git-scm.com/downloads)
##### VS Code : [Download](https://code.visualstudio.com/Download)
```
# Clone the Repository
$ git clone https://github.com/Aknologia/DiscordBot-Template.git

# Add your bot's token in the '.env' file (TOKEN=Your_Token)

# Now you can start the bot by doing either
$ node bot.js
# or
$ node .
```

Frequently Asked Questions :
---------------------
- ##### **What are the requirements to use this bot ?**
##### You will only need **NodeJS** (v13.12.0+), an **IDE/Text Editor** (e.g. Visual Studio Code) and possibly **Git** (Recommended).
- ##### **How can I add commands ?**
##### You can easily add commands by creating a JavaScript file (.js) in the 'commands' folder. (You can copy the 'template.tpl' file)
- ##### **How can I edit the settings ?**
##### You can add/set environment variables (global & secret keys) in the '.env' file (e.g. `MY_VARIABLE=VALUE`) and set the basic settings in the 'config.yml' file.

Default Libraries :
-------------------
* [discord.js](https://www.npmjs.com/package/discord.js) - v12.5.1
* [dotenv](https://www.npmjs.com/package/dotenv) -  v8.2.0
* [config-yaml](https://www.npmjs.com/package/config-yaml) - v1.1.6
* [systeminformation](https://www.npmjs.com/package/systeminformation) - v4.30.7
