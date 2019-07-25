import { IMarkdownPage, IPlugin, Markdown } from '@ordbok/core/dist';
import * as MyPluginLib from './lib';

class MyPlugin implements IPlugin {

    public onAssembled() {
        MyPluginLib.myUtilityFunction('onAssembled', {});
    }

    public onAssembling (sourceFolder: string, targetFolder: string) {
        MyPluginLib.myUtilityFunction('onAssembling', { sourceFolder, targetFolder });
    }

    public onReadFile (sourceFile: string, markdown: Markdown) {
        MyPluginLib.myUtilityFunction('onReadFile', { sourceFile, markdown });
    }

    public onWriteFile (targetFile: string, markdownPage: IMarkdownPage) {
        MyPluginLib.myUtilityFunction('onWriteFile', { targetFile, markdownPage });
    }
}

export const ordbokPlugin = new MyPlugin();
