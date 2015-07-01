# hanabi-clone-web
Small project to clone hanabi

[wikipedia](https://en.wikipedia.org/wiki/Hanabi_(card_game))

Although the game will not be a direct clone, but rather inspired from this game.

This is a work in progress right now, it is not playable for a while.

# Running
You need nodejs to run this. Do the following steps once you have nodejs installed:

1. `npm install -g webpack webpack-dev-server`
2. `git clone https://github.com/dat2/hanabi-clone-web.git`
3. `cd hanabi-clone-web`
4. `npm install` (no arguments)
5. `npm start`
6.  visit `localhost:8080` in your browser to play

# Building
To build a static website available to deploy to a static file server, run `npm build` and in the build directory you will find
1. index.html
2. bundle.js
3. bundle.css

and that is all you need to host this game.
