# hanabi-clone-web
Small project to clone hanabi

[wikipedia](https://en.wikipedia.org/wiki/Hanabi_(card_game))

Although the game will not be a direct clone, but rather inspired from this game.

This is a work in progress right now, it is not playable for a while.

# How to play

1. You can't see your own cards
2. You play with a few other people, and you have to tell them some information about their cards
  a. Such as, these 3 cards are red, 2's, or etc. You must tell them all cards that match this information
3. The amount of information you can give is limited
4. You must make piles of 1,2,3,4,5 like solitaire by playing your cards down on the table
5. You can do 3 things each turn, play, discard a card, or give information
6. You have 3 chances to make a mistake (if you play a number like 3, and there is only a 1 on the table that's bad)

Think cooperative solitaire without seeing your own cards

# Running
You need nodejs to run this. Do the following steps once you have nodejs installed:

1. `npm install -g webpack webpack-dev-server`
2. `git clone https://github.com/dat2/hanabi-clone-web.git`
3. `cd hanabi-clone-web`
4. `npm install` (no arguments)
5. `npm start`
6.  visit `localhost:8080` in your browser to play

There may be an issue on windows, due to `html-webpack-plugin`. In that case, you must add `bundle.css`, `bundle.js` to `app/index.html` manually, using `<link>` and `<script>` tags, and edit `webpack.config.js` to remove `inject: true` wherever you find it.

# Building
To build a static website available to deploy to a static file server, run `npm build` and in the build directory you will find

1. index.html
2. bundle.js
3. bundle.css

and that is all you need to host this game.
