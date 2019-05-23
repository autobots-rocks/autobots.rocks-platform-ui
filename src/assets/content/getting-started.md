# Getting Started
Autobots is a bot framework designed for simplicity and has a growing ecosystem of drop-in modules to use.

Using modules is as easy as running `npm install <module name>` after creating a very basic entry point.

## <span style="color: limegreen">01</span> Create a New Project

Create a new project directory and run:

```bash
npm init -y
npm install @autobot/common @autobot/db
```

## <span style="color: limegreen">02</span> Setup .env file

Now we need to configure the bot using an `.env` file with the following settings:

```
#
# Sample .env file
# Copy this file .env to be picked up by the bot's dotenv call.
#
# *** DO NOT CHECK THE .env FILE INTO GIT! ***
#
TOKEN=<your discord bot token>
OWNER_ID=<your discord user id>
MYSQL_HOST=<mysql hostname>
MYSQL_PORT=<mysql port>
MYSQL_USER=<mysql username>
MYSQL_PASSWORD=<mysql password>
MYSQL_DATABASE=<mysql database 
```

## <span style="color: limegreen">03</span> Entry Point

bot.js
```javascript
const autobot = require('@autobot/common');

autobot.BOT.start();
```

## <span style="color: limegreen">04</span> Install Modules

```bash
npm install @autobot/module-flip
```

## <span style="color: limegreen">05</span> Start the Bot

```bash
$ node bot.js

Thu May 23 2019 10:49:59 GMT-0500 (Central Daylight Time): Bot Started
Thu May 23 2019 10:49:59 GMT-0500 (Central Daylight Time): Command Registered: 8ball (Returns a random value like an 8ball would.)
Thu May 23 2019 10:49:59 GMT-0500 (Central Daylight Time): Command Registered: colour (Returns an embed with the color passed to it.)
Thu May 23 2019 10:49:59 GMT-0500 (Central Daylight Time): Command Registered: ++add (Create or replace a new macro. Usage: ++add name=docker,message=Check out https://docker.io!)
Thu May 23 2019 10:49:59 GMT-0500 (Central Daylight Time): Command Registered: ++delete (Deletes a macro. Usage: ++delete name=docker)
Thu May 23 2019 10:49:59 GMT-0500 (Central Daylight Time): Command Registered: * (Display a saved macro. Usage: +docker)
Thu May 23 2019 10:49:59 GMT-0500 (Central Daylight Time): Command Registered: ++list (Display all saved macros. Usage: ++list)
```
