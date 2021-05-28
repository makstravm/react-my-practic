import React from 'react';

import { Meta, Story } from '@storybook/react';
import { BtnClick, BtnPropsType } from './Button';

export default {
  title: 'Example/BtnClick',
  component: BtnClick,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
//👇 We create a “template” of how args map to rendering



const Template: Story<BtnPropsType> = (args) => <BtnClick {...args} />;

export const BtnClickOffoff = Template.bind({});
BtnClickOffoff.args = {
  openToggle: false,
  onLamp: false,
};

export const BtnClickOnOn = Template.bind({});
BtnClickOffoff.args = {
  openToggle: true,
  onLamp: true,
};
export const BtnClickOnOff = Template.bind({});
BtnClickOnOff.args = {
  onLamp: true,
};