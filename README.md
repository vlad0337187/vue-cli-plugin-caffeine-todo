# vue-cli-plugin-caffeine

CaffeineScript support for the projects created with [@vue/cli](https://github.com/vuejs/vue-cli).

## Installation

According to [this](https://cli.vuejs.org/guide/plugins-and-presets.html#installing-plugins-in-an-existing-project) you are able to install community plugins as follows:

```shell
vue add caffeine
```

## Entries

According to [this](https://cli.vuejs.org/config/#configurewebpack) you can add entries using your `vue.config.js` like so:

```javascript
// vue.config.js
module.exports = {
  configureWebpack: {
    entry: {
      'new-entry': 'path/to/new/entry.caffeine'
    }
  }
}

```

## Troubleshooting

You should turn off ESLint or any non-caffeine lint you have, of course :wink:
