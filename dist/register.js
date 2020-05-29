import React from 'react';
import { addons, types } from '@storybook/addons';
import { JIRA_KEY, ADDON_ID, ADDON_TITLE, PANEL_ID } from './constants';
import CoveragePanel from './panel';
addons.register(ADDON_ID, function (api) {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: ADDON_TITLE,
    paramKey: JIRA_KEY,
    render: function render(_ref) {
      var active = _ref.active,
          key = _ref.key;
      return /*#__PURE__*/React.createElement(CoveragePanel, {
        active: active,
        api: api,
        key: key
      });
    }
  });
});