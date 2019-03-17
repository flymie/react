module.exports ={
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "Images": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-plusplus": "off",
        "react/jsx-max-props-per-line": "off",
        "import/no-mutable-exports": "off",
        "react/prefer-stateless-function": "off",
        "no-param-reassign": "off",
        "react/require-default-props": "off",
        "global-require": 0,
        "import/no-extraneous-dependencies": ["error", { devDependencies: true }]
    },
    "settings": {
        "import/resolver": {
            "webpack":{
                "config": "build/webpack.base.conf.js"
            }
        }
    }
}
