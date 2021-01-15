# Time To React

Would you like to create 2D games with a modern, lean, component-based, open source game engine? Then download [Godot](https://godotengine.org/)!

But do you want the game engine to run on the browser, or just want to program grames in JavaScript? Then go for [Phaser](https://phaser.io/)!

And what if you want the best of both worlds? Then it's Time To React (TTR)!

## Features

- [React](https://reactjs.org/)-based, so relying on [Fiber](https://github.com/acdlite/react-fiber-architecture) for optimal performance
- [Redux](https://redux.js.org/)-based, so game snapshots can be saved, loaded, and shared
- Functional Programming-based, so no dealing with `this`
- ...But state is mutated with [Immer](https://immerjs.github.io/immer/docs/introduction)
- Games are built through a declarative config file

## Usage

Install dependencies through

```
yarn
```

or

```
npm install
```

then start the engine with

```
yarn start
```

or

```
npm start
```

And the default game should load at http://localhost:3000/

## Games

The default loaded game is "Chase the mouse".

Other games can be loaded by appending their name as a URL parameter: http://localhost:3000/?game=chase-the-mouse

Available games:

- Chase the mouse (`chase-the-mouse`): a prototype in which you move a cat around the place with the arrow keys
- Tilemaps (`tilemaps`): a prototype showing a tilemap taken from [react-game-kit](https://github.com/FormidableLabs/react-game-kit)
- RGK Demo (`rgk-demo`): an attempt to reproduce the whole demo from [react-game-kit](https://github.com/FormidableLabs/react-game-kit)

## Todo

- [ ] Add mouse input support
- [ ] Add audio support
- [ ] Complete the RGK Demo game
- [ ] Add some pre-cooked game AI
- [ ] Create an editor

## Acknowledgments

As you can imagine, this project is heavily inspired by [react-game-kit](https://github.com/FormidableLabs/react-game-kit) and [Godot](https://godotengine.org/), from which I borrowed some concepts and even some code.

The main source of inspiration however was the React-based framework I created for [Irion](https://www.irion-edm.com/), the SVG charts I created for [Tetra Pak](https://www.tetrapak.com/), and the study of [AI for Game Developers](https://www.oreilly.com/library/view/ai-for-game/0596005555/) which lead me to implement some of the described algorithms in an environment that could be familiar to me.
