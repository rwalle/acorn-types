import * as acorn from 'acorn';
import * as acorn_walk from 'acorn-walk';

declare var program: acorn.Program;

interface T {
  x: string;
}

const state: T = { x: '' };

acorn_walk.simple(program, {
  CallExpression (node, state) {
    console.log(node.callee.type);
    console.log(node.arguments.length);
    state.x = node.type;
  }
}, undefined, state);