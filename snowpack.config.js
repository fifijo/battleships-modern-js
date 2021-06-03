module.exports = {
    "mount": {
        "public": "/",
        "src": "/dist"
    },
    "plugins": [
        ["@snowpack/plugin-webpack", {
            "failOnWarnings": true,
            "htmlMinifierOptions": true
            }
        ]
    ]
};
