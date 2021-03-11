import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { App, AppProps } from '../components/app';

export default {
  title: 'Example/App',
  component: App,
  argTypes: {
    initialMenus: { control: 'number of initial menus' },
  },
} as Meta

const Template: Story<AppProps> = (args) => <App {...args} />;

export const Sample = Template.bind({});

Sample.args = {
  initialMenus: 5,
};
