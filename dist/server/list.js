exports.ids = ["list"];
exports.modules = {

/***/ "./pages/List.jsx":
/*!************************!*\
  !*** ./pages/List.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _list_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.scss */ \"./pages/list.scss\");\n/* harmony import */ var _list_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_list_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    this.handleClick = () => {\n      this.setState({\n        index: this.state.index + 1\n      });\n    };\n\n    this.handleJump = () => {\n      this.props.history.goBack();\n    };\n\n    this.state = {\n      index: 0\n    };\n  }\n\n  componentDidMount() {\n    console.log('list page didmount');\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"list_container\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"List Page\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"name: \", this.props.data && this.props.data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: this.handleClick\n    }, \"click me add one\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"num: \", this.state.index), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: this.handleJump\n    }, \"click me back to home page\"));\n  }\n\n});\n\n//# sourceURL=webpack:///./pages/List.jsx?");

/***/ }),

/***/ "./pages/list.scss":
/*!*************************!*\
  !*** ./pages/list.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pages/list.scss?");

/***/ })

};;