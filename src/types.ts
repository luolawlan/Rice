type tagName = String;
type attributes = Object;
type child = Array<Object>;

interface Vnode {
    type: tagName,
    props: attributes | null,
    children: child | null
}


export {
    tagName,
    attributes,
    child,
    Vnode
}