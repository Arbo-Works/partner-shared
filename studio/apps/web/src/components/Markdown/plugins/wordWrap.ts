import * as mdast from "mdast";
import type * as unified from "unified";
import { visit } from "unist-util-visit";

export const wordWrap: unified.Plugin<[], mdast.Root> = () => {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (!parent || index == null) return;

      // Animate text nodes word by word
      if (node.type === "text") {
        const words = node.value.split(/(\s+)/);
        const wordNodes: mdast.Html[] = words
          .filter(Boolean) // remove empty strings
          .map((word) => ({
            type: "html",
            value: `<word>${word}</word>`,
          }));

        // Replace the original text node
        parent.children.splice(index, 1, ...wordNodes);
      }
    });
  };
};
