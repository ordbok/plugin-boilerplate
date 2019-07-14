({
    generateSourceMaps: true,
    name: "@ordbok/plugin-boilerplate",
    out: "dist/client.js",
    packages: [{
        name: "@ordbok/plugin-boilerplate",
        main: "dist/lib/index"
    }],
    paths: {
        "@ordbok/plugin-boilerplate/dist/lib": "dist/client"
    }
})
