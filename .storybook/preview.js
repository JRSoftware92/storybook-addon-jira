import { addDecorator } from '@storybook/react';
import { withJira } from '../src';

addDecorator(withJira({
  jiraSite: 'jira.atlassian.com'
}));
