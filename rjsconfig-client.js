({
    generateSourceMaps: true,
    name: "@ordbok/plugin-boilerplate",
    out: "dist/client.js",
    packages: [{
        name: "@ordbok/plugin-boilerplate",
        main: "index",
        location: 'dist/client'
    }, {
        name: "@ordbok/core",
        main: "index",
        location: "node_modules/@ordbok/core/dist/client"
    }]
})
