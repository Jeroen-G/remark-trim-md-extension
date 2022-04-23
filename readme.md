# remark-trim-md-extension
[![npm version](https://badge.fury.io/js/remark-trim-md-extension.svg)](https://www.npmjs.com/package/remark-trim-md-extension)

[Remark](https://github.com/remarkjs/remark) plugin to remove the .md extension when you have links to other md files. This is for example useful when you use markdown files as pages in NextJS.

## Installation
```npm install remark-trim-md-extension```

## Example usage
```js
import remark from 'remark';
import html from 'remark-html';
import trimMdExtension from 'remark-trim-md-extension';

async function markdownToHtml(markdown) {
    const result = await remark()
        .use(html)
        .use(RemoveMdExtension)
        .process(markdown);

    return result.toString();
}
```

When given `Here is a [link](local-file.md)` this will result in `Here is a <a href="local-file">link</a>`