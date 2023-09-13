import * as acorn from "acorn";

const t = acorn.parse("const x = [1,2,3]", {ecmaVersion: 2022});
t.type === "Program"
t.body.length === 1
const node = t.body[0]
if (node.type === "VariableDeclaration") {
  node.kind === "const"
  node.declarations.length === 1
  const declaration = node.declarations[0];
  declaration.type === "VariableDeclarator"
  const id = declaration.id
  if (id.type === "Identifier") {
    id.name === "x"
    const init = declaration.init
    if (init !== undefined && init !== null && init.type === "ArrayExpression") {
      const array = init
      const elements = array.elements
      elements.length === 3
      if (elements[0] !== null) {
        elements[0].type === "Literal"
      }
    }
  }
}
