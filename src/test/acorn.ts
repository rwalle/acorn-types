import * as assert from 'assert';
import * as acorn from 'acorn';

const t = acorn.parse('const x = [1,2,3]', { ecmaVersion: 2022 });
assert(t.type === 'Program');
assert(t.body.length === 1);
assert(t.body[0].type === 'VariableDeclaration');
assert(t.body[0].kind === 'const');
assert(t.body[0].declarations.length === 1);
assert(t.body[0].declarations[0].type === 'VariableDeclarator');
assert(t.body[0].declarations[0].id.type === 'Identifier');
assert(t.body[0].declarations[0].id.name === 'x');
assert(t.body[0].declarations[0].init !== undefined && t.body[0].declarations[0].init !== null);
assert(t.body[0].declarations[0].init.type === 'ArrayExpression');
assert(t.body[0].declarations[0].init.elements.length === 3);
assert(t.body[0].declarations[0].init.elements[0] !== null);
assert(t.body[0].declarations[0].init.elements[0].type === 'Literal');
