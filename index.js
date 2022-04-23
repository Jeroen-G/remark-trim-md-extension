import visit from "unist-util-visit";

export default function trimMdExtension() {
    function visitor(node) {
        if (/\.md/.test(node.url)) {
            node.url = node.url.replace(/\.md/, '');
        }
    }

    function transform(tree) {
        visit(tree, ['link', 'linkReference'], visitor);
    }

    return transform;
};
