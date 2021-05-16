module.exports = {
    "mount": {
        // Directory name: 'build directory'
        "public": "/",
        "src": "/dist"
    },
    "plugins": [
        ["@snowpack/plugin-webpack", {
            "failOnWarnings": true,
            "htmlMinifierOptions": true
            }
        ],
        "@snowpack/plugin-react-refresh"

    ]
};
