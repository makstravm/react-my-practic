import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Accordion, AccordionPropsType } from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
} as Meta;
//👇 We create a “template” of how args map to rendering

const callback = action('accordion action changr event fired')
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const AccordionOn = Template.bind({});
AccordionOn.args = {
  titleValue: 'Menu 1',
  collapsed: true,
  setCollapsed: callback,
  items: [{ title: 'Max', value: 1 },
  { title: 'Kate', value: 2 },
  { title: 'Rada', value: 3 },
  { title: 'Loli', value: 4 }],
  onClick: onClickCallback

};
export const AccordionOff = Template.bind({});
AccordionOff.args = {
  titleValue: 'Menu 2',
  collapsed: false,
  setCollapsed: callback,
  items: [{ title: 'Max', value: 1 },
  { title: 'Vova', value: 2 },
  { title: 'John', value: 3 },
  { title: 'Catl', value: 4 }],
  onClick: onClickCallback
}
export const AccordionChange = () => {
  const [accordion, setAccordion] = useState(false)
  return <Accordion titleValue={'Menu 3'} collapsed={accordion} setCollapsed={setAccordion} items={
    [{ title: 'Max', value: 1 },
    { title: 'Vika', value: 2 },
    { title: 'ALex', value: 3 },
    { title: 'Bob', value: 4 }]}
    onClick={value => {alert(`user with ID ${value} should be happy`)}} />
}

