(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[7633],{

/***/ 93202:
/***/ ((module) => {

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
Language: Handlebars
Requires: xml.js
Author: Robin Ward <robin.ward@gmail.com>
Description: Matcher for Handlebars as well as EmberJS additions.
Website: https://handlebarsjs.com
Category: template
*/

function handlebars(hljs) {
  const BUILT_INS = {
    'builtin-name': [
      'action',
      'bindattr',
      'collection',
      'component',
      'concat',
      'debugger',
      'each',
      'each-in',
      'get',
      'hash',
      'if',
      'in',
      'input',
      'link-to',
      'loc',
      'log',
      'lookup',
      'mut',
      'outlet',
      'partial',
      'query-params',
      'render',
      'template',
      'textarea',
      'unbound',
      'unless',
      'view',
      'with',
      'yield'
    ].join(" ")
  };

  const LITERALS = {
    literal: [
      'true',
      'false',
      'undefined',
      'null'
    ].join(" ")
  };

  // as defined in https://handlebarsjs.com/guide/expressions.html#literal-segments
  // this regex matches literal segments like ' abc ' or [ abc ] as well as helpers and paths
  // like a/b, ./abc/cde, and abc.bcd

  const DOUBLE_QUOTED_ID_REGEX=/".*?"/;
  const SINGLE_QUOTED_ID_REGEX=/'.*?'/;
  const BRACKET_QUOTED_ID_REGEX=/\[.*?\]/;
  const PLAIN_ID_REGEX=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/;
  const PATH_DELIMITER_REGEX=/\.|\//;

  const IDENTIFIER_REGEX = concat(
    '(',
    SINGLE_QUOTED_ID_REGEX, '|',
    DOUBLE_QUOTED_ID_REGEX, '|',
    BRACKET_QUOTED_ID_REGEX, '|',
    PLAIN_ID_REGEX, '|',
    PATH_DELIMITER_REGEX,
    ')+'
  );

  // identifier followed by a equal-sign (without the equal sign)
  const HASH_PARAM_REGEX = concat(
    '(',
    BRACKET_QUOTED_ID_REGEX, '|',
    PLAIN_ID_REGEX,
    ')(?==)'
  );

  const HELPER_NAME_OR_PATH_EXPRESSION = {
    begin: IDENTIFIER_REGEX,
    lexemes: /[\w.\/]+/
  };

  const HELPER_PARAMETER = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    keywords: LITERALS
  });

  const SUB_EXPRESSION = {
    begin: /\(/,
    end: /\)/
    // the "contains" is added below when all necessary sub-modes are defined
  };

  const HASH = {
    // fka "attribute-assignment", parameters of the form 'key=value'
    className: 'attr',
    begin: HASH_PARAM_REGEX,
    relevance: 0,
    starts: {
      begin: /=/,
      end: /=/,
      starts: {
        contains: [
          hljs.NUMBER_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          HELPER_PARAMETER,
          SUB_EXPRESSION
        ]
      }
    }
  };

  const BLOCK_PARAMS = {
    // parameters of the form '{{#with x as | y |}}...{{/with}}'
    begin: /as\s+\|/,
    keywords: { keyword: 'as' },
    end: /\|/,
    contains: [
      {
        // define sub-mode in order to prevent highlighting of block-parameter named "as"
        begin: /\w+/
      }
    ]
  };

  const HELPER_PARAMETERS = {
    contains: [
      hljs.NUMBER_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      BLOCK_PARAMS,
      HASH,
      HELPER_PARAMETER,
      SUB_EXPRESSION
    ],
    returnEnd: true
    // the property "end" is defined through inheritance when the mode is used. If depends
    // on the surrounding mode, but "endsWithParent" does not work here (i.e. it includes the
    // end-token of the surrounding mode)
  };

  const SUB_EXPRESSION_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    className: 'name',
    keywords: BUILT_INS,
    starts: hljs.inherit(HELPER_PARAMETERS, {
      end: /\)/,
    })
  });

  SUB_EXPRESSION.contains = [
    SUB_EXPRESSION_CONTENTS
  ];

  const OPENING_BLOCK_MUSTACHE_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    keywords: BUILT_INS,
    className: 'name',
    starts: hljs.inherit(HELPER_PARAMETERS, {
      end: /}}/,
    })
  });

  const CLOSING_BLOCK_MUSTACHE_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    keywords: BUILT_INS,
    className: 'name'
  });

  const BASIC_MUSTACHE_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
    className: 'name',
    keywords: BUILT_INS,
    starts: hljs.inherit(HELPER_PARAMETERS, {
      end: /}}/,
    })
  });

  const ESCAPE_MUSTACHE_WITH_PRECEEDING_BACKSLASH = {begin: /\\\{\{/, skip: true};
  const PREVENT_ESCAPE_WITH_ANOTHER_PRECEEDING_BACKSLASH = {begin: /\\\\(?=\{\{)/, skip: true};

  return {
    name: 'Handlebars',
    aliases: ['hbs', 'html.hbs', 'html.handlebars', 'htmlbars'],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [
      ESCAPE_MUSTACHE_WITH_PRECEEDING_BACKSLASH,
      PREVENT_ESCAPE_WITH_ANOTHER_PRECEEDING_BACKSLASH,
      hljs.COMMENT(/\{\{!--/, /--\}\}/),
      hljs.COMMENT(/\{\{!/, /\}\}/),
      {
        // open raw block "{{{{raw}}}} content not evaluated {{{{/raw}}}}"
        className: 'template-tag',
        begin: /\{\{\{\{(?!\/)/,
        end: /\}\}\}\}/,
        contains: [OPENING_BLOCK_MUSTACHE_CONTENTS],
        starts: {end: /\{\{\{\{\//, returnEnd: true, subLanguage: 'xml'}
      },
      {
        // close raw block
        className: 'template-tag',
        begin: /\{\{\{\{\//,
        end: /\}\}\}\}/,
        contains: [CLOSING_BLOCK_MUSTACHE_CONTENTS]
      },
      {
        // open block statement
        className: 'template-tag',
        begin: /\{\{#/,
        end: /\}\}/,
        contains: [OPENING_BLOCK_MUSTACHE_CONTENTS],
      },
      {
        className: 'template-tag',
        begin: /\{\{(?=else\}\})/,
        end: /\}\}/,
        keywords: 'else'
      },
      {
        className: 'template-tag',
        begin: /\{\{(?=else if)/,
        end: /\}\}/,
        keywords: 'else if'
      },
      {
        // closing block statement
        className: 'template-tag',
        begin: /\{\{\//,
        end: /\}\}/,
        contains: [CLOSING_BLOCK_MUSTACHE_CONTENTS],
      },
      {
        // template variable or helper-call that is NOT html-escaped
        className: 'template-variable',
        begin: /\{\{\{/,
        end: /\}\}\}/,
        contains: [BASIC_MUSTACHE_CONTENTS]
      },
      {
        // template variable or helper-call that is html-escaped
        className: 'template-variable',
        begin: /\{\{/,
        end: /\}\}/,
        contains: [BASIC_MUSTACHE_CONTENTS]
      }
    ]
  };
}

/*
 Language: HTMLBars (legacy)
 Requires: xml.js
 Description: Matcher for Handlebars as well as EmberJS additions.
 Website: https://github.com/tildeio/htmlbars
 Category: template
 */

function htmlbars(hljs) {
  const definition = handlebars(hljs);

  definition.name = "HTMLbars";

  // HACK: This lets handlebars do the auto-detection if it's been loaded (by
  // default the build script will load in alphabetical order) and if not (perhaps
  // an install is only using `htmlbars`, not `handlebars`) then this will still
  // allow HTMLBars to participate in the auto-detection

  // worse case someone will have HTMLbars and handlebars competing for the same
  // content and will need to change their setup to only require handlebars, but
  // I don't consider this a breaking change
  if (hljs.getLanguage("handlebars")) {
    definition.disableAutodetect = true;
  }

  return definition
}

module.exports = htmlbars;


/***/ }),

/***/ 82026:
/***/ ((module) => {

/*
Language: JSON
Description: JSON (JavaScript Object Notation) is a lightweight data-interchange format.
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Website: http://www.json.org
Category: common, protocols
*/

function json(hljs) {
  var LITERALS = {literal: 'true false null'};
  var ALLOWED_COMMENTS = [
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE
  ];
  var TYPES = [
    hljs.QUOTE_STRING_MODE,
    hljs.C_NUMBER_MODE
  ];
  var VALUE_CONTAINER = {
    end: ',', endsWithParent: true, excludeEnd: true,
    contains: TYPES,
    keywords: LITERALS
  };
  var OBJECT = {
    begin: '{', end: '}',
    contains: [
      {
        className: 'attr',
        begin: /"/, end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE],
        illegal: '\\n',
      },
      hljs.inherit(VALUE_CONTAINER, {begin: /:/})
    ].concat(ALLOWED_COMMENTS),
    illegal: '\\S'
  };
  var ARRAY = {
    begin: '\\[', end: '\\]',
    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
    illegal: '\\S'
  };
  TYPES.push(OBJECT, ARRAY);
  ALLOWED_COMMENTS.forEach(function(rule) {
    TYPES.push(rule);
  });
  return {
    name: 'JSON',
    contains: TYPES,
    keywords: LITERALS,
    illegal: '\\S'
  };
}

module.exports = json;


/***/ }),

/***/ 93839:
/***/ ((module) => {

/*
Language: Markdown
Requires: xml.js
Author: John Crepezzi <john.crepezzi@gmail.com>
Website: https://daringfireball.net/projects/markdown/
Category: common, markup
*/

function markdown(hljs) {
  const INLINE_HTML = {
    begin: '<', end: '>',
    subLanguage: 'xml',
    relevance: 0
  };
  const HORIZONTAL_RULE = {
    begin: '^[-\\*]{3,}', end: '$'
  };
  const CODE = {
    className: 'code',
    variants: [
      // TODO: fix to allow these to work with sublanguage also
      { begin: '(`{3,})(.|\\n)*?\\1`*[ ]*', },
      { begin: '(~{3,})(.|\\n)*?\\1~*[ ]*', },
      // needed to allow markdown as a sublanguage to work
      { begin: '```', end: '```+[ ]*$' },
      { begin: '~~~', end: '~~~+[ ]*$' },
      { begin: '`.+?`' },
      {
        begin: '(?=^( {4}|\\t))',
        // use contains to gobble up multiple lines to allow the block to be whatever size
        // but only have a single open/close tag vs one per line
        contains: [
          { begin: '^( {4}|\\t)', end: '(\\n)$' }
        ],
        relevance: 0
      }
    ]
  };
  const LIST = {
    className: 'bullet',
    begin: '^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)',
    end: '\\s+',
    excludeEnd: true
  };
  const LINK_REFERENCE = {
    begin: /^\[[^\n]+\]:/,
    returnBegin: true,
    contains: [
      {
        className: 'symbol',
        begin: /\[/, end: /\]/,
        excludeBegin: true, excludeEnd: true
      },
      {
        className: 'link',
        begin: /:\s*/, end: /$/,
        excludeBegin: true
      }
    ]
  };
  const LINK = {
    begin: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
    returnBegin: true,
    contains: [
      {
        className: 'string',
        begin: '\\[', end: '\\]',
        excludeBegin: true,
        returnEnd: true,
        relevance: 0
      },
      {
        className: 'link',
        begin: '\\]\\(', end: '\\)',
        excludeBegin: true, excludeEnd: true
      },
      {
        className: 'symbol',
        begin: '\\]\\[', end: '\\]',
        excludeBegin: true, excludeEnd: true
      }
    ],
    relevance: 10
  };
  const BOLD = {
    className: 'strong',
    contains: [],
    variants: [
      {begin: /_{2}/, end: /_{2}/ },
      {begin: /\*{2}/, end: /\*{2}/ }
    ]
  };
  const ITALIC = {
    className: 'emphasis',
    contains: [],
    variants: [
      { begin: /\*(?!\*)/, end: /\*/ },
      { begin: /_(?!_)/, end: /_/, relevance: 0},
    ]
  };
  BOLD.contains.push(ITALIC);
  ITALIC.contains.push(BOLD);

  var CONTAINABLE = [
    INLINE_HTML,
    LINK
  ];

  BOLD.contains = BOLD.contains.concat(CONTAINABLE);
  ITALIC.contains = ITALIC.contains.concat(CONTAINABLE);

  CONTAINABLE = CONTAINABLE.concat(BOLD,ITALIC);

  const HEADER = {
    className: 'section',
    variants: [
      {
        begin: '^#{1,6}',
        end: '$',
        contains: CONTAINABLE
       },
      {
        begin: '(?=^.+?\\n[=-]{2,}$)',
        contains: [
          { begin: '^[=-]*$' },
          { begin: '^', end: "\\n", contains: CONTAINABLE },
        ]
       }
    ]
  };

  const BLOCKQUOTE = {
    className: 'quote',
    begin: '^>\\s+',
    contains: CONTAINABLE,
    end: '$',
  };

  return {
    name: 'Markdown',
    aliases: ['md', 'mkdown', 'mkd'],
    contains: [
      HEADER,
      INLINE_HTML,
      LIST,
      BOLD,
      ITALIC,
      BLOCKQUOTE,
      CODE,
      HORIZONTAL_RULE,
      LINK,
      LINK_REFERENCE
    ]
  };
}

module.exports = markdown;


/***/ }),

/***/ 49889:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _htmlbars = _interopRequireDefault(__webpack_require__(93202));

var _default = _htmlbars.default;
exports.Z = _default;

/***/ }),

/***/ 22489:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _json = _interopRequireDefault(__webpack_require__(82026));

var _default = _json.default;
exports.Z = _default;

/***/ }),

/***/ 53459:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _markdown = _interopRequireDefault(__webpack_require__(93839));

var _default = _markdown.default;
exports.Z = _default;

/***/ }),

/***/ 95413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ commonMenuData)
/* harmony export */ });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60650);
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const commonMenuData = {
  name: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Data'),
  tabs: [
  {
    name: 'Databases',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Databases'),
    url: '/databaseview/list/',
    usesRouter: true },

  {
    name: 'Datasets',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Datasets'),
    url: '/tablemodelview/list/',
    usesRouter: true },

  {
    name: 'Saved queries',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Saved queries'),
    url: '/savedqueryview/list/',
    usesRouter: true },

  {
    name: 'Query history',
    label: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__.t)('Query history'),
    url: '/superset/sqllab/history/',
    usesRouter: true }] };

/***/ }),

/***/ 31673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SyntaxHighlighterCopy)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5872);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69100);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60650);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_sql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33743);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_htmlbars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49889);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53459);
/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_hljs_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22489);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs_github__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(120);
/* harmony import */ var react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42110);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38097);
/* harmony import */ var src_utils_copy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10222);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11965);
 /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */










react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_3__/* ["default"].registerLanguage */ .Z.registerLanguage('sql', react_syntax_highlighter_dist_cjs_languages_hljs_sql__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_3__/* ["default"].registerLanguage */ .Z.registerLanguage('markdown', react_syntax_highlighter_dist_cjs_languages_hljs_markdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_3__/* ["default"].registerLanguage */ .Z.registerLanguage('html', react_syntax_highlighter_dist_cjs_languages_hljs_htmlbars__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_3__/* ["default"].registerLanguage */ .Z.registerLanguage('json', react_syntax_highlighter_dist_cjs_languages_hljs_json__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
const SyntaxHighlighterWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .styled.div */ .iK.div`
  margin-top: -24px;

  &:hover {
    svg {
      visibility: visible;
    }
  }

  svg {
    position: relative;
    top: 40px;
    left: 512px;
    visibility: hidden;
    margin: -4px;
    color: ${({ theme }) => theme.colors.grayscale.base};
  }
`;
function SyntaxHighlighterCopy({ addDangerToast, addSuccessToast, children, ...syntaxHighlighterProps }) {
  function copyToClipboard(textToCopy) {
    (0,src_utils_copy__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(textToCopy).
    then(() => {
      if (addSuccessToast) {
        addSuccessToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('SQL Copied!'));
      }
    }).
    catch(() => {
      if (addDangerToast) {
        addDangerToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__.t)('Sorry, your browser does not support copying.'));
      }
    });
  }
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(SyntaxHighlighterWrapper, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Copy */ .Z.Copy, { tabIndex: 0, role: "button", onClick: (e) => {
      e.preventDefault();
      e.currentTarget.blur();
      copyToClipboard(children);
    } }),
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_syntax_highlighter_dist_cjs_light__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ style: react_syntax_highlighter_dist_cjs_styles_hljs_github__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z }, syntaxHighlighterProps),
  children));


}

/***/ }),

/***/ 14025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useQueryPreviewState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function useQueryPreviewState({ queries, fetchData, currentQueryId }) {
  const index = queries.findIndex((query) => query.id === currentQueryId);
  const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(index);
  const [disablePrevious, setDisablePrevious] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [disableNext, setDisableNext] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  function checkIndex() {
    setDisablePrevious(currentIndex === 0);
    setDisableNext(currentIndex === queries.length - 1);
  }
  function handleDataChange(previous) {
    const offset = previous ? -1 : 1;
    const index = currentIndex + offset;
    if (index >= 0 && index < queries.length) {
      fetchData(queries[index].id);
      setCurrentIndex(index);
      checkIndex();
    }
  }
  function handleKeyPress(ev) {
    if (currentIndex >= 0 && currentIndex < queries.length) {
      if (ev.key === 'ArrowDown' || ev.key === 'k') {
        ev.preventDefault();
        handleDataChange(false);
      } else
      if (ev.key === 'ArrowUp' || ev.key === 'j') {
        ev.preventDefault();
        handleDataChange(true);
      }
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    checkIndex();
  });
  return {
    handleKeyPress,
    handleDataChange,
    disablePrevious,
    disableNext };

}

/***/ }),

/***/ 82842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ query_QueryList)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js + 5 modules
var style = __webpack_require__(69100);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/views/CRUD/utils.tsx
var utils = __webpack_require__(40768);
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/views/CRUD/hooks.ts
var hooks = __webpack_require__(34858);
// EXTERNAL MODULE: ./src/components/Menu/SubMenu.tsx
var SubMenu = __webpack_require__(62753);
// EXTERNAL MODULE: ./src/components/Popover/index.tsx
var Popover = __webpack_require__(76697);
// EXTERNAL MODULE: ./src/views/CRUD/data/common.ts
var common = __webpack_require__(95413);
// EXTERNAL MODULE: ./src/components/ListView/index.ts + 11 modules
var ListView = __webpack_require__(9678);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./node_modules/react-syntax-highlighter/dist/cjs/light.js
var light = __webpack_require__(42110);
// EXTERNAL MODULE: ./node_modules/react-syntax-highlighter/dist/cjs/languages/hljs/sql.js
var sql = __webpack_require__(33743);
// EXTERNAL MODULE: ./node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/github.js
var github = __webpack_require__(120);
// EXTERNAL MODULE: ./src/constants.ts
var constants = __webpack_require__(27600);
// EXTERNAL MODULE: ./src/views/CRUD/types.ts
var types = __webpack_require__(12);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/views/CRUD/data/components/SyntaxHighlighterCopy/index.tsx
var SyntaxHighlighterCopy = __webpack_require__(31673);
// EXTERNAL MODULE: ./src/views/CRUD/data/hooks.ts
var data_hooks = __webpack_require__(14025);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/views/CRUD/data/query/QueryPreviewModal.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */








const QueryTitle = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.secondary.light2};
  font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
  margin-bottom: 0;
  text-transform: uppercase;
`;
const QueryLabel = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.grayscale.dark2};
  font-size: ${({ theme }) => theme.typography.sizes.m - 1}px;
  padding: 4px 0 24px 0;
`;
const QueryViewToggle = style/* styled.div */.iK.div`
  margin: 0 0 ${({ theme }) => theme.gridUnit * 6}px 0;
`;
const TabButton = style/* styled.div */.iK.div`
  display: inline;
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  padding: ${({ theme }) => theme.gridUnit * 2}px
    ${({ theme }) => theme.gridUnit * 4}px;
  margin-right: ${({ theme }) => theme.gridUnit * 4}px;
  color: ${({ theme }) => theme.colors.secondary.dark1};

  &.active,
  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.secondary.light4};
    border-bottom: none;
    border-radius: ${({ theme }) => theme.borderRadius}px;
    margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  }

  &:hover:not(.active) {
    background: ${({ theme }) => theme.colors.secondary.light5};
  }
`;
const StyledModal = (0,style/* styled */.iK)(Modal/* default */.Z)`
  .ant-modal-body {
    padding: ${({ theme }) => theme.gridUnit * 6}px;
  }

  pre {
    font-size: ${({ theme }) => theme.typography.sizes.xs}px;
    font-weight: ${({ theme }) => theme.typography.weights.normal};
    line-height: ${({ theme }) => theme.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`;
function QueryPreviewModal({ onHide, openInSqlLab, queries, query, fetchData, show, addDangerToast, addSuccessToast }) {
  const { handleKeyPress, handleDataChange, disablePrevious, disableNext } = (0,data_hooks/* useQueryPreviewState */.C)({
    queries,
    currentQueryId: query.id,
    fetchData });

  const [currentTab, setCurrentTab] = (0,react.useState)('user');
  const { id, sql, executed_sql } = query;
  return (0,emotion_react_browser_esm.jsx)("div", { role: "none", onKeyUp: handleKeyPress },
  (0,emotion_react_browser_esm.jsx)(StyledModal, { onHide: onHide, show: show, title: (0,TranslatorSingleton.t)('Query preview'), footer: [
    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { "data-test": "previous-query", key: "previous-query", disabled: disablePrevious, onClick: () => handleDataChange(true) },
    (0,TranslatorSingleton.t)('Previous')),

    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { "data-test": "next-query", key: "next-query", disabled: disableNext, onClick: () => handleDataChange(false) },
    (0,TranslatorSingleton.t)('Next')),

    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { "data-test": "open-in-sql-lab", key: "open-in-sql-lab", buttonStyle: "primary", onClick: () => openInSqlLab(id) },
    (0,TranslatorSingleton.t)('Open in SQL Lab'))] },


  (0,emotion_react_browser_esm.jsx)(QueryTitle, null, (0,TranslatorSingleton.t)('Tab name')),
  (0,emotion_react_browser_esm.jsx)(QueryLabel, null, query.tab_name),
  (0,emotion_react_browser_esm.jsx)(QueryViewToggle, null,
  (0,emotion_react_browser_esm.jsx)(TabButton, { role: "button", "data-test": "toggle-user-sql", className: classnames_default()({ active: currentTab === 'user' }), onClick: () => setCurrentTab('user') },
  (0,TranslatorSingleton.t)('User query')),

  (0,emotion_react_browser_esm.jsx)(TabButton, { role: "button", "data-test": "toggle-executed-sql", className: classnames_default()({ active: currentTab === 'executed' }), onClick: () => setCurrentTab('executed') },
  (0,TranslatorSingleton.t)('Executed query'))),


  (0,emotion_react_browser_esm.jsx)(SyntaxHighlighterCopy/* default */.Z, { addDangerToast: addDangerToast, addSuccessToast: addSuccessToast, language: "sql" },
  (currentTab === 'user' ? sql : executed_sql) || '')));



}
/* harmony default export */ const query_QueryPreviewModal = ((0,withToasts/* default */.Z)(QueryPreviewModal));
;// CONCATENATED MODULE: ./src/views/CRUD/data/query/QueryList.tsx
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


















const PAGE_SIZE = 25;
const SQL_PREVIEW_MAX_LINES = 4;
const TopAlignedListView = (0,style/* styled */.iK)(ListView/* default */.Z)`
  table .table-cell {
    vertical-align: top;
  }
`;
light/* default.registerLanguage */.Z.registerLanguage('sql', sql/* default */.Z);
const StyledSyntaxHighlighter = (0,style/* styled */.iK)(light/* default */.Z)`
  height: ${({ theme }) => theme.gridUnit * 26}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StyledTableLabel = style/* styled.div */.iK.div`
  .count {
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`;
const StyledPopoverItem = style/* styled.div */.iK.div`
  color: ${({ theme }) => theme.colors.grayscale.dark2};
`;
function QueryList({ addDangerToast, addSuccessToast }) {
  const { state: { loading, resourceCount: queryCount, resourceCollection: queries }, fetchData } = (0,hooks/* useListViewResource */.Yi)('query', (0,TranslatorSingleton.t)('Query history'), addDangerToast, false);
  const [queryCurrentlyPreviewing, setQueryCurrentlyPreviewing] = (0,react.useState)();
  const theme = (0,style/* useTheme */.Fg)();
  const handleQueryPreview = (0,react.useCallback)((id) => {
    SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/query/${id}` }).
    then(({ json = {} }) => {
      setQueryCurrentlyPreviewing({ ...json.result });
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue previewing the selected query. %s', errMsg))));
  }, [addDangerToast]);
  const menuData = {
    activeChild: 'Query history',
    ...common/* commonMenuData */.Y };

  const initialSort = [{ id: types/* QueryObjectColumns.start_time */.J.start_time, desc: true }];
  const columns = (0,react.useMemo)(() => [
  {
    Cell: ({ row: { original: { status } } }) => {
      const statusConfig = {
        name: null,
        label: '' };

      if (status === 'success') {
        statusConfig.name = (0,emotion_react_browser_esm.jsx)(Icons/* default.Check */.Z.Check, { iconColor: theme.colors.success.base });
        statusConfig.label = (0,TranslatorSingleton.t)('Success');
      } else
      if (status === 'failed' || status === 'stopped') {
        statusConfig.name = (0,emotion_react_browser_esm.jsx)(Icons/* default.XSmall */.Z.XSmall, { iconColor: status === 'failed' ?
          theme.colors.error.base :
          theme.colors.grayscale.base });
        statusConfig.label = (0,TranslatorSingleton.t)('Failed');
      } else
      if (status === 'running') {
        statusConfig.name = (0,emotion_react_browser_esm.jsx)(Icons/* default.Running */.Z.Running, { iconColor: theme.colors.primary.base });
        statusConfig.label = (0,TranslatorSingleton.t)('Running');
      } else
      if (status === 'timed_out') {
        statusConfig.name = (0,emotion_react_browser_esm.jsx)(Icons/* default.Offline */.Z.Offline, { iconColor: theme.colors.grayscale.light1 });
        statusConfig.label = (0,TranslatorSingleton.t)('Offline');
      } else
      if (status === 'scheduled' || status === 'pending') {
        statusConfig.name = (0,emotion_react_browser_esm.jsx)(Icons/* default.Queued */.Z.Queued, { iconColor: theme.colors.grayscale.base });
        statusConfig.label = (0,TranslatorSingleton.t)('Scheduled');
      }
      return (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: statusConfig.label, placement: "bottom" },
      (0,emotion_react_browser_esm.jsx)("span", null, statusConfig.name));

    },
    accessor: types/* QueryObjectColumns.status */.J.status,
    size: 'xs',
    disableSortBy: true },

  {
    accessor: types/* QueryObjectColumns.start_time */.J.start_time,
    Header: (0,TranslatorSingleton.t)('Time'),
    size: 'xl',
    Cell: ({ row: { original: { start_time, end_time } } }) => {
      const startMoment = moment_default().utc(start_time).local();
      const formattedStartTimeData = startMoment.
      format(constants/* DATETIME_WITH_TIME_ZONE */.v2).
      split(' ');
      const formattedStartTime = (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
      formattedStartTimeData[0], " ", (0,emotion_react_browser_esm.jsx)("br", null),
      formattedStartTimeData[1]);

      return end_time ? (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: (0,TranslatorSingleton.t)('Duration: %s', moment_default()(moment_default().utc(end_time - start_time)).format(constants/* TIME_WITH_MS */.n2)), placement: "bottom" },
      (0,emotion_react_browser_esm.jsx)("span", null, formattedStartTime)) :
      formattedStartTime;
    } },

  {
    accessor: types/* QueryObjectColumns.tab_name */.J.tab_name,
    Header: (0,TranslatorSingleton.t)('Tab name'),
    size: 'xl' },

  {
    accessor: types/* QueryObjectColumns.database_name */.J.database_name,
    Header: (0,TranslatorSingleton.t)('Database'),
    size: 'xl' },

  {
    accessor: types/* QueryObjectColumns.database */.J.database,
    hidden: true },

  {
    accessor: types/* QueryObjectColumns.schema */.J.schema,
    Header: (0,TranslatorSingleton.t)('Schema'),
    size: 'xl' },

  {
    Cell: ({ row: { original: { sql_tables: tables = [] } } }) => {
      const names = tables.map((table) => table.table);
      const main = names.length > 0 ? names.shift() : '';
      if (names.length) {
        return (0,emotion_react_browser_esm.jsx)(StyledTableLabel, null,
        (0,emotion_react_browser_esm.jsx)("span", null, main),
        (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, { placement: "right", title: (0,TranslatorSingleton.t)('TABLES'), trigger: "click", content: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
          names.map((name) => (0,emotion_react_browser_esm.jsx)(StyledPopoverItem, { key: name }, name))) },

        (0,emotion_react_browser_esm.jsx)("span", { className: "count" }, "(+", names.length, ")")));


      }
      return main;
    },
    accessor: types/* QueryObjectColumns.sql_tables */.J.sql_tables,
    Header: (0,TranslatorSingleton.t)('Tables'),
    size: 'xl',
    disableSortBy: true },

  {
    accessor: types/* QueryObjectColumns.user_first_name */.J.user_first_name,
    Header: (0,TranslatorSingleton.t)('User'),
    size: 'xl',
    Cell: ({ row: { original: { user } } }) => user ? `${user.first_name} ${user.last_name}` : '' },

  {
    accessor: types/* QueryObjectColumns.user */.J.user,
    hidden: true },

  {
    accessor: types/* QueryObjectColumns.rows */.J.rows,
    Header: (0,TranslatorSingleton.t)('Rows'),
    size: 'md' },

  {
    accessor: types/* QueryObjectColumns.sql */.J.sql,
    Header: (0,TranslatorSingleton.t)('SQL'),
    Cell: ({ row: { original, id } }) => (0,emotion_react_browser_esm.jsx)("div", { tabIndex: 0, role: "button", "data-test": `open-sql-preview-${id}`, onClick: () => setQueryCurrentlyPreviewing(original) },
    (0,emotion_react_browser_esm.jsx)(StyledSyntaxHighlighter, { language: "sql", style: github/* default */.Z },
    (0,utils/* shortenSQL */.IB)(original.sql, SQL_PREVIEW_MAX_LINES))) },



  {
    Header: (0,TranslatorSingleton.t)('Actions'),
    id: 'actions',
    disableSortBy: true,
    Cell: ({ row: { original: { id } } }) => (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { title: (0,TranslatorSingleton.t)('Open query in SQL Lab'), placement: "bottom" },
    (0,emotion_react_browser_esm.jsx)("a", { href: `/superset/sqllab?queryId=${id}` },
    (0,emotion_react_browser_esm.jsx)(Icons/* default.Full */.Z.Full, { iconColor: theme.colors.grayscale.base }))) }],



  []);
  const filters = (0,react.useMemo)(() => [
  {
    Header: (0,TranslatorSingleton.t)('Database'),
    id: 'database',
    input: 'select',
    operator: ListView/* FilterOperator.relationOneMany */.p.relationOneMany,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchRelated */.tm)('query', 'database', (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching database values: %s', errMsg)))),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('State'),
    id: 'status',
    input: 'select',
    operator: ListView/* FilterOperator.equals */.p.equals,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchDistinct */.wk)('query', 'status', (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching schema values: %s', errMsg)))),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('User'),
    id: 'user',
    input: 'select',
    operator: ListView/* FilterOperator.relationOneMany */.p.relationOneMany,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchRelated */.tm)('query', 'user', (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching user values: %s', errMsg)))),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('Time range'),
    id: 'start_time',
    input: 'datetime_range',
    operator: ListView/* FilterOperator.between */.p.between },

  {
    Header: (0,TranslatorSingleton.t)('Search by query text'),
    id: 'sql',
    input: 'search',
    operator: ListView/* FilterOperator.contains */.p.contains }],

  [addDangerToast]);
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(SubMenu/* default */.Z, menuData),
  queryCurrentlyPreviewing && (0,emotion_react_browser_esm.jsx)(query_QueryPreviewModal, { onHide: () => setQueryCurrentlyPreviewing(undefined), query: queryCurrentlyPreviewing, queries: queries, fetchData: handleQueryPreview, openInSqlLab: (id) => window.location.assign(`/superset/sqllab?queryId=${id}`), show: true }),
  (0,emotion_react_browser_esm.jsx)(TopAlignedListView, { className: "query-history-list-view", columns: columns, count: queryCount, data: queries, fetchData: fetchData, filters: filters, initialSort: initialSort, loading: loading, pageSize: PAGE_SIZE, highlightRowId: queryCurrentlyPreviewing == null ? void 0 : queryCurrentlyPreviewing.id }));

}
/* harmony default export */ const query_QueryList = ((0,withToasts/* default */.Z)(QueryList));

/***/ })

}]);