function vnode(tagName, atrr, children, event,documentType) {
    let tagName = tagName;
    let atrr = new Attr();
    return {
        tagName,
        atrr,
        children,
        event,
        documentType
    }
}

export { vnode }