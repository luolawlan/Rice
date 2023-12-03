import { Vnode, attributes, child, tagName } from "./types"

function h(type: tagName,
    props: attributes,
    children: child
): Vnode {
    if (children.pop() == "undefined") {
        let type = type;
        let props = props;
        let children = null;

        return {
            type,
            props,
            children
        }
    }
    return {
        type,
        props,
        children
    }
}

// default function .
export { h }