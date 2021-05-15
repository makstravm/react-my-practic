import React, { useState } from 'react';
import './App.css';
import { BtnClick } from './component/Button'
import { StarLink, UncontrolledAcordion } from './component/UncontrolledAcordion';



function App() {
  return (
    <div>
      <BtnClick />
      <UncontrolledAcordion text='Accordion' />
      <StarLink />
    
       
       
    </div>

  )
}

export default App;
