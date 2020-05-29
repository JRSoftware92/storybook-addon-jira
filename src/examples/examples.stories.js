import React from 'react';

export const SingleJiraTicket = () => <div>Check your JIRA Addon Panel</div>;
export const MultipleJiraTickets = () => <div>Check your JIRA Addon Panel</div>;

SingleJiraTicket.story = {
  parameters: {
    jiraTickets: ['JRA-9'],
  },
};

MultipleJiraTickets.story = {
  parameters: {
    jiraTickets: ['JRA-9', 'JRA-10', 'JRA-11'],
  },
};

export default {
  title: 'Jira Tickets Addon',
  component: SingleJiraTicket,
};
