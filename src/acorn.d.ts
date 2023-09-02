declare module 'acorn' {
  
  interface Node {
    start: number;
    end: number;
    type: string;
    range?: [number, number];
    loc?: SourceLocation | null;
  }
  
  interface SourceLocation {
    source?: string | null;
    start: Position;
    end: Position;
  }
  
  interface Position {
    /**
     * 1-based
     */
    line: number;
    /**
     * 0-based
     */
    column: number;
  }
  
  interface Identifier extends Node {
    type: "Identifier";
    name: string;
  }
  
  interface Literal extends Node {
    type: "Literal";
    value?: string | boolean | null | number | RegExp | bigint;
  }
  
  interface RegExpLiteral extends Literal {
    regex: {
      pattern: string;
      flags: string;
    };
  }
  
  interface Program extends Node {
    type: "Program";
    body: Array<Statement | ModuleDeclaration>;
    sourceType: "script" | "module";
  }
  
  interface Function extends Node {
    id?: Identifier | null;
    params: Array<Pattern>;
    body: FunctionBody;
    generator: boolean;
    async: boolean;
  }
  
  interface ExpressionStatement extends Node {
    type: "ExpressionStatement";
    expression: Expression;
  }
  
  interface Directive extends ExpressionStatement {
    expression: Literal;
    directive: string;
  }
  
  interface BlockStatement extends Node {
    type: "BlockStatement";
    body: Array<Statement>;
  }
  
  interface FunctionBody extends Omit<BlockStatement, "body"> {
    body: Array<Directive | Statement>;
  }
  
  interface EmptyStatement extends Node {
    type: "EmptyStatement";
  }
  
  interface DebuggerStatement extends Node {
    type: "DebuggerStatement";
  }
  
  interface WithStatement extends Node {
    type: "WithStatement";
    object: Expression;
    body: Statement;
  }
  
  interface ReturnStatement extends Node {
    type: "ReturnStatement";
    argument?: Expression | null;
  }
  
  interface LabeledStatement extends Node {
    type: "LabeledStatement";
    label: Identifier;
    body: Statement;
  }
  
  interface BreakStatement extends Node {
    type: "BreakStatement";
    label?: Identifier | null;
  }
  
  interface ContinueStatement extends Node {
    type: "ContinueStatement";
    label?: Identifier | null;
  }
  
  interface IfStatement extends Node {
    type: "IfStatement";
    test: Expression;
    consequent: Statement;
    alternate?: Statement | null;
  }
  
  interface SwitchStatement extends Node {
    type: "SwitchStatement";
    discriminant: Expression;
    cases: Array<SwitchCase>;
  }
  
  interface SwitchCase extends Node {
    type: "SwitchCase";
    test?: Expression | null;
    consequent: Array<Statement>;
  }
  
  interface ThrowStatement extends Node {
    type: "ThrowStatement";
    argument: Expression;
  }
  
  interface TryStatement extends Node {
    type: "TryStatement";
    block: BlockStatement;
    handler?: CatchClause | null;
    finalizer?: BlockStatement | null;
  }
  
  interface CatchClause extends Node {
    type: "CatchClause";
    param?: Pattern | null;
    body: BlockStatement;
  }
  
  interface WhileStatement extends Node {
    type: "WhileStatement";
    test: Expression;
    body: Statement;
  }
  
  interface DoWhileStatement extends Node {
    type: "DoWhileStatement";
    body: Statement;
    test: Expression;
  }
  
  interface ForStatement extends Node {
    type: "ForStatement";
    init?: VariableDeclaration | Expression | null;
    test?: Expression | null;
    update?: Expression | null;
    body: Statement;
  }
  
  interface ForInStatement extends Node {
    type: "ForInStatement";
    left: VariableDeclaration | Pattern;
    right: Expression;
    body: Statement;
  }
  
  interface FunctionDeclaration extends Function {
    type: "FunctionDeclaration";
    id: Identifier;
  }
  
  interface VariableDeclaration extends Node {
    type: "VariableDeclaration";
    declarations: Array<VariableDeclarator>;
    kind: "var" | "let" | "const";
  }
  
  interface VariableDeclarator extends Node {
    type: "VariableDeclarator";
    id: Pattern;
    init?: Expression | null;
  }
  
  interface ThisExpression extends Node {
    type: "ThisExpression";
  }
  
  interface ArrayExpression extends Node {
    type: "ArrayExpression";
    elements: Array<Expression | SpreadElement | null>;
  }
  
  interface ObjectExpression extends Node {
    type: "ObjectExpression";
    properties: Array<Property | SpreadElement>;
  }
  
  interface Property extends Node {
    type: "Property";
    key: Expression;
    value: Expression;
    kind: "init" | "get" | "set";
    method: boolean;
    shorthand: boolean;
    computed: boolean;
  }
  
  interface FunctionExpression extends Function {
    type: "FunctionExpression";
  }
  
  interface UnaryExpression extends Node {
    type: "UnaryExpression";
    operator: UnaryOperator;
    prefix: boolean;
    argument: Expression;
  }
  
  type UnaryOperator = "-" | "+" | "!" | "~" | "typeof" | "void" | "delete";
  
  interface UpdateExpression extends Node {
    type: "UpdateExpression";
    operator: UpdateOperator;
    argument: Expression;
    prefix: boolean;
  }
  
  type UpdateOperator = "++" | "--";
  
  interface BinaryExpression extends Node {
    type: "BinaryExpression";
    operator: BinaryOperator;
    left: Expression | PrivateIdentifier;
    right: Expression;
  }
  
  type BinaryOperator = "==" | "!=" | "===" | "!==" | "<" | "<=" | ">" | ">=" | "<<" | ">>" | ">>>" | "+" | "-" | "*" | "/" | "%" | "|" | "^" | "&" | "in" | "instanceof" | "**";
  
  interface AssignmentExpression extends Node {
    type: "AssignmentExpression";
    operator: AssignmentOperator;
    left: Pattern;
    right: Expression;
  }
  
  type AssignmentOperator = "=" | "+=" | "-=" | "*=" | "/=" | "%=" | "<<=" | ">>=" | ">>>=" | "|=" | "^=" | "&=" | "**=" | "||=" | "&&=" | "??=";
  
  interface LogicalExpression extends Node {
    type: "LogicalExpression";
    operator: LogicalOperator;
    left: Expression;
    right: Expression;
  }
  
  type LogicalOperator = "||" | "&&" | "??";
  
  interface MemberExpression extends ChainElement {
    type: "MemberExpression";
    object: Expression | Super;
    property: Expression | PrivateIdentifier;
    computed: boolean;
  }
  
  interface ConditionalExpression extends Node {
    type: "ConditionalExpression";
    test: Expression;
    alternate: Expression;
    consequent: Expression;
  }
  
  interface CallExpression extends ChainElement {
    type: "CallExpression";
    callee: Expression | Super;
    arguments: Array<Expression | SpreadElement>;
  }
  
  interface NewExpression extends Node {
    type: "NewExpression";
    callee: Expression;
    arguments: Array<Expression | SpreadElement>;
  }
  
  interface SequenceExpression extends Node {
    type: "SequenceExpression";
    expressions: Array<Expression>;
  }
  
  interface ForOfStatement extends Omit<ForInStatement, "type"> {
    type: "ForOfStatement";
    await: boolean;
  }
  
  interface Super extends Node {
    type: "Super";
  }
  
  interface SpreadElement extends Node {
    type: "SpreadElement";
    argument: Expression;
  }
  
  interface ArrowFunctionExpression extends Omit<Function, "body"> {
    type: "ArrowFunctionExpression";
    body: FunctionBody | Expression;
    expression: boolean;
    generator: false;
  }
  
  interface YieldExpression extends Node {
    type: "YieldExpression";
    argument?: Expression | null;
    delegate: boolean;
  }
  
  interface TemplateLiteral extends Node {
    type: "TemplateLiteral";
    quasis: Array<TemplateElement>;
    expressions: Array<Expression>;
  }
  
  interface TaggedTemplateExpression extends Node {
    type: "TaggedTemplateExpression";
    tag: Expression;
    quasi: TemplateLiteral;
  }
  
  interface TemplateElement extends Node {
    type: "TemplateElement";
    tail: boolean;
    value: {
      cooked?: string | null;
      raw: string;
    };
  }
  
  interface AssignmentProperty extends Omit<Property, "type" | "value"> {
    type: "Property";
    value: Pattern;
    kind: "init";
    method: false;
  }
  
  interface ObjectPattern extends Node {
    type: "ObjectPattern";
    properties: Array<AssignmentProperty | RestElement>;
  }
  
  interface ArrayPattern extends Node {
    type: "ArrayPattern";
    elements: Array<Pattern | null>;
  }
  
  interface RestElement extends Node {
    type: "RestElement";
    argument: Pattern;
  }
  
  interface AssignmentPattern extends Node {
    type: "AssignmentPattern";
    left: Pattern;
    right: Expression;
  }
  
  interface Class extends Node {
    id?: Identifier | null;
    superClass?: Expression | null;
    body: ClassBody;
  }
  
  interface ClassBody extends Node {
    type: "ClassBody";
    body: Array<MethodDefinition | PropertyDefinition | StaticBlock>;
  }
  
  interface MethodDefinition extends Node {
    type: "MethodDefinition";
    key: Expression | PrivateIdentifier;
    value: FunctionExpression;
    kind: "constructor" | "method" | "get" | "set";
    computed: boolean;
    static: boolean;
  }
  
  interface ClassDeclaration extends Class {
    type: "ClassDeclaration";
    id: Identifier;
  }
  
  interface ClassExpression extends Class {
    type: "ClassExpression";
  }
  
  interface MetaProperty extends Node {
    type: "MetaProperty";
    meta: Identifier;
    property: Identifier;
  }
  
  interface ModuleSpecifier extends Node {
    local: Identifier;
  }
  
  interface ImportDeclaration extends Node {
    type: "ImportDeclaration";
    specifiers: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>;
    source: Literal;
  }
  
  interface ImportSpecifier extends ModuleSpecifier {
    type: "ImportSpecifier";
    imported: Identifier | Literal;
  }
  
  interface ImportDefaultSpecifier extends ModuleSpecifier {
    type: "ImportDefaultSpecifier";
  }
  
  interface ImportNamespaceSpecifier extends ModuleSpecifier {
    type: "ImportNamespaceSpecifier";
  }
  
  interface ExportNamedDeclaration extends Node {
    type: "ExportNamedDeclaration";
    declaration?: Declaration | null;
    specifiers: Array<ExportSpecifier>;
    source?: Literal | null;
  }
  
  interface ExportSpecifier extends Omit<ModuleSpecifier, "local"> {
    type: "ExportSpecifier";
    exported: Identifier | Literal;
    local: Identifier | Literal;
  }
  
  interface AnonymousDefaultExportedFunctionDeclaration extends Function {
    type: "FunctionDeclaration";
    id: null;
  }
  
  interface AnonymousDefaultExportedClassDeclaration extends Class {
    type: "ClassDeclaration";
    id: null;
  }
  
  interface ExportDefaultDeclaration extends Node {
    type: "ExportDefaultDeclaration";
    declaration: AnonymousDefaultExportedFunctionDeclaration | FunctionDeclaration | AnonymousDefaultExportedClassDeclaration | ClassDeclaration | Expression;
  }
  
  interface ExportAllDeclaration extends Node {
    type: "ExportAllDeclaration";
    source: Literal;
    exported?: Identifier | Literal | null;
  }
  
  interface AwaitExpression extends Node {
    type: "AwaitExpression";
    argument: Expression;
  }
  
  interface BigIntLiteral extends Literal {
    bigint: string;
  }
  
  interface ChainExpression extends Node {
    type: "ChainExpression";
    expression: ChainElement;
  }
  
  interface ChainElement extends Node {
    optional: boolean;
  }
  
  interface ImportExpression extends Node {
    type: "ImportExpression";
    source: Expression;
  }
  
  interface PropertyDefinition extends Node {
    type: "PropertyDefinition";
    key: Expression | PrivateIdentifier;
    value?: Expression | null;
    computed: boolean;
    static: boolean;
  }
  
  interface PrivateIdentifier extends Node {
    type: "PrivateIdentifier";
    name: string;
  }
  
  interface StaticBlock extends Omit<BlockStatement, "type"> {
    type: "StaticBlock";
  }
  
  type Statement = 
  | ExpressionStatement
  | BlockStatement
  | EmptyStatement
  | DebuggerStatement
  | WithStatement
  | ReturnStatement
  | LabeledStatement
  | BreakStatement
  | ContinueStatement
  | IfStatement
  | SwitchStatement
  | ThrowStatement
  | TryStatement
  | WhileStatement
  | DoWhileStatement
  | ForStatement
  | ForInStatement
  | Declaration;
  
  type Declaration = 
  | FunctionDeclaration
  | VariableDeclaration
  | ClassDeclaration;
  
  type Expression = 
  | Identifier
  | Literal
  | ThisExpression
  | ArrayExpression
  | ObjectExpression
  | FunctionExpression
  | UnaryExpression
  | UpdateExpression
  | BinaryExpression
  | AssignmentExpression
  | LogicalExpression
  | MemberExpression
  | ConditionalExpression
  | CallExpression
  | NewExpression
  | SequenceExpression
  | ArrowFunctionExpression
  | YieldExpression
  | TemplateLiteral
  | TaggedTemplateExpression
  | ClassExpression
  | MetaProperty
  | AwaitExpression
  | ChainExpression
  | ImportExpression;
  
  type Pattern = 
  | Identifier
  | MemberExpression
  | ObjectPattern
  | ArrayPattern
  | RestElement
  | AssignmentPattern;
  
  type ModuleDeclaration = 
  | ImportDeclaration
  | ExportNamedDeclaration
  | ExportDefaultDeclaration
  | ExportAllDeclaration;
  
  function parse(input: string, options: Options): Program
  
  function parseExpressionAt(input: string, pos: number, options: Options): Expression
  
  function tokenizer(input: string, options: Options): {
    getToken(): Token
    [Symbol.iterator](): Iterator<Token>
  }
  
  type ecmaVersion = 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 'latest'
  
  interface Options {
    /**
     * `ecmaVersion` indicates the ECMAScript version to parse. Must be
     * either 3, 5, 6 (or 2015), 7 (2016), 8 (2017), 9 (2018), 10
     * (2019), 11 (2020), 12 (2021), 13 (2022), 14 (2023), or `"latest"`
     * (the latest version the library supports). This influences
     * support for strict mode, the set of reserved words, and support
     * for new syntax features.
     */
    ecmaVersion: ecmaVersion

    /**
     * `sourceType` indicates the mode the code should be parsed in.
     * Can be either `"script"` or `"module"`. This influences global
     * strict mode and parsing of `import` and `export` declarations.
     */
    sourceType?: 'script' | 'module'

    /**
     * a callback that will be called when a semicolon is automatically inserted.
     * @param lastTokEnd the position of the comma as an offset
     * @param lastTokEndLoc location if {@link locations} is enabled
     */
    onInsertedSemicolon?: (lastTokEnd: number, lastTokEndLoc?: Position) => void

    /**
     * similar to `onInsertedSemicolon`, but for trailing commas
     * @param lastTokEnd the position of the comma as an offset
     * @param lastTokEndLoc location if `locations` is enabled
     */
    onTrailingComma?: (lastTokEnd: number, lastTokEndLoc?: Position) => void

    /**
     * By default, reserved words are only enforced if ecmaVersion >= 5.
     * Set `allowReserved` to a boolean value to explicitly turn this on
     * an off. When this option has the value "never", reserved words
     * and keywords can also not be used as property names.
     */
    allowReserved?: boolean | 'never'

    /** 
     * When enabled, a return at the top level is not considered an error.
     */
    allowReturnOutsideFunction?: boolean

    /**
     * When enabled, import/export statements are not constrained to
     * appearing at the top of the program, and an import.meta expression
     * in a script isn't considered an error.
     */
    allowImportExportEverywhere?: boolean

    /**
     * By default, `await` identifiers are allowed to appear at the top-level scope only if {@link ecmaVersion} >= 2022.
     * When enabled, await identifiers are allowed to appear at the top-level scope,
     * but they are still not allowed in non-async functions.
     */
    allowAwaitOutsideFunction?: boolean

    /**
     * When enabled, super identifiers are not constrained to
     * appearing in methods and do not raise an error when they appear elsewhere.
     */
    allowSuperOutsideMethod?: boolean

    /**
     * When enabled, hashbang directive in the beginning of file is
     * allowed and treated as a line comment. Enabled by default when
     * {@link ecmaVersion} >= 2023.
     */
    allowHashBang?: boolean

    /**
     * By default, the parser will verify that private properties are
     * only used in places where they are valid and have been declared.
     * Set this to false to turn such checks off.
     */
    checkPrivateFields?: boolean

    /**
     * When `locations` is on, `loc` properties holding objects with
     * `start` and `end` properties as {@link Position} objects will be attached to the
     * nodes.
     */
    locations?: boolean

    /**
     * a callback that will cause Acorn to call that function with object in the same
     * format as tokens returned from `tokenizer().getToken()`. Note
     * that you are not allowed to call the parser from the
     * callback—that will corrupt its internal state.
     */
    onToken?: ((token: Token) => any) | Token[]


    /**
     * This takes a function or an array.
     * 
     * When a function is passed, Acorn will call that function with `(block, text, start,
     * end)` parameters whenever a comment is skipped. `block` is a
     * boolean indicating whether this is a block (`/* *\/`) comment,
     * `text` is the content of the comment, and `start` and `end` are
     * character offsets that denote the start and end of the comment.
     * When the {@link locations} option is on, two more parameters are
     * passed, the full locations of {@link Position} type of the start and
     * end of the comments.
     * 
     * When a array is passed, each found comment of {@link Comment} type is pushed to the array.
     * 
     * Note that you are not allowed to call the
     * parser from the callback—that will corrupt its internal state.
     */
    onComment?: ((
      isBlock: boolean, text: string, start: number, end: number, startLoc?: Position,
      endLoc?: Position
    ) => void) | Comment[]

    /**
     * Nodes have their start and end characters offsets recorded in
     * `start` and `end` properties (directly on the node, rather than
     * the `loc` object, which holds line/column data. To also add a
     * [semi-standardized][range] `range` property holding a `[start,
     * end]` array with the same numbers, set the `ranges` option to
     * `true`.
     */
    ranges?: boolean

    /**
     * It is possible to parse multiple files into a single AST by
     * passing the tree produced by parsing the first file as
     * `program` option in subsequent parses. This will add the
     * toplevel forms of the parsed file to the `Program` (top) node
     * of an existing parse tree.
     */
    program?: Node

    /**
     * When {@link locations} is on, you can pass this to record the source
     * file in every node's `loc` object.
     */
    sourceFile?: string

    /**
     * This value, if given, is stored in every node, whether {@link locations} is on or off.
     */
    directSourceFile?: string

    /**
     * When enabled, parenthesized expressions are represented by
     * (non-standard) ParenthesizedExpression nodes
     */
    preserveParens?: boolean
  }
    
  class Parser {
    // state.js
    lineStart: number;
    options: Options;
    curLine: number;
    start: number;
    end: number;
    input: string;
    type: TokenType;
    
    // state.js
    constructor(options: Options, input: string, startPos?: number)
    parse(this: Parser): Node
    
    // tokenize.js
    next(): void;
    nextToken(): void;
    
    // statement.js
    parseTopLevel(node: Node): Node;
    
    // node.js
    finishNode(node: Node, type: string): Node;
    finishNodeAt(node: Node, type: string, pos: number, loc: Position): Node;
    
    // location.js
    raise(pos: number, message: string) : void;
    raiseRecoverable?(pos: number, message: string) : void;
    
    // parseutils.js
    unexpected(pos: number) : void;
    
    // state.js
    static parse(this: typeof Parser, input: string, options: Options): Node
    static parseExpressionAt(this: typeof Parser, input: string, pos: number, options: Options): Node
    static tokenizer(this: typeof Parser, input: string, options: Options): {
      getToken(): Token
      [Symbol.iterator](): Iterator<Token>
    }
    static extend(this: typeof Parser, ...plugins: ((BaseParser: typeof Parser) => typeof Parser)[]): typeof Parser
  }
  
  const defaultOptions: Options
  
  function getLineInfo(input: string, offset: number): Position
  
  class SourceLocation {
    start: Position
    end: Position
    source?: string | null
    constructor(p: Parser, start: Position, end: Position)
  }
  
  class TokenType {
    label: string
    keyword: string
    beforeExpr: boolean
    startsExpr: boolean
    isLoop: boolean
    isAssign: boolean
    prefix: boolean
    postfix: boolean
    binop: number
    updateContext?: (prevType: TokenType) => void
    constructor(label: string, conf?: any)
  }
  
  const tokTypes: {
    num: TokenType
    regexp: TokenType
    string: TokenType
    name: TokenType
    privateId: TokenType
    eof: TokenType
    bracketL: TokenType
    bracketR: TokenType
    braceL: TokenType
    braceR: TokenType
    parenL: TokenType
    parenR: TokenType
    comma: TokenType
    semi: TokenType
    colon: TokenType
    dot: TokenType
    question: TokenType
    questionDot: TokenType
    arrow: TokenType
    template: TokenType
    invalidTemplate: TokenType
    ellipsis: TokenType
    backQuote: TokenType
    dollarBraceL: TokenType
    eq: TokenType
    assign: TokenType
    incDec: TokenType
    prefix: TokenType
    logicalOR: TokenType
    logicalAND: TokenType
    bitwiseOR: TokenType
    bitwiseXOR: TokenType
    bitwiseAND: TokenType
    equality: TokenType
    relational: TokenType
    bitShift: TokenType
    plusMin: TokenType
    modulo: TokenType
    star: TokenType
    slash: TokenType
    starstar: TokenType
    coalesce: TokenType
    _break: TokenType
    _case: TokenType
    _catch: TokenType
    _continue: TokenType
    _debugger: TokenType
    _default: TokenType
    _do: TokenType
    _else: TokenType
    _finally: TokenType
    _for: TokenType
    _function: TokenType
    _if: TokenType
    _return: TokenType
    _switch: TokenType
    _throw: TokenType
    _try: TokenType
    _var: TokenType
    _const: TokenType
    _while: TokenType
    _with: TokenType
    _new: TokenType
    _this: TokenType
    _super: TokenType
    _class: TokenType
    _extends: TokenType
    _export: TokenType
    _import: TokenType
    _null: TokenType
    _true: TokenType
    _false: TokenType
    _in: TokenType
    _instanceof: TokenType
    _typeof: TokenType
    _void: TokenType
    _delete: TokenType
  }
  
  class TokContext {
    constructor(token: string, isExpr: boolean, preserveSpace: boolean, override?: (p: Parser) => void)
  }
  
  const tokContexts: {
    b_stat: TokContext
    b_expr: TokContext
    b_tmpl: TokContext
    p_stat: TokContext
    p_expr: TokContext
    q_tmpl: TokContext
    f_expr: TokContext
    f_stat: TokContext
    f_expr_gen: TokContext
    f_gen: TokContext
  }
  
  function isIdentifierStart(code: number, astral?: boolean): boolean
  
  function isIdentifierChar(code: number, astral?: boolean): boolean
  
  interface AbstractToken {
  }
  
  interface Comment extends AbstractToken {
    type: 'Line' | 'Block'
    value: string
    start: number
    end: number
    loc?: SourceLocation
    range?: [number, number]
  }
  
  class Token {
    type: TokenType
    value: any
    start: number
    end: number
    loc?: SourceLocation
    range?: [number, number]
    constructor(p: Parser)
  }
  
  function isNewLine(code: number): boolean
  
  const lineBreak: RegExp
  
  const lineBreakG: RegExp
  
  const version: string
  
  const nonASCIIwhitespace: RegExp
  
  const keywordTypes: {
    _break: TokenType
    _case: TokenType
    _catch: TokenType
    _continue: TokenType
    _debugger: TokenType
    _default: TokenType
    _do: TokenType
    _else: TokenType
    _finally: TokenType
    _for: TokenType
    _function: TokenType
    _if: TokenType
    _return: TokenType
    _switch: TokenType
    _throw: TokenType
    _try: TokenType
    _var: TokenType
    _const: TokenType
    _while: TokenType
    _with: TokenType
    _new: TokenType
    _this: TokenType
    _super: TokenType
    _class: TokenType
    _extends: TokenType
    _export: TokenType
    _import: TokenType
    _null: TokenType
    _true: TokenType
    _false: TokenType
    _in: TokenType
    _instanceof: TokenType
    _typeof: TokenType
    _void: TokenType
    _delete: TokenType
  }
}