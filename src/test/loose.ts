import * as acornLoose from "acorn-loose";
import * as acorn from "acorn";
import * as assert from "assert";

declare var node: acorn.Node;

console.log(acornLoose.isDummy(node) === false);

const program = acornLoose.parse("1 / * 4 )[2]", { ecmaVersion: 2020 });

assert(program.body.length === 2);
assert(program.body[0].type === "ExpressionStatement");
