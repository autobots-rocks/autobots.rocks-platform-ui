# Getting Started

Using modules is as easy as running `npm install <module name>` after creating a very basic entry point.

## Create a New Project

Create a new project directory and run:

```bash
npm init -y
npm install @autobot/common @autobot/db
```

## Setup .env file

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

## Entry Point

bot.js
```javascript
const autobot = require('@autobot/common');

autobot.BOT.start();
```
