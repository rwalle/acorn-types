import * as acornLoose from "acorn-loose"
import * as acorn from "acorn"

declare let node: acorn.Node

acornLoose.isDummy(node) === false

const program = acornLoose.parse("1 / * 4 )[2]", {ecmaVersion: 2020})

program.body.length === 2
program.body[0].type === "ExpressionStatement"
