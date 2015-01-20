kraken-devtools-browserify
==========================

Browserify plugin for kraken-devtools


## Usage

Add:

```json
"browserify": {
    "module": "kraken-devtools-browserify",
    "files": "/js/**/*.js"
}
```

to your kraken development configuration (config/development.json) under middleware.devtools.module[name=kraken-devtools].arguments.

Should look like this:

<pre>
"middleware": {
    ...

    "devtools": {
        ...

        "module": {
            "name": "kraken-devtools",
            "arguments": [
                ...
                {
                    ...
                    "css": {
                        "module": "kraken-devtools/plugins/less",
                        "files": "/css/**/*.css"
                    },
<b>
                    "browserify": {
                        "module": "kraken-devtools-browserify",
                        "files": "/js/**/*.js"
                    },
</b>
                    "copier": {
                        "module": "kraken-devtools/plugins/copier",
                        "files": "**/*"
                    }
                }
            ]
        }
    }
}
</pre>

#### option transform
Type: `[String]` or `[[String,  Object]]`

Specifies a pipeline of modules through which the browserified bundle will be run. The transform is a string referring to a NPM module. The [browserify docs themselves](https://github.com/substack/node-browserify#btransformtr) explain transform well, but below is an example of transform used with `kraken-devtools-browserify` to automatically compile coffeescript files for use in a bundle:

```json
"browserify": {
    "module": "kraken-devtools-browserify",
    "files": "/js/**/*.js",
    "transform": ["coffeeify"]
}
```
Transforms can also be provided with an options hash; in this case, the transform should be specified as an array of `[transformStringOrFn, optionsHash]`.
