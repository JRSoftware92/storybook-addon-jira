import { addDecorator } from '@storybook/react';
import { withJira } from '../src/addon';

addDecorator(withJira({
  jiraSite: 'jira.atlassian.com'
}));