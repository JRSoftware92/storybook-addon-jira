import React, { Component as ReactComponent } from 'react';
import { STORY_CHANGED } from '@storybook/core-events';

import { ADD_JIRA_TICKETS } from '../constants';

const provideJira = (Component) => class TestProvider extends ReactComponent {
  state = {};

  static defaultProps = {
    active: false,
  };

  componentDidMount() {
    this.mounted = true;
    const { api } = this.props;

    this.stopListeningOnStory = api.on(STORY_CHANGED, () => {
      const { kind, storyName, jiraData } = this.state;
      if (this.mounted && (kind || storyName || jiraData)) {
        this.onAddJiraTickets({});
      }
    });

    api.on(ADD_JIRA_TICKETS, this.onAddJiraTickets);
  }

  componentWillUnmount() {
    this.mounted = false;
    const { api } = this.props;

    this.stopListeningOnStory();
    api.off(ADD_JIRA_TICKETS, this.onAddJiraTickets);
  }

  onAddJiraTickets = ({ kind, storyName, jiraData }) => {
    this.setState({ kind, storyName, jiraData });
  };

  render() {
    const { active } = this.props;
    const { jiraData } = this.state;

    return active ? <Component jiraData={jiraData} /> : null;
  }
};

export default provideJira;