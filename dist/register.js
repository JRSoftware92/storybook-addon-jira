"use strict";

var _react = _interopRequireDefault(require("react"));

var _addons = require("@storybook/addons");

var _constants = require("./constants");

var _panel = _interopRequireDefault(require("./panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_addons.addons.register(_constants.ADDON_ID, function (api) {
  _addons.addons.add(_constants.PANEL_ID, {
    type: _addons.types.PANEL,
    title: _constants.ADDON_TITLE,
    paramKey: _constants.JIRA_KEY,
    render: function render(_ref) {
      var active = _ref.active,
          key = _ref.key;
      return /*#__PURE__*/_react.default.createElement(_panel.default, {
        active: active,
        api: api,
        key: key
      });
    }
  });
});