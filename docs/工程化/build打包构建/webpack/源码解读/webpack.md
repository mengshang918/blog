---
id: f8850ecc0cd40bf7ce85f24b413ee093
title: webpack
---

```json
{
  "entry": {
    "main": ["/Users/jiangxiaowei/jd/babel-tower/src/client/main"],
    "vendor": [
      "whatwg-fetch",
      "react",
      "react-dom",
      "react-router",
      "redux",
      "react-redux",
      "redux-saga",
      "reselect",
      "immutable",
      "redux-immutablejs",
      "react-immutable-proptypes",
      "react-draggable",
      "react-custom-scroll",
      "react-dnd",
      "react-dnd-html5-backend",
      "intl-messageformat",
      "react-intl",
      "@jmfe/js-agent",
      "moment",
      "react-quill",
      "rc-calendar",
      "rc-time-picker",
      "react-color"
    ]
  },
  "output": {
    "filename": "js/[name].bundle.js",
    "chunkFilename": "js/[name].bundle.js",
    "path": "/Users/jiangxiaowei/jd/babel-tower/devDist"
  },
  "resolve": {
    "modules": [
      "/Users/jiangxiaowei/jd/babel-tower/src/client",
      "node_modules"
    ],
    "extensions": [".webpack.js", ".js", ".jsx"],
    "alias": {
      "Shared": "components/Shared",
      "Feature": "components/Feature",
      "Page": "components/Page",
      "Scene": "components/Scene",
      "Constants": "constants",
      "Connector": "components/Connector"
    }
  },
  "module": {
    "rules": [
      {
        "test": {},
        "loader": "html-loader"
      },
      {
        "test": {},
        "loader": "happypack/loader?id=es6",
        "include": "/Users/jiangxiaowei/jd/babel-tower/src/client",
        "exclude": {}
      },
      {
        "test": {},
        "loader": "url-loader?limit=10000&minetype=application/font-woff&name=images/[name].[ext]"
      },
      {
        "test": {},
        "loader": "url-loader?limit=1&minetype=application/font-woff&name=fonts/[name].[ext]"
      },
      {
        "test": {},
        "loader": "html-loader!markdown-loader"
      },
      {
        "test": {},
        "loader": [
          {
            "loader": "/Users/jiangxiaowei/jd/babel-tower/node_modules/_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin/dist/loader.js",
            "options": {
              "omit": 1,
              "remove": true
            }
          },
          {
            "loader": "style-loader"
          },
          {
            "loader": "css-loader"
          }
        ]
      },
      {
        "test": {},
        "loader": [
          {
            "loader": "/Users/jiangxiaowei/jd/babel-tower/node_modules/_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin/dist/loader.js",
            "options": {
              "omit": 1,
              "remove": true
            }
          },
          {
            "loader": "style-loader"
          },
          {
            "loader": "css-loader"
          },
          {
            "loader": "stylus-loader"
          }
        ]
      },
      {
        "test": {},
        "loader": "file-loader?name=css/fonts/[name].[ext]"
      }
    ]
  },
  "plugins": [
    {
      "chunkNames": ["vendor"],
      "filenameTemplate": "js/[name].[chunkhash:4].js",
      "minChunks": null,
      "ident": "/Users/jiangxiaowei/jd/babel-tower/node_modules/_webpack@3.12.0@webpack/lib/optimize/CommonsChunkPlugin.js0"
    },
    {
      "chunkNames": ["manifest"],
      "ident": "/Users/jiangxiaowei/jd/babel-tower/node_modules/_webpack@3.12.0@webpack/lib/optimize/CommonsChunkPlugin.js1"
    },
    {},
    {
      "paths": ["devDist"],
      "options": {
        "root": "/Users/jiangxiaowei/jd/babel-tower",
        "verbose": true,
        "dry": false,
        "allowExternal": false
      }
    },
    {
      "compilationSuccessInfo": {},
      "shouldClearConsole": true,
      "formatters": [null, null, null],
      "transformers": [null, null, null]
    },
    {
      "name": "HappyPack",
      "state": {
        "loaders": [],
        "baseLoaderRequest": "",
        "foregroundThreadPool": null,
        "verbose": false,
        "debug": false
      },
      "config": {
        "id": "es6",
        "compilerId": "default",
        "threads": 3,
        "verbose": true,
        "threadPool": {
          "size": 8
        },
        "loaders": [
          {
            "loader": "babel-loader",
            "options": {
              "cacheDirectory": ".webpack_cache",
              "presets": ["es2015", "stage-0", "react"],
              "plugins": [
                "transform-runtime",
                "transform-decorators-legacy",
                "syntax-dynamic-import"
              ],
              "sourceMaps": true
            }
          }
        ]
      },
      "id": "es6"
    },
    {
      "options": {
        "template": "/Users/jiangxiaowei/jd/babel-tower/src/client/index.html",
        "filename": "index.html",
        "hash": false,
        "inject": true,
        "compile": true,
        "favicon": false,
        "minify": {
          "removeAttributeQuotes": true,
          "collapseWhitespace": true,
          "removeComments": true
        },
        "cache": true,
        "showErrors": true,
        "chunks": "all",
        "excludeChunks": [],
        "chunksSortMode": "auto",
        "meta": {},
        "title": "Webpack App",
        "xhtml": false
      }
    },
    {
      "options": {
        "apiOptions": {
          "cssImageRef": "~images/sprite[hash:7].png",
          "customTemplates": {},
          "handlebarsHelpers": {}
        },
        "spritesmithOptions": {},
        "spritesheetTemplatesOptions": {
          "format": "stylus"
        },
        "src": {
          "cwd": "/Users/jiangxiaowei/jd/babel-tower/src/client/images/icons",
          "glob": "*.png"
        },
        "target": {
          "image": "/Users/jiangxiaowei/jd/babel-tower/src/client/images/sprite[hash:7].png",
          "css": [
            [
              "/Users/jiangxiaowei/jd/babel-tower/src/client/styles/sprite.styl",
              {
                "format": "stylus"
              }
            ]
          ]
        }
      },
      "useRetinaTemplates": false,
      "metaOutput": {
        "warnings": [],
        "errors": []
      }
    },
    {
      "options": {
        "cssProcessorOptions": {
          "autoprefixer": {
            "remove": false
          }
        },
        "assetNameRegExp": {},
        "canPrint": true
      },
      "lastCallInstance": {
        "options": {
          "assetProcessors": [
            {
              "phase": "compilation.optimize-chunk-assets",
              "regExp": {}
            }
          ],
          "canPrint": true
        },
        "deleteAssetsMap": {}
      }
    },
    {},
    {
      "definitions": {
        "process.env.NODE_ENV": "\"release\"",
        "process.env.VERSION": "\"080544\""
      }
    },
    {
      "filename": "css/[name].bundle.css",
      "id": 1,
      "options": {}
    }
  ],
  "devtool": "cheap-module-source-map"
}
```
