import { IMarkdownPage, IPlugin, Markdown } from '@ordbok/core/dist';
/**
 * ORDBOK Plugin
 */
declare class MyPlugin implements IPlugin {
    /**
     * Called after assembling. Can be removed, if not needed.
     */
    onAssembled(): void;
    /**
     * Called before assembling. Can be removed, if not needed.
     *
     * @param sourceFolder
     *        Source folder
     *
     * @param targetFolder
     *        Target folder
     */
    onAssembling(sourceFolder: string, targetFolder: string): void;
    /**
     * Called after reading a markdown file. Can be removed, if not needed.
     *
     * @param sourceFile
     *        Source file
     *
     * @param markdown
     *        File's markdown
     */
    onReadFile(sourceFile: string, markdown: Markdown): void;
    /**
     * Called before writing a dictionary entry. Can be removed, if not needed.
     *
     * @param targetFile
     *        Target file
     *
     * @param markdownPage
     *        File's markdown
     */
    onWriteFile(targetFile: string, markdownPage: IMarkdownPage): void;
}
export declare const ordbokPlugin: MyPlugin;
export {};
