import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Select, SelectPropsItemType } from './Select';


const asdCallback = action('asdCallback fired')


export default {
  title: 'Select',
  component: Select
} as Meta;


const Template: Story<SelectPropsItemType> = (args) => <Select
  {...args} />;


// const value = action(0)
export const SelectOne = Template.bind({});
SelectOne.args = {
  onChange: asdCallback,
  value: 2,
  items: [
    { value: 1, title: 'Kharkov' },
    { value: 2, title: 'Kiev' },
    { value: 3, title: 'Dnipro' }
  ]
}



export const SelectTwo = () => {
  const [value, setValue] = useState(null)
  return < Select
    onChange={setValue}
    value={value}
    items={[
      { value: '1', title: 'Kharkov' },
      { value: '2', title: 'Kiev' },
      { value: '3', title: 'Dnipro' }
    ]}
  />;
}
