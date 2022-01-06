"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./modal.css");

var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
      closeModal = _ref.closeModal,
      content = _ref.content;

  if (!isOpen) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: closeModal
  }, "X"), content));
};

var _default = Modal;
exports.default = _default;