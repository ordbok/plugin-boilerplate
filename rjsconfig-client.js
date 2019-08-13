({
    generateSourceMaps: true,
    name: "@ordbok/plugin-boilerplate",
    out: "dist/client.js",
    exclude: [
        "@ordbok/core"
    ],
    packages: [{
        name: "@ordbok/core",
        main: "index",
        location: 'node_modules/@ordbok/core/dist/client/ordbok-core'
    }, {
        name: "@ordbok/plugin-boilerplate",
        main: "index",
        location: 'dist/client'
    }]
})
