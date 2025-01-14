# Gitmoji-commit-hook

> Prepend the right emoji to your commit message from [Gitmoji](https://github.com/carloscuesta/gitmoji)

## Install

- Install gitmoji-commit-hook package

```
$ npm install -g @fawen/gitmoji-commit-hook
```

- Install the hook

```
$ cd any-git-initialized-directory
$ gitmoji-commit-hook --init
```

## Usage

![Demo](https://github.com/tjoskar/gitmoji-commit-hook/blob/master/demo.gif?raw=true)

## Config

You can put unwanted emojis in a blacklist section by adding the name in a blacklist array in your `package.json`:

```json
{
  "gitmoji": {
    "blacklist": [
      "card-file-box",
      "beers"
    ]
  }
}
```

## Emoji Meanings

A list of available emojis and their associated meanings can be found at [gitmoji.carloscuesta.me](https://gitmoji.carloscuesta.me/)

## KISS principle

This package follow KISS principle, the only thing it does is to allow you
to add an emoji from gitmojis list to your commit.

If you're looking for some other cool feature like search in gitmojis list,
please consider [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli)

## Develop

To run the linter: `npm run lint`

To run the unit test: `npm test`

To dry run the script:
```bash
node invoke.js --init # run the init setup

node invoke.js mock_hooks/COMMIT_EDITMSG # simulate a git commit
```

## License

The code is available under the [MIT](https://github.com/tjoskar/gitmoji-commit-hook/blob/master/LICENSE) license.
