import React, { useState } from 'react';
import './App.css';
import { Accordion } from './component/Accordion/Accordion';
import { BtnClick } from './component/Button/Button';
import { Rating, RatingValueType } from './component/Rating/Rating';
import { UnconrolledReiting } from './component/UnconrolledReiting/UnconrolledReiting';
import { UncontrolledAcordion } from './component/UncontrolledAcordion/UncontrolledAcordion';
import { UncontrolledBtnClick } from './component/UncontrolledButton/UncontrolledButton';





function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(3)
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [on, setOn] = useState(false);
  const [open, setOpen] = useState(true);
  return (
    <div>
      <BtnClick
        openToggle={open}
        setOpenToggle={setOpen}
        onLamp={on}
        setOnLamp={setOn}
      />
      <div><hr /></div>
      <UncontrolledBtnClick />
      <div><hr /></div>
      <div><hr /></div>
      <UncontrolledAcordion
        title='Accordion' />
      <div><hr /></div>
      <Accordion
        titleValue={'Menu'}
        collapsed={collapsed}
        setCollapsed={setCollapsed} />
      <div><hr /></div>
      <div><hr /></div>
      <Rating
        value={ratingValue}
        onCLick={setRatingValue} />
      <div><hr /></div>
      <UnconrolledReiting />


    </div>

  )
}

export default App;
