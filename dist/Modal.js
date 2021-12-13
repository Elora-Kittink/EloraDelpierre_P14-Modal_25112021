"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    handleModalOpening = _ref.handleModalOpening;

  if (!isOpen) {
    return null;
  }

  return /*#__PURE__*/ _react.default.createElement(
    "div",
    {
      className: "flex-modal",
    },
    /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        className: "modal",
      },
      /*#__PURE__*/ _react.default.createElement(
        "button",
        {
          onClick: handleModalOpening,
        },
        "X"
      ),
      /*#__PURE__*/ _react.default.createElement("p", null, "Employ\xE9 cr\xE9\xE9 !")
    )
  );
};

var _default = Modal;
exports.default = _default;
