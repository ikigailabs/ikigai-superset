(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[9173],{

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

/***/ 27989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69100);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60650);
/* harmony import */ var src_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35932);
/* harmony import */ var src_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74069);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82191);
/* harmony import */ var src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34858);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11965);
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






const HelperMessage = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  display: block;
  color: ${({ theme }) => theme.colors.grayscale.base};
  font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
`;
const StyledInputContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .styled.div */ .iK.div`
  padding-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  padding-top: ${({ theme }) => theme.gridUnit * 2}px;

  & > div {
    margin: ${({ theme }) => theme.gridUnit}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${({ theme }) => theme.gridUnit * 2}px;
    }

    i {
      margin: 0 ${({ theme }) => theme.gridUnit}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({ theme }) => theme.gridUnit * 1.5}px
      ${({ theme }) => theme.gridUnit * 2}px;
    border-style: none;
    border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    border-radius: ${({ theme }) => theme.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${({ theme }) => theme.gridUnit * 3}px;
    }
  }
`;
const ImportModelsModal = ({ resourceName, resourceLabel, passwordsNeededMessage, confirmOverwriteMessage, addDangerToast, addSuccessToast, onModelImport, show, onHide, passwordFields = [], setPasswordFields = () => {} }) => {
  const [isHidden, setIsHidden] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [passwords, setPasswords] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [needsOverwriteConfirm, setNeedsOverwriteConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [confirmedOverwrite, setConfirmedOverwrite] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [fileList, setFileList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [importingModel, setImportingModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const clearModal = () => {
    setFileList([]);
    setPasswordFields([]);
    setPasswords({});
    setNeedsOverwriteConfirm(false);
    setConfirmedOverwrite(false);
    setImportingModel(false);
  };
  const handleErrorMsg = (msg) => {
    clearModal();
    addDangerToast(msg);
  };
  const { state: { alreadyExists, passwordsNeeded }, importResource } = (0,src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useImportResource */ .PW)(resourceName, resourceLabel, handleErrorMsg);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setPasswordFields(passwordsNeeded);
    if (passwordsNeeded.length > 0) {
      setImportingModel(false);
    }
  }, [passwordsNeeded, setPasswordFields]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setNeedsOverwriteConfirm(alreadyExists.length > 0);
    if (alreadyExists.length > 0) {
      setImportingModel(false);
    }
  }, [alreadyExists, setNeedsOverwriteConfirm]);
  // Functions
  const hide = () => {
    setIsHidden(true);
    onHide();
    clearModal();
  };
  const onUpload = () => {var _fileList$;
    if (!(((_fileList$ = fileList[0]) == null ? void 0 : _fileList$.originFileObj) instanceof File)) {
      return;
    }
    setImportingModel(true);
    importResource(fileList[0].originFileObj, passwords, confirmedOverwrite).then((result) => {
      if (result) {
        addSuccessToast((0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('The import was successful'));
        clearModal();
        onModelImport();
      }
    });
  };
  const changeFile = (info) => {
    setFileList([
    {
      ...info.file,
      status: 'done' }]);


  };
  const removeFile = (removedFile) => {
    setFileList(fileList.filter((file) => file.uid !== removedFile.uid));
    return false;
  };
  const confirmOverwrite = (event) => {var _event$currentTarget$, _event$currentTarget;
    const targetValue = (_event$currentTarget$ = (_event$currentTarget = event.currentTarget) == null ? void 0 : _event$currentTarget.value) != null ? _event$currentTarget$ : '';
    setConfirmedOverwrite(targetValue.toUpperCase() === (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('OVERWRITE'));
  };
  const renderPasswordFields = () => {
    if (passwordFields.length === 0) {
      return null;
    }
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", null, "Database passwords"),
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(HelperMessage, null, passwordsNeededMessage),
    passwordFields.map((fileName) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(StyledInputContainer, { key: `password-for-${fileName}` },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: "control-label" },
    fileName,
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", { className: "required" }, "*")),

    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", { name: `password-${fileName}`, autoComplete: `password-${fileName}`, type: "password", value: passwords[fileName], onChange: (event) => setPasswords({ ...passwords, [fileName]: event.target.value }) }))));


  };
  const renderOverwriteConfirmation = () => {
    if (!needsOverwriteConfirm) {
      return null;
    }
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(StyledInputContainer, null,
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: "confirm-overwrite" }, confirmOverwriteMessage),
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", { className: "control-label" },
    (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('Type "%s" to confirm', (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('OVERWRITE'))),

    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", { "data-test": "overwrite-modal-input", id: "overwrite", type: "text", onChange: confirmOverwrite })));


  };
  // Show/hide
  if (isHidden && show) {
    setIsHidden(false);
  }
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Modal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { name: "model", className: "import-model-modal", disablePrimaryButton: fileList.length === 0 ||
    needsOverwriteConfirm && !confirmedOverwrite ||
    importingModel, onHandledPrimaryAction: onUpload, onHide: hide, primaryButtonName: needsOverwriteConfirm ? (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('Overwrite') : (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('Import'), primaryButtonType: needsOverwriteConfirm ? 'danger' : 'primary', width: "750px", show: show, title: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", null, (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__.t)('Import %s', resourceLabel)) },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(StyledInputContainer, null,
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_common_components__WEBPACK_IMPORTED_MODULE_3__/* .Upload */ .gq, { name: "modelFile", id: "modelFile", "data-test": "model-file-input", accept: ".yaml,.json,.yml,.zip", fileList: fileList, onChange: changeFile, onRemove: removeFile
    // upload is handled by hook
    , customRequest: () => {} },
  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(src_components_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, { loading: importingModel }, "Select file"))),


  renderPasswordFields(),
  renderOverwriteConfirmation());

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportModelsModal);

/***/ }),

/***/ 29848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ActionsBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69100);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58593);
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38097);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11965);
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




const StyledActions = _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .styled.span */ .iK.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.primary.base};
      }
    }
  }
`;
const ActionWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .styled.span */ .iK.span`
  color: ${({ theme }) => theme.colors.grayscale.base};
`;
function ActionsBar({ actions }) {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledActions, { className: "actions" },
  actions.map((action, index) => {
    const ActionIcon = src_components_Icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[action.icon];
    if (action.tooltip) {
      return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__/* .Tooltip */ .u, { id: `${action.label}-tooltip`, title: action.tooltip, placement: action.placement, key: index },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionWrapper, { role: "button", tabIndex: 0, className: "action-button", "data-test": action.label, onClick: action.onClick },
      (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionIcon, null)));


    }
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionWrapper, { role: "button", tabIndex: 0, className: "action-button", onClick: action.onClick, "data-test": action.label, key: index },
    (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionIcon, null));

  }));

}

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

/***/ 49588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ savedquery_SavedQueryList)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/style/index.js + 5 modules
var style = __webpack_require__(69100);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/connection/SupersetClient.js
var SupersetClient = __webpack_require__(21173);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rison/js/rison.js
var rison = __webpack_require__(15926);
var rison_default = /*#__PURE__*/__webpack_require__.n(rison);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/views/CRUD/utils.tsx
var utils = __webpack_require__(40768);
// EXTERNAL MODULE: ./src/components/Popover/index.tsx
var Popover = __webpack_require__(76697);
// EXTERNAL MODULE: ./src/components/MessageToasts/withToasts.tsx
var withToasts = __webpack_require__(14114);
// EXTERNAL MODULE: ./src/views/CRUD/hooks.ts
var hooks = __webpack_require__(34858);
// EXTERNAL MODULE: ./src/components/ConfirmStatusChange/index.tsx
var ConfirmStatusChange = __webpack_require__(19259);
// EXTERNAL MODULE: ./src/utils/export.ts
var utils_export = __webpack_require__(32228);
// EXTERNAL MODULE: ./src/components/Menu/SubMenu.tsx
var SubMenu = __webpack_require__(62753);
// EXTERNAL MODULE: ./src/components/ListView/index.ts + 11 modules
var ListView = __webpack_require__(9678);
// EXTERNAL MODULE: ./src/components/Loading/index.tsx
var Loading = __webpack_require__(38703);
// EXTERNAL MODULE: ./src/components/DeleteModal/index.tsx
var DeleteModal = __webpack_require__(17198);
// EXTERNAL MODULE: ./src/components/ListView/ActionsBar.tsx
var ActionsBar = __webpack_require__(29848);
// EXTERNAL MODULE: ./src/components/Tooltip/index.tsx
var Tooltip = __webpack_require__(58593);
// EXTERNAL MODULE: ./src/views/CRUD/data/common.ts
var common = __webpack_require__(95413);
// EXTERNAL MODULE: ./src/utils/copy.ts
var copy = __webpack_require__(10222);
// EXTERNAL MODULE: ./src/featureFlags.ts
var featureFlags = __webpack_require__(91877);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var utils_featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./src/components/ImportModal/index.tsx
var ImportModal = __webpack_require__(27989);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 3 modules
var Icons = __webpack_require__(38097);
// EXTERNAL MODULE: ./src/components/Modal/index.ts + 1 modules
var Modal = __webpack_require__(74069);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(35932);
// EXTERNAL MODULE: ./src/views/CRUD/data/components/SyntaxHighlighterCopy/index.tsx
var SyntaxHighlighterCopy = __webpack_require__(31673);
// EXTERNAL MODULE: ./src/views/CRUD/data/hooks.ts
var data_hooks = __webpack_require__(14025);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/views/CRUD/data/savedquery/SavedQueryPreviewModal.tsx
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
  padding: 4px 0 16px 0;
`;
const StyledModal = (0,style/* styled */.iK)(Modal/* default */.Z)`
  .ant-modal-content {
  }

  .ant-modal-body {
    padding: 24px;
  }

  pre {
    font-size: ${({ theme }) => theme.typography.sizes.xs}px;
    font-weight: ${({ theme }) => theme.typography.weights.normal};
    line-height: ${({ theme }) => theme.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`;
const SavedQueryPreviewModal = ({ fetchData, onHide, openInSqlLab, queries, savedQuery, show, addDangerToast, addSuccessToast }) => {
  const { handleKeyPress, handleDataChange, disablePrevious, disableNext } = (0,data_hooks/* useQueryPreviewState */.C)({
    queries,
    currentQueryId: savedQuery.id,
    fetchData });

  return (0,emotion_react_browser_esm.jsx)("div", { role: "none", onKeyUp: handleKeyPress },
  (0,emotion_react_browser_esm.jsx)(StyledModal, { onHide: onHide, show: show, title: (0,TranslatorSingleton.t)('Query preview'), footer: [
    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { "data-test": "previous-saved-query", key: "previous-saved-query", disabled: disablePrevious, onClick: () => handleDataChange(true) },
    (0,TranslatorSingleton.t)('Previous')),

    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { "data-test": "next-saved-query", key: "next-saved-query", disabled: disableNext, onClick: () => handleDataChange(false) },
    (0,TranslatorSingleton.t)('Next')),

    (0,emotion_react_browser_esm.jsx)(Button/* default */.Z, { "data-test": "open-in-sql-lab", key: "open-in-sql-lab", buttonStyle: "primary", onClick: () => openInSqlLab(savedQuery.id) },
    (0,TranslatorSingleton.t)('Open in SQL Lab'))] },


  (0,emotion_react_browser_esm.jsx)(QueryTitle, null, (0,TranslatorSingleton.t)('Query name')),
  (0,emotion_react_browser_esm.jsx)(QueryLabel, null, savedQuery.label),
  (0,emotion_react_browser_esm.jsx)(SyntaxHighlighterCopy/* default */.Z, { language: "sql", addDangerToast: addDangerToast, addSuccessToast: addSuccessToast },
  savedQuery.sql || '')));



};
/* harmony default export */ const savedquery_SavedQueryPreviewModal = ((0,withToasts/* default */.Z)(SavedQueryPreviewModal));
;// CONCATENATED MODULE: ./src/views/CRUD/data/savedquery/SavedQueryList.tsx
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
const PASSWORDS_NEEDED_MESSAGE = (0,TranslatorSingleton.t)('The passwords for the databases below are needed in order to ' +
'import them together with the saved queries. Please note that the ' +
'"Secure Extra" and "Certificate" sections of ' +
'the database configuration are not present in export files, and ' +
'should be added manually after the import if they are needed.');
const CONFIRM_OVERWRITE_MESSAGE = (0,TranslatorSingleton.t)('You are importing one or more saved queries that already exist. ' +
'Overwriting might cause you to lose some of your work. Are you ' +
'sure you want to overwrite?');
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
function SavedQueryList({ addDangerToast, addSuccessToast, user }) {
  const { state: { loading, resourceCount: queryCount, resourceCollection: queries, bulkSelectEnabled }, hasPerm, fetchData, toggleBulkSelect, refreshData } = (0,hooks/* useListViewResource */.Yi)('saved_query', (0,TranslatorSingleton.t)('Saved queries'), addDangerToast);
  const [queryCurrentlyDeleting, setQueryCurrentlyDeleting] = (0,react.useState)(null);
  const [savedQueryCurrentlyPreviewing, setSavedQueryCurrentlyPreviewing] = (0,react.useState)(null);
  const [importingSavedQuery, showImportModal] = (0,react.useState)(false);
  const [passwordFields, setPasswordFields] = (0,react.useState)([]);
  const [preparingExport, setPreparingExport] = (0,react.useState)(false);
  const openSavedQueryImportModal = () => {
    showImportModal(true);
  };
  const closeSavedQueryImportModal = () => {
    showImportModal(false);
  };
  const handleSavedQueryImport = () => {
    showImportModal(false);
    refreshData();
  };
  const canCreate = hasPerm('can_write');
  const canEdit = hasPerm('can_write');
  const canDelete = hasPerm('can_write');
  const canExport = hasPerm('can_read') && (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.VERSIONED_EXPORT */.T.VERSIONED_EXPORT);
  const openNewQuery = () => {
    window.open(`${window.location.origin}/superset/sqllab?new=true`);
  };
  const handleSavedQueryPreview = (0,react.useCallback)((id) => {
    SupersetClient/* default.get */.Z.get({
      endpoint: `/api/v1/saved_query/${id}` }).
    then(({ json = {} }) => {
      setSavedQueryCurrentlyPreviewing({ ...json.result });
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue previewing the selected query %s', errMsg))));
  }, [addDangerToast]);
  const menuData = {
    activeChild: 'Saved queries',
    ...common/* commonMenuData */.Y };

  const subMenuButtons = [];
  if (canDelete) {
    subMenuButtons.push({
      name: (0,TranslatorSingleton.t)('Bulk select'),
      onClick: toggleBulkSelect,
      buttonStyle: 'secondary' });

  }
  subMenuButtons.push({
    name: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
    (0,emotion_react_browser_esm.jsx)("i", { className: "fa fa-plus" }), " ", (0,TranslatorSingleton.t)('Query')),

    onClick: openNewQuery,
    buttonStyle: 'primary' });

  if (canCreate && (0,featureFlags/* isFeatureEnabled */.cr)(utils_featureFlags/* FeatureFlag.VERSIONED_EXPORT */.T.VERSIONED_EXPORT)) {
    subMenuButtons.push({
      name: (0,emotion_react_browser_esm.jsx)(Tooltip/* Tooltip */.u, { id: "import-tooltip", title: (0,TranslatorSingleton.t)('Import queries'), placement: "bottomRight", "data-test": "import-tooltip-test" },
      (0,emotion_react_browser_esm.jsx)(Icons/* default.Import */.Z.Import, { "data-test": "import-icon" })),

      buttonStyle: 'link',
      onClick: openSavedQueryImportModal,
      'data-test': 'import-button' });

  }
  menuData.buttons = subMenuButtons;
  // Action methods
  const openInSqlLab = (id) => {
    window.open(`${window.location.origin}/superset/sqllab?savedQueryId=${id}`);
  };
  const copyQueryLink = (0,react.useCallback)((id) => {
    (0,copy/* default */.Z)(`${window.location.origin}/superset/sqllab?savedQueryId=${id}`).
    then(() => {
      addSuccessToast((0,TranslatorSingleton.t)('Link Copied!'));
    }).
    catch(() => {
      addDangerToast((0,TranslatorSingleton.t)('Sorry, your browser does not support copying.'));
    });
  }, [addDangerToast, addSuccessToast]);
  const handleQueryDelete = ({ id, label }) => {
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/saved_query/${id}` }).
    then(() => {
      refreshData();
      setQueryCurrentlyDeleting(null);
      addSuccessToast((0,TranslatorSingleton.t)('Deleted: %s', label));
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting %s: %s', label, errMsg))));
  };
  const handleBulkSavedQueryExport = (savedQueriesToExport) => {
    const ids = savedQueriesToExport.map(({ id }) => id);
    (0,utils_export/* default */.Z)('saved_query', ids, () => {
      setPreparingExport(false);
    });
    setPreparingExport(true);
  };
  const handleBulkQueryDelete = (queriesToDelete) => {
    SupersetClient/* default.delete */.Z["delete"]({
      endpoint: `/api/v1/saved_query/?q=${rison_default().encode(queriesToDelete.map(({ id }) => id))}` }).
    then(({ json = {} }) => {
      refreshData();
      addSuccessToast(json.message);
    }, (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('There was an issue deleting the selected queries: %s', errMsg))));
  };
  const initialSort = [{ id: 'changed_on_delta_humanized', desc: true }];
  const columns = (0,react.useMemo)(() => [
  {
    accessor: 'label',
    Header: (0,TranslatorSingleton.t)('Name') },

  {
    accessor: 'database.database_name',
    Header: (0,TranslatorSingleton.t)('Database'),
    size: 'xl' },

  {
    accessor: 'database',
    hidden: true,
    disableSortBy: true },

  {
    accessor: 'schema',
    Header: (0,TranslatorSingleton.t)('Schema'),
    size: 'xl' },

  {
    Cell: ({ row: { original: { sql_tables: tables = [] } } }) => {
      const names = tables.map((table) => table.table);
      const main = (names == null ? void 0 : names.shift()) || '';
      if (names.length) {
        return (0,emotion_react_browser_esm.jsx)(StyledTableLabel, null,
        (0,emotion_react_browser_esm.jsx)("span", null, main),
        (0,emotion_react_browser_esm.jsx)(Popover/* default */.Z, { placement: "right", title: (0,TranslatorSingleton.t)('TABLES'), trigger: "click", content: (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
          names.map((name) => (0,emotion_react_browser_esm.jsx)(StyledPopoverItem, { key: name }, name))) },

        (0,emotion_react_browser_esm.jsx)("span", { className: "count" }, "(+", names.length, ")")));


      }
      return main;
    },
    accessor: 'sql_tables',
    Header: (0,TranslatorSingleton.t)('Tables'),
    size: 'xl',
    disableSortBy: true },

  {
    Cell: ({ row: { original: { created_on: createdOn } } }) => {
      const date = new Date(createdOn);
      const utc = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
      return moment_default()(utc).fromNow();
    },
    Header: (0,TranslatorSingleton.t)('Created on'),
    accessor: 'created_on',
    size: 'xl' },

  {
    Cell: ({ row: { original: { changed_on_delta_humanized: changedOn } } }) => changedOn,
    Header: (0,TranslatorSingleton.t)('Modified'),
    accessor: 'changed_on_delta_humanized',
    size: 'xl' },

  {
    Cell: ({ row: { original } }) => {
      const handlePreview = () => {
        handleSavedQueryPreview(original.id);
      };
      const handleEdit = () => openInSqlLab(original.id);
      const handleCopy = () => copyQueryLink(original.id);
      const handleExport = () => handleBulkSavedQueryExport([original]);
      const handleDelete = () => setQueryCurrentlyDeleting(original);
      const actions = [
      {
        label: 'preview-action',
        tooltip: (0,TranslatorSingleton.t)('Query preview'),
        placement: 'bottom',
        icon: 'Binoculars',
        onClick: handlePreview },

      canEdit && {
        label: 'edit-action',
        tooltip: (0,TranslatorSingleton.t)('Edit query'),
        placement: 'bottom',
        icon: 'Edit',
        onClick: handleEdit },

      {
        label: 'copy-action',
        tooltip: (0,TranslatorSingleton.t)('Copy query URL'),
        placement: 'bottom',
        icon: 'Copy',
        onClick: handleCopy },

      canExport && {
        label: 'export-action',
        tooltip: (0,TranslatorSingleton.t)('Export query'),
        placement: 'bottom',
        icon: 'Share',
        onClick: handleExport },

      canDelete && {
        label: 'delete-action',
        tooltip: (0,TranslatorSingleton.t)('Delete query'),
        placement: 'bottom',
        icon: 'Trash',
        onClick: handleDelete }].

      filter((item) => !!item);
      return (0,emotion_react_browser_esm.jsx)(ActionsBar/* default */.Z, { actions: actions });
    },
    Header: (0,TranslatorSingleton.t)('Actions'),
    id: 'actions',
    disableSortBy: true }],

  [canDelete, canEdit, canExport, copyQueryLink, handleSavedQueryPreview]);
  const filters = (0,react.useMemo)(() => [
  {
    Header: (0,TranslatorSingleton.t)('Database'),
    id: 'database',
    input: 'select',
    operator: ListView/* FilterOperator.relationOneMany */.p.relationOneMany,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchRelated */.tm)('saved_query', 'database', (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching dataset datasource values: %s', errMsg)))),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('Schema'),
    id: 'schema',
    input: 'select',
    operator: ListView/* FilterOperator.equals */.p.equals,
    unfilteredLabel: 'All',
    fetchSelects: (0,utils/* createFetchDistinct */.wk)('saved_query', 'schema', (0,utils/* createErrorHandler */.v$)((errMsg) => addDangerToast((0,TranslatorSingleton.t)('An error occurred while fetching schema values: %s', errMsg)))),
    paginate: true },

  {
    Header: (0,TranslatorSingleton.t)('Search'),
    id: 'label',
    input: 'search',
    operator: ListView/* FilterOperator.allText */.p.allText }],

  [addDangerToast]);
  return (0,emotion_react_browser_esm.jsx)(react.Fragment, null,
  (0,emotion_react_browser_esm.jsx)(SubMenu/* default */.Z, menuData),
  queryCurrentlyDeleting && (0,emotion_react_browser_esm.jsx)(DeleteModal/* default */.Z, { description: (0,TranslatorSingleton.t)('This action will permanently delete the saved query.'), onConfirm: () => {
      if (queryCurrentlyDeleting) {
        handleQueryDelete(queryCurrentlyDeleting);
      }
    }, onHide: () => setQueryCurrentlyDeleting(null), open: true, title: (0,TranslatorSingleton.t)('Delete Query?') }),
  savedQueryCurrentlyPreviewing && (0,emotion_react_browser_esm.jsx)(savedquery_SavedQueryPreviewModal, { fetchData: handleSavedQueryPreview, onHide: () => setSavedQueryCurrentlyPreviewing(null), savedQuery: savedQueryCurrentlyPreviewing, queries: queries, openInSqlLab: openInSqlLab, show: true }),
  (0,emotion_react_browser_esm.jsx)(ConfirmStatusChange/* default */.Z, { title: (0,TranslatorSingleton.t)('Please confirm'), description: (0,TranslatorSingleton.t)('Are you sure you want to delete the selected queries?'), onConfirm: handleBulkQueryDelete },
  (confirmDelete) => {
    const bulkActions = [];
    if (canDelete) {
      bulkActions.push({
        key: 'delete',
        name: (0,TranslatorSingleton.t)('Delete'),
        onSelect: confirmDelete,
        type: 'danger' });

    }
    if (canExport) {
      bulkActions.push({
        key: 'export',
        name: (0,TranslatorSingleton.t)('Export'),
        type: 'primary',
        onSelect: handleBulkSavedQueryExport });

    }
    return (0,emotion_react_browser_esm.jsx)(ListView/* default */.Z, { className: "saved_query-list-view", columns: columns, count: queryCount, data: queries, fetchData: fetchData, filters: filters, initialSort: initialSort, loading: loading, pageSize: PAGE_SIZE, bulkActions: bulkActions, bulkSelectEnabled: bulkSelectEnabled, disableBulkSelect: toggleBulkSelect, highlightRowId: savedQueryCurrentlyPreviewing == null ? void 0 : savedQueryCurrentlyPreviewing.id });
  }),


  (0,emotion_react_browser_esm.jsx)(ImportModal/* default */.Z, { resourceName: "saved_query", resourceLabel: (0,TranslatorSingleton.t)('queries'), passwordsNeededMessage: PASSWORDS_NEEDED_MESSAGE, confirmOverwriteMessage: CONFIRM_OVERWRITE_MESSAGE, addDangerToast: addDangerToast, addSuccessToast: addSuccessToast, onModelImport: handleSavedQueryImport, show: importingSavedQuery, onHide: closeSavedQueryImportModal, passwordFields: passwordFields, setPasswordFields: setPasswordFields }),
  preparingExport && (0,emotion_react_browser_esm.jsx)(Loading/* default */.Z, null));

}
/* harmony default export */ const savedquery_SavedQueryList = ((0,withToasts/* default */.Z)(SavedQueryList));

/***/ })

}]);