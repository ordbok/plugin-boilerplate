import { IMarkdownPage, Markdown } from '@ordbok/core';
import { IPlugin } from '@ordbok/core/dist/plugin';
declare class MyPlugin implements IPlugin {
    onAssembled(): void;
    onAssembling(sourceFolder: string, targetFolder: string): void;
    onReadFile(sourceFile: string, markdown: Markdown): void;
    onWriteFile(targetFile: string, markdownPage: IMarkdownPage): void;
}
export declare const ordbokPlugin: MyPlugin;
export {};
