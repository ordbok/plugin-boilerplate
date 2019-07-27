"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyPluginLib = require("./lib");
/* *
 *
 *  Classes
 *
 * */
/**
 * ORDBOK Plugin
 */
var MyPlugin = /** @class */ (function () {
    function MyPlugin() {
    }
    /**
     * Called after assembling. Can be removed, if not needed.
     */
    MyPlugin.prototype.onAssembled = function () {
        MyPluginLib.myUtilityFunction('onAssembled', {});
    };
    /**
     * Called before assembling. Can be removed, if not needed.
     *
     * @param sourceFolder
     *        Source folder
     *
     * @param targetFolder
     *        Target folder
     */
    MyPlugin.prototype.onAssembling = function (sourceFolder, targetFolder) {
        MyPluginLib.myUtilityFunction('onAssembling', { sourceFolder: sourceFolder, targetFolder: targetFolder });
    };
    /**
     * Called after reading a markdown file. Can be removed, if not needed.
     *
     * @param sourceFile
     *        Source file
     *
     * @param markdown
     *        File's markdown
     */
    MyPlugin.prototype.onReadFile = function (sourceFile, markdown) {
        MyPluginLib.myUtilityFunction('onReadFile', { sourceFile: sourceFile, markdown: markdown });
    };
    /**
     * Called before writing a dictionary entry. Can be removed, if not needed.
     *
     * @param targetFile
     *        Target file
     *
     * @param markdownPage
     *        File's markdown
     */
    MyPlugin.prototype.onWriteFile = function (targetFile, markdownPage) {
        MyPluginLib.myUtilityFunction('onWriteFile', { targetFile: targetFile, markdownPage: markdownPage });
    };
    return MyPlugin;
}());
/* *
 *
 *  Exports
 *
 * */
exports.ordbokPlugin = new MyPlugin();
