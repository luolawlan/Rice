import { VElement, VNode, text, arrNode } from "./types";

function node(tag: VElement | text, attributes: string, child: arrNode): VNode {
    return {
        tag,
        attributes,
        child
    }
}

export default node