exports.ids = ["home"];
exports.modules = {

/***/ "./pages/Home.jsx":
/*!************************!*\
  !*** ./pages/Home.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.scss */ \"./pages/home.scss\");\n/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    this.handleClick = () => {\n      this.setState({\n        index: this.state.index + 1\n      });\n    };\n\n    this.handleJump = () => {\n      this.props.history.push('/page/list');\n    };\n\n    let staticContext = props.staticContext;\n\n    if (!staticContext) {\n      staticContext = window.__ROUTE_DATA__;\n    }\n\n    const {\n      text,\n      data\n    } = staticContext;\n    this.state = {\n      index: 0,\n      text,\n      data\n    };\n  }\n\n  componentDidMount() {\n    console.log('home page didmount');\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"home_container\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"name: \", this.state.data && this.state.data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: this.handleClick\n    }, \"click me add one\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"num: \", this.state.index), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"text: \", this.state.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: this.handleJump\n    }, \"click me jump to list page\"));\n  }\n\n});\n\n//# sourceURL=webpack:///./pages/Home.jsx?");

/***/ }),

/***/ "./pages/home.scss":
/*!*************************!*\
  !*** ./pages/home.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pages/home.scss?");

/***/ })

};;