import * as acorn from "acorn"
import * as acorn_walk from "acorn-walk"

declare let program: acorn.Program

interface T {
  x: string
}

const state: T = {x: ""}

acorn_walk.simple(program, {
  CallExpression(node, state) {
    state.x = node.type
  },

  Expression(node) {
    node.type === "Identifier" || node.type === "Literal"
  }
}, undefined, state)

acorn_walk.ancestor(program, {
  CallExpression(node, state, ancestors) {
    node.type === "CallExpression"
    state.x = node.type
    ancestors[0].type === "Program"
  }
}, undefined, state)

acorn_walk.recursive(program, state, {
  CallExpression(node, state, callback) {
    node.type === "CallExpression"
    state.x = node.type
    callback(node, state)
  }
})

acorn_walk.full(program, (node, state, type) => {
  state.x = node.type
  type === "CallExpression"
}, undefined, state)

acorn_walk.fullAncestor(program, (node, state, ancestors) => {
  state.x = node.type
  ancestors[0].type === "Program"
}, undefined, state)

const visitor = acorn_walk.make({
})

visitor.CallExpression !== undefined

const result = acorn_walk.findNodeAt(program, 1)
result?.node?.type === "Program"

const result2 = acorn_walk.findNodeAround(program, 1)
result2?.node?.type === "Program"

const result3 = acorn_walk.findNodeAfter(program, 1)
result3?.node?.type === "Program"