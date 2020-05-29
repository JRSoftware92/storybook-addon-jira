import _classCallCheck from "/Users/jriley/Workspace/@storybook/addon-jira/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/jriley/Workspace/@storybook/addon-jira/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/jriley/Workspace/@storybook/addon-jira/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/jriley/Workspace/@storybook/addon-jira/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import React, { Component as ReactComponent } from 'react';
import { STORY_CHANGED } from '@storybook/core-events';
import { ADD_JIRA_TICKETS } from '../constants';

var provideJira = function provideJira(Component) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_ReactComponent) {
    _inherits(TestProvider, _ReactComponent);

    var _super = _createSuper(TestProvider);

    function TestProvider() {
      var _this;

      _classCallCheck(this, TestProvider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.state = {};

      _this.onAddJiraTickets = function (_ref) {
        var kind = _ref.kind,
            storyName = _ref.storyName,
            jiraData = _ref.jiraData;

        _this.setState({
          kind: kind,
          storyName: storyName,
          jiraData: jiraData
        });
      };

      return _this;
    }

    _createClass(TestProvider, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.mounted = true;
        var api = this.props.api;
        this.stopListeningOnStory = api.on(STORY_CHANGED, function () {
          var _this2$state = _this2.state,
              kind = _this2$state.kind,
              storyName = _this2$state.storyName,
              jiraData = _this2$state.jiraData;

          if (_this2.mounted && (kind || storyName || jiraData)) {
            _this2.onAddJiraTickets({});
          }
        });
        api.on(ADD_JIRA_TICKETS, this.onAddJiraTickets);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
        var api = this.props.api;
        this.stopListeningOnStory();
        api.off(ADD_JIRA_TICKETS, this.onAddJiraTickets);
      }
    }, {
      key: "render",
      value: function render() {
        var active = this.props.active;
        var jiraData = this.state.jiraData;
        return active ? /*#__PURE__*/React.createElement(Component, {
          jiraData: jiraData
        }) : null;
      }
    }]);

    return TestProvider;
  }(ReactComponent), _class.defaultProps = {
    active: false
  }, _temp;
};

export default provideJira;