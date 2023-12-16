function vnode(tagName, atrr, children, event) {
    let tagName = tagName;
    let atrr = new Attr();
    return {
        tagName,
        atrr,
        children,
        event
    }
}

export { vnode }