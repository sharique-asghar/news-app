# This repository is meant for NEWS APP utilizing News Api Service (newsorg.api)

# Start running the app by following the below steps:

To Run the app in the development mode:
1. Run `npm install` to install all dependencies
2. Create .env file (Run `touch .env`) in project root directory and add API_KEY and NODE_ENV in the form of        NAME=VALUE
3. Run `npm run dev` to start the app
4. Open [http://localhost:8000] to see server running
5. Open [http://localhost:3001] to view client running in the browser.

# To install all modules

Run `npm install`

# On missing module dependencies

Run `npm install`
___

# On developement machine:

Run below command to start only client:
`npm run client`
* Note: client will run on the port 3001
___

Run below command to start only server:
`npm run server`
* Note: server will run on the port 8000

# On production machine:
Run `npm run build`

# Config changes
___

URL configs are available in

Config Folder: `server/config`

PROD config:
`server/config/prod.config.js`

DEV config:
`server/config/dev.config.js`

___

# Tech stack used

* React (Using CRA) - client
* Express - server
* Material UI - common components and styling
* Sass - style

# Application structure
___

# public 
    -- index.html
# src
    -- common
        -- ui
            -- Layout.js
            -- Lists.js
            -- Skelton.js
            -- Toast.js
            -- Styles.scss
    -- component
        -- Home.js
        -- Navbar.js
        -- NewsCard.js
        -- NewsFeedLayout.js
        -- NewsFeed.js
        -- NotFound.js
        -- SideBar.js
    -- services
        -- news.js
    -- utils
        -- api.js
        -- apiHandler.js
        -- constants.js
        -- function.js
    -- config.js
    -- index.js
    -- index.scss
    -- App.js
# server
    -- config
        -- dev.js
        -- prod.js
        -- test.js
        -- index.js
    -- controllers
        -- newsController.js
    -- utils
        -- apiHandler.js
        -- helpers.js
        -- tracer.js
    -- index.js
    -- routes.js
# .env
# .gitignore
#  README.md
#  package.json
#  log4j.json
