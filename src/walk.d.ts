
declare module 'acorn-walk' {
  import * as acorn from 'acorn';
  type FullWalkerCallback<TState> = (
    node: acorn.Node,
    state: TState,
    type: string
  ) => void;

  type FullAncestorWalkerCallback<TState> = (
    node: acorn.Node,
    state: TState | acorn.Node[],
    ancestors: acorn.Node[],
    type: string
  ) => void;
  type WalkerCallback<TState> = (node: acorn.Node, state: TState) => void;

  type SimpleWalkerFn<NodeType, TState> = (
    node: NodeType,
    state: TState
  ) => void;
  
  type AncestorWalkerFn<NodeType, TState> = (
    node: NodeType,
    state: TState| acorn.Node[],
    ancestors: acorn.Node[]
  ) => void;

  type RecursiveWalkerFn<NodeType, TState> = (
    node: NodeType,
    state: TState,
    callback: WalkerCallback<TState>
  ) => void;
  
  type SimpleVisitors<TState> = {
    Identifier?: SimpleWalkerFn<acorn.Identifier, TState>,
    Literal?: SimpleWalkerFn<acorn.Literal, TState>,
    Program?: SimpleWalkerFn<acorn.Program, TState>,
    ExpressionStatement?: SimpleWalkerFn<acorn.ExpressionStatement, TState>,
    BlockStatement?: SimpleWalkerFn<acorn.BlockStatement, TState>,
    EmptyStatement?: SimpleWalkerFn<acorn.EmptyStatement, TState>,
    DebuggerStatement?: SimpleWalkerFn<acorn.DebuggerStatement, TState>,
    WithStatement?: SimpleWalkerFn<acorn.WithStatement, TState>,
    ReturnStatement?: SimpleWalkerFn<acorn.ReturnStatement, TState>,
    LabeledStatement?: SimpleWalkerFn<acorn.LabeledStatement, TState>,
    BreakStatement?: SimpleWalkerFn<acorn.BreakStatement, TState>,
    ContinueStatement?: SimpleWalkerFn<acorn.ContinueStatement, TState>,
    IfStatement?: SimpleWalkerFn<acorn.IfStatement, TState>,
    SwitchStatement?: SimpleWalkerFn<acorn.SwitchStatement, TState>,
    SwitchCase?: SimpleWalkerFn<acorn.SwitchCase, TState>,
    ThrowStatement?: SimpleWalkerFn<acorn.ThrowStatement, TState>,
    TryStatement?: SimpleWalkerFn<acorn.TryStatement, TState>,
    CatchClause?: SimpleWalkerFn<acorn.CatchClause, TState>,
    WhileStatement?: SimpleWalkerFn<acorn.WhileStatement, TState>,
    DoWhileStatement?: SimpleWalkerFn<acorn.DoWhileStatement, TState>,
    ForStatement?: SimpleWalkerFn<acorn.ForStatement, TState>,
    ForInStatement?: SimpleWalkerFn<acorn.ForInStatement, TState>,
    FunctionDeclaration?: SimpleWalkerFn<acorn.FunctionDeclaration, TState>,
    VariableDeclaration?: SimpleWalkerFn<acorn.VariableDeclaration, TState>,
    VariableDeclarator?: SimpleWalkerFn<acorn.VariableDeclarator, TState>,
    ThisExpression?: SimpleWalkerFn<acorn.ThisExpression, TState>,
    ArrayExpression?: SimpleWalkerFn<acorn.ArrayExpression, TState>,
    ObjectExpression?: SimpleWalkerFn<acorn.ObjectExpression, TState>,
    Property?: SimpleWalkerFn<acorn.Property, TState>,
    FunctionExpression?: SimpleWalkerFn<acorn.FunctionExpression, TState>,
    UnaryExpression?: SimpleWalkerFn<acorn.UnaryExpression, TState>,
    UpdateExpression?: SimpleWalkerFn<acorn.UpdateExpression, TState>,
    BinaryExpression?: SimpleWalkerFn<acorn.BinaryExpression, TState>,
    AssignmentExpression?: SimpleWalkerFn<acorn.AssignmentExpression, TState>,
    LogicalExpression?: SimpleWalkerFn<acorn.LogicalExpression, TState>,
    MemberExpression?: SimpleWalkerFn<acorn.MemberExpression, TState>,
    ConditionalExpression?: SimpleWalkerFn<acorn.ConditionalExpression, TState>,
    CallExpression?: SimpleWalkerFn<acorn.CallExpression, TState>,
    NewExpression?: SimpleWalkerFn<acorn.NewExpression, TState>,
    SequenceExpression?: SimpleWalkerFn<acorn.SequenceExpression, TState>,
    ForOfStatement?: SimpleWalkerFn<acorn.ForOfStatement, TState>,
    Super?: SimpleWalkerFn<acorn.Super, TState>,
    SpreadElement?: SimpleWalkerFn<acorn.SpreadElement, TState>,
    ArrowFunctionExpression?: SimpleWalkerFn<acorn.ArrowFunctionExpression, TState>,
    YieldExpression?: SimpleWalkerFn<acorn.YieldExpression, TState>,
    TemplateLiteral?: SimpleWalkerFn<acorn.TemplateLiteral, TState>,
    TaggedTemplateExpression?: SimpleWalkerFn<acorn.TaggedTemplateExpression, TState>,
    TemplateElement?: SimpleWalkerFn<acorn.TemplateElement, TState>,
    ObjectPattern?: SimpleWalkerFn<acorn.ObjectPattern, TState>,
    ArrayPattern?: SimpleWalkerFn<acorn.ArrayPattern, TState>,
    RestElement?: SimpleWalkerFn<acorn.RestElement, TState>,
    AssignmentPattern?: SimpleWalkerFn<acorn.AssignmentPattern, TState>,
    ClassBody?: SimpleWalkerFn<acorn.ClassBody, TState>,
    MethodDefinition?: SimpleWalkerFn<acorn.MethodDefinition, TState>,
    ClassDeclaration?: SimpleWalkerFn<acorn.ClassDeclaration, TState>,
    ClassExpression?: SimpleWalkerFn<acorn.ClassExpression, TState>,
    MetaProperty?: SimpleWalkerFn<acorn.MetaProperty, TState>,
    ImportDeclaration?: SimpleWalkerFn<acorn.ImportDeclaration, TState>,
    ImportSpecifier?: SimpleWalkerFn<acorn.ImportSpecifier, TState>,
    ImportDefaultSpecifier?: SimpleWalkerFn<acorn.ImportDefaultSpecifier, TState>,
    ImportNamespaceSpecifier?: SimpleWalkerFn<acorn.ImportNamespaceSpecifier, TState>,
    ExportNamedDeclaration?: SimpleWalkerFn<acorn.ExportNamedDeclaration, TState>,
    ExportSpecifier?: SimpleWalkerFn<acorn.ExportSpecifier, TState>,
    ExportDefaultDeclaration?: SimpleWalkerFn<acorn.ExportDefaultDeclaration, TState>,
    ExportAllDeclaration?: SimpleWalkerFn<acorn.ExportAllDeclaration, TState>,
    AwaitExpression?: SimpleWalkerFn<acorn.AwaitExpression, TState>,
    ChainExpression?: SimpleWalkerFn<acorn.ChainExpression, TState>,
    ImportExpression?: SimpleWalkerFn<acorn.ImportExpression, TState>,
    PropertyDefinition?: SimpleWalkerFn<acorn.PropertyDefinition, TState>,
    PrivateIdentifier?: SimpleWalkerFn<acorn.PrivateIdentifier, TState>,
    StaticBlock?: SimpleWalkerFn<acorn.StaticBlock, TState>,

    Expression?: SimpleWalkerFn<acorn.Expression, TState>,
    Statement?: SimpleWalkerFn<acorn.Statement, TState>,
    Pattern?: SimpleWalkerFn<acorn.Pattern, TState>,
    ForInit?: SimpleWalkerFn<acorn.VariableDeclaration | acorn.Expression, TState>
  };

  type AncestorVisitors<TState> = {
    Identifier?: AncestorWalkerFn<acorn.Identifier, TState>,
    Literal?: AncestorWalkerFn<acorn.Literal, TState>,
    Program?: AncestorWalkerFn<acorn.Program, TState>,
    ExpressionStatement?: AncestorWalkerFn<acorn.ExpressionStatement, TState>,
    BlockStatement?: AncestorWalkerFn<acorn.BlockStatement, TState>,
    EmptyStatement?: AncestorWalkerFn<acorn.EmptyStatement, TState>,
    DebuggerStatement?: AncestorWalkerFn<acorn.DebuggerStatement, TState>,
    WithStatement?: AncestorWalkerFn<acorn.WithStatement, TState>,
    ReturnStatement?: AncestorWalkerFn<acorn.ReturnStatement, TState>,
    LabeledStatement?: AncestorWalkerFn<acorn.LabeledStatement, TState>,
    BreakStatement?: AncestorWalkerFn<acorn.BreakStatement, TState>,
    ContinueStatement?: AncestorWalkerFn<acorn.ContinueStatement, TState>,
    IfStatement?: AncestorWalkerFn<acorn.IfStatement, TState>,
    SwitchStatement?: AncestorWalkerFn<acorn.SwitchStatement, TState>,
    SwitchCase?: AncestorWalkerFn<acorn.SwitchCase, TState>,
    ThrowStatement?: AncestorWalkerFn<acorn.ThrowStatement, TState>,
    TryStatement?: AncestorWalkerFn<acorn.TryStatement, TState>,
    CatchClause?: AncestorWalkerFn<acorn.CatchClause, TState>,
    WhileStatement?: AncestorWalkerFn<acorn.WhileStatement, TState>,
    DoWhileStatement?: AncestorWalkerFn<acorn.DoWhileStatement, TState>,
    ForStatement?: AncestorWalkerFn<acorn.ForStatement, TState>,
    ForInStatement?: AncestorWalkerFn<acorn.ForInStatement, TState>,
    FunctionDeclaration?: AncestorWalkerFn<acorn.FunctionDeclaration, TState>,
    VariableDeclaration?: AncestorWalkerFn<acorn.VariableDeclaration, TState>,
    VariableDeclarator?: AncestorWalkerFn<acorn.VariableDeclarator, TState>,
    ThisExpression?: AncestorWalkerFn<acorn.ThisExpression, TState>,
    ArrayExpression?: AncestorWalkerFn<acorn.ArrayExpression, TState>,
    ObjectExpression?: AncestorWalkerFn<acorn.ObjectExpression, TState>,
    Property?: AncestorWalkerFn<acorn.Property, TState>,
    FunctionExpression?: AncestorWalkerFn<acorn.FunctionExpression, TState>,
    UnaryExpression?: AncestorWalkerFn<acorn.UnaryExpression, TState>,
    UpdateExpression?: AncestorWalkerFn<acorn.UpdateExpression, TState>,
    BinaryExpression?: AncestorWalkerFn<acorn.BinaryExpression, TState>,
    AssignmentExpression?: AncestorWalkerFn<acorn.AssignmentExpression, TState>,
    LogicalExpression?: AncestorWalkerFn<acorn.LogicalExpression, TState>,
    MemberExpression?: AncestorWalkerFn<acorn.MemberExpression, TState>,
    ConditionalExpression?: AncestorWalkerFn<acorn.ConditionalExpression, TState>,
    CallExpression?: AncestorWalkerFn<acorn.CallExpression, TState>,
    NewExpression?: AncestorWalkerFn<acorn.NewExpression, TState>,
    SequenceExpression?: AncestorWalkerFn<acorn.SequenceExpression, TState>,
    ForOfStatement?: AncestorWalkerFn<acorn.ForOfStatement, TState>,
    Super?: AncestorWalkerFn<acorn.Super, TState>,
    SpreadElement?: AncestorWalkerFn<acorn.SpreadElement, TState>,
    ArrowFunctionExpression?: AncestorWalkerFn<acorn.ArrowFunctionExpression, TState>,
    YieldExpression?: AncestorWalkerFn<acorn.YieldExpression, TState>,
    TemplateLiteral?: AncestorWalkerFn<acorn.TemplateLiteral, TState>,
    TaggedTemplateExpression?: AncestorWalkerFn<acorn.TaggedTemplateExpression, TState>,
    TemplateElement?: AncestorWalkerFn<acorn.TemplateElement, TState>,
    ObjectPattern?: AncestorWalkerFn<acorn.ObjectPattern, TState>,
    ArrayPattern?: AncestorWalkerFn<acorn.ArrayPattern, TState>,
    RestElement?: AncestorWalkerFn<acorn.RestElement, TState>,
    AssignmentPattern?: AncestorWalkerFn<acorn.AssignmentPattern, TState>,
    ClassBody?: AncestorWalkerFn<acorn.ClassBody, TState>,
    MethodDefinition?: AncestorWalkerFn<acorn.MethodDefinition, TState>,
    ClassDeclaration?: AncestorWalkerFn<acorn.ClassDeclaration, TState>,
    ClassExpression?: AncestorWalkerFn<acorn.ClassExpression, TState>,
    MetaProperty?: AncestorWalkerFn<acorn.MetaProperty, TState>,
    ImportDeclaration?: AncestorWalkerFn<acorn.ImportDeclaration, TState>,
    ImportSpecifier?: AncestorWalkerFn<acorn.ImportSpecifier, TState>,
    ImportDefaultSpecifier?: AncestorWalkerFn<acorn.ImportDefaultSpecifier, TState>,
    ImportNamespaceSpecifier?: AncestorWalkerFn<acorn.ImportNamespaceSpecifier, TState>,
    ExportNamedDeclaration?: AncestorWalkerFn<acorn.ExportNamedDeclaration, TState>,
    ExportSpecifier?: AncestorWalkerFn<acorn.ExportSpecifier, TState>,
    ExportDefaultDeclaration?: AncestorWalkerFn<acorn.ExportDefaultDeclaration, TState>,
    ExportAllDeclaration?: AncestorWalkerFn<acorn.ExportAllDeclaration, TState>,
    AwaitExpression?: AncestorWalkerFn<acorn.AwaitExpression, TState>,
    ChainExpression?: AncestorWalkerFn<acorn.ChainExpression, TState>,
    ImportExpression?: AncestorWalkerFn<acorn.ImportExpression, TState>,
    PropertyDefinition?: AncestorWalkerFn<acorn.PropertyDefinition, TState>,
    PrivateIdentifier?: AncestorWalkerFn<acorn.PrivateIdentifier, TState>,
    StaticBlock?: AncestorWalkerFn<acorn.StaticBlock, TState>,

    Expression?: SimpleWalkerFn<acorn.Expression, TState>,
    Statement?: SimpleWalkerFn<acorn.Statement, TState>,
    Pattern?: SimpleWalkerFn<acorn.Pattern, TState>,
    ForInit?: SimpleWalkerFn<acorn.VariableDeclaration | acorn.Expression, TState>
  };
  
  type RecursiveVisitors<TState> = {
    Identifier?: RecursiveWalkerFn<acorn.Identifier, TState>,
    Literal?: RecursiveWalkerFn<acorn.Literal, TState>,
    Program?: RecursiveWalkerFn<acorn.Program, TState>,
    ExpressionStatement?: RecursiveWalkerFn<acorn.ExpressionStatement, TState>,
    BlockStatement?: RecursiveWalkerFn<acorn.BlockStatement, TState>,
    EmptyStatement?: RecursiveWalkerFn<acorn.EmptyStatement, TState>,
    DebuggerStatement?: RecursiveWalkerFn<acorn.DebuggerStatement, TState>,
    WithStatement?: RecursiveWalkerFn<acorn.WithStatement, TState>,
    ReturnStatement?: RecursiveWalkerFn<acorn.ReturnStatement, TState>,
    LabeledStatement?: RecursiveWalkerFn<acorn.LabeledStatement, TState>,
    BreakStatement?: RecursiveWalkerFn<acorn.BreakStatement, TState>,
    ContinueStatement?: RecursiveWalkerFn<acorn.ContinueStatement, TState>,
    IfStatement?: RecursiveWalkerFn<acorn.IfStatement, TState>,
    SwitchStatement?: RecursiveWalkerFn<acorn.SwitchStatement, TState>,
    SwitchCase?: RecursiveWalkerFn<acorn.SwitchCase, TState>,
    ThrowStatement?: RecursiveWalkerFn<acorn.ThrowStatement, TState>,
    TryStatement?: RecursiveWalkerFn<acorn.TryStatement, TState>,
    CatchClause?: RecursiveWalkerFn<acorn.CatchClause, TState>,
    WhileStatement?: RecursiveWalkerFn<acorn.WhileStatement, TState>,
    DoWhileStatement?: RecursiveWalkerFn<acorn.DoWhileStatement, TState>,
    ForStatement?: RecursiveWalkerFn<acorn.ForStatement, TState>,
    ForInStatement?: RecursiveWalkerFn<acorn.ForInStatement, TState>,
    FunctionDeclaration?: RecursiveWalkerFn<acorn.FunctionDeclaration, TState>,
    VariableDeclaration?: RecursiveWalkerFn<acorn.VariableDeclaration, TState>,
    VariableDeclarator?: RecursiveWalkerFn<acorn.VariableDeclarator, TState>,
    ThisExpression?: RecursiveWalkerFn<acorn.ThisExpression, TState>,
    ArrayExpression?: RecursiveWalkerFn<acorn.ArrayExpression, TState>,
    ObjectExpression?: RecursiveWalkerFn<acorn.ObjectExpression, TState>,
    Property?: RecursiveWalkerFn<acorn.Property, TState>,
    FunctionExpression?: RecursiveWalkerFn<acorn.FunctionExpression, TState>,
    UnaryExpression?: RecursiveWalkerFn<acorn.UnaryExpression, TState>,
    UpdateExpression?: RecursiveWalkerFn<acorn.UpdateExpression, TState>,
    BinaryExpression?: RecursiveWalkerFn<acorn.BinaryExpression, TState>,
    AssignmentExpression?: RecursiveWalkerFn<acorn.AssignmentExpression, TState>,
    LogicalExpression?: RecursiveWalkerFn<acorn.LogicalExpression, TState>,
    MemberExpression?: RecursiveWalkerFn<acorn.MemberExpression, TState>,
    ConditionalExpression?: RecursiveWalkerFn<acorn.ConditionalExpression, TState>,
    CallExpression?: RecursiveWalkerFn<acorn.CallExpression, TState>,
    NewExpression?: RecursiveWalkerFn<acorn.NewExpression, TState>,
    SequenceExpression?: RecursiveWalkerFn<acorn.SequenceExpression, TState>,
    ForOfStatement?: RecursiveWalkerFn<acorn.ForOfStatement, TState>,
    Super?: RecursiveWalkerFn<acorn.Super, TState>,
    SpreadElement?: RecursiveWalkerFn<acorn.SpreadElement, TState>,
    ArrowFunctionExpression?: RecursiveWalkerFn<acorn.ArrowFunctionExpression, TState>,
    YieldExpression?: RecursiveWalkerFn<acorn.YieldExpression, TState>,
    TemplateLiteral?: RecursiveWalkerFn<acorn.TemplateLiteral, TState>,
    TaggedTemplateExpression?: RecursiveWalkerFn<acorn.TaggedTemplateExpression, TState>,
    TemplateElement?: RecursiveWalkerFn<acorn.TemplateElement, TState>,
    ObjectPattern?: RecursiveWalkerFn<acorn.ObjectPattern, TState>,
    ArrayPattern?: RecursiveWalkerFn<acorn.ArrayPattern, TState>,
    RestElement?: RecursiveWalkerFn<acorn.RestElement, TState>,
    AssignmentPattern?: RecursiveWalkerFn<acorn.AssignmentPattern, TState>,
    ClassBody?: RecursiveWalkerFn<acorn.ClassBody, TState>,
    MethodDefinition?: RecursiveWalkerFn<acorn.MethodDefinition, TState>,
    ClassDeclaration?: RecursiveWalkerFn<acorn.ClassDeclaration, TState>,
    ClassExpression?: RecursiveWalkerFn<acorn.ClassExpression, TState>,
    MetaProperty?: RecursiveWalkerFn<acorn.MetaProperty, TState>,
    ImportDeclaration?: RecursiveWalkerFn<acorn.ImportDeclaration, TState>,
    ImportSpecifier?: RecursiveWalkerFn<acorn.ImportSpecifier, TState>,
    ImportDefaultSpecifier?: RecursiveWalkerFn<acorn.ImportDefaultSpecifier, TState>,
    ImportNamespaceSpecifier?: RecursiveWalkerFn<acorn.ImportNamespaceSpecifier, TState>,
    ExportNamedDeclaration?: RecursiveWalkerFn<acorn.ExportNamedDeclaration, TState>,
    ExportSpecifier?: RecursiveWalkerFn<acorn.ExportSpecifier, TState>,
    ExportDefaultDeclaration?: RecursiveWalkerFn<acorn.ExportDefaultDeclaration, TState>,
    ExportAllDeclaration?: RecursiveWalkerFn<acorn.ExportAllDeclaration, TState>,
    AwaitExpression?: RecursiveWalkerFn<acorn.AwaitExpression, TState>,
    ChainExpression?: RecursiveWalkerFn<acorn.ChainExpression, TState>,
    ImportExpression?: RecursiveWalkerFn<acorn.ImportExpression, TState>,
    PropertyDefinition?: RecursiveWalkerFn<acorn.PropertyDefinition, TState>,
    PrivateIdentifier?: RecursiveWalkerFn<acorn.PrivateIdentifier, TState>,
    StaticBlock?: RecursiveWalkerFn<acorn.StaticBlock, TState>,

    Expression?: SimpleWalkerFn<acorn.Expression, TState>,
    Statement?: SimpleWalkerFn<acorn.Statement, TState>,
    Pattern?: SimpleWalkerFn<acorn.Pattern, TState>,
    ForInit?: SimpleWalkerFn<acorn.VariableDeclaration | acorn.Expression, TState>
  };

  type FindPredicate = (type: string, node: acorn.Node) => boolean;

  interface Found<TState> {
    node: acorn.Node,
    state: TState
  }

  /**
   * does a 'simple' walk over a tree
   * @param node the AST node to walk
   * @param visitors an object with properties whose names correspond to node types in the {@link https://github.com/estree/estree | ESTree spec}. The properties should contain functions that will be called with the node object and, if applicable the state at that point.
   * @param base a walker algorithm
   * @param state a start state. The default walker will simply visit all statements and expressions and not produce a meaningful state. (An example of a use of state is to track scope at each point in the tree.)
   */
  export function simple<TState>(
    node: acorn.Node,
    visitors: SimpleVisitors<TState>,
    base?: RecursiveVisitors<TState>,
    state?: TState
  ): void;

  /**
   * does a 'simple' walk over a tree, building up an array of ancestor nodes (including the current node) and passing the array to the callbacks as a third parameter.
   * @param node 
   * @param visitors 
   * @param base 
   * @param state 
   */
  export function ancestor<TState>(
    node: acorn.Node,
    visitors: AncestorVisitors<TState>,
    base?: RecursiveVisitors<TState>,
    state?: TState
  ): void;

  /**
   * does a 'recursive' walk, where the walker functions are responsible for continuing the walk on the child nodes of their target node. 
   * @param node 
   * @param state the start state
   * @param functions contain an object that maps node types to walker functions
   * @param base provides the fallback walker functions for node types that aren't handled in the {@link functions} object. If not given, the default walkers will be used.
   */
  export function recursive<TState>(
    node: acorn.Node,
    state: TState,
    functions: RecursiveVisitors<TState>,
    base?: RecursiveVisitors<TState>
  ): void;

  /**
   * does a 'full' walk over a tree, calling the {@link callback} with the arguments (node, state, type) for each node
   * @param node 
   * @param callback 
   * @param base 
   * @param state 
   */
  export function full<TState>(
    node: acorn.Node,
    callback: FullWalkerCallback<TState>,
    base?: RecursiveVisitors<TState>,
    state?: TState
  ): void;

  /**
   * does a 'full' walk over a tree, building up an array of ancestor nodes (including the current node) and passing the array to the callbacks as a third parameter.
   * @param node 
   * @param callback 
   * @param base 
   * @param state 
   */
  export function fullAncestor<TState>(
    node: acorn.Node,
    callback: FullAncestorWalkerCallback<TState>,
    base?: RecursiveVisitors<TState>,
    state?: TState
  ): void;

  /**
   * builds a new walker object by using the walker functions in {@link functions} and filling in the missing ones by taking defaults from {@link base}.
   * @param functions 
   * @param base 
   */
  export function make<TState>(
    functions: RecursiveVisitors<TState>,
    base?: RecursiveVisitors<TState>
  ): RecursiveVisitors<TState>;

  /**
   * tries to locate a node in a tree at the given start and/or end offsets, which satisfies the predicate test. {@link start} and {@link end} can be either `null` (as wildcard) or a `number`. {@link test} may be a string (indicating a node type) or a function that takes (nodeType, node) arguments and returns a boolean indicating whether this node is interesting. {@link base} and {@link state} are optional, and can be used to specify a custom walker. Nodes are tested from inner to outer, so if two nodes match the boundaries, the inner one will be preferred.
   * @param node 
   * @param start 
   * @param end 
   * @param type 
   * @param base 
   * @param state 
   */
  export function findNodeAt<TState>(
    node: acorn.Node,
    start: number | undefined,
    end?: number | undefined,
    type?: FindPredicate | string,
    base?: RecursiveVisitors<TState>,
    state?: TState
  ): Found<TState> | undefined;

  /**
   * like {@link findNodeAt}, but will match any node that exists 'around' (spanning) the given position.
   * @param node 
   * @param start 
   * @param type 
   * @param base 
   * @param state 
   */
  export function findNodeAround<TState>(
    node: acorn.Node,
    start: number | undefined,
    type?: FindPredicate | string,
    base?: RecursiveVisitors<TState>,
    state?: TState
  ): Found<TState> | undefined;

  /**
   * similar to {@link findNodeAround}, but will match all nodes after the given position (testing outer nodes before inner nodes).
   */
  export const findNodeAfter: typeof findNodeAround;

  export const base: RecursiveVisitors<any>;
}
