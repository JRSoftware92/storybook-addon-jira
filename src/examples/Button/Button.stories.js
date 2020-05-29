import React from 'react';

import Button from './Button';

export default {
  title: 'Examples/Button',
  component: Button,
};

export const SimpleButton = () => <Button label="My Button" />;

SimpleButton.story = {
  parameters: {
    jiraTickets: ['JRA-9'],
  },
};
