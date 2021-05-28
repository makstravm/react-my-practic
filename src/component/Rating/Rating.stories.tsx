import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Rating, RatingPropsType, RatingValueType } from './Rating';

const asdCallback = action('asdCallback fired')


export default {
  title: 'Rating stories',
  component: Rating
} as Meta;

const initArgs =  {
  onCLick: asdCallback,
  value: undefined
};

const Template: Story<RatingPropsType> = (args) => <Rating 
{...{...initArgs, ...args}} />;


// const value = action(0)
export const EmtyRating = Template.bind({});

export const Rating1 = Template.bind({});
Rating1.args = {value: 1}
export const Rating2 = Template.bind({});
Rating2.args = {value: 2}
export const Rating3 = Template.bind({});
Rating3.args = {value: 3}
export const Rating4 = Template.bind({});
Rating4.args = {value: 4}
export const Rating5 = Template.bind({});
Rating5.args = {value: 5}
export const RatingChang = () => {
  const [rating, setRating] = useState<RatingValueType>(5)
  return <Rating value={rating} onCLick={setRating} />
}