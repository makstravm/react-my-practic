import { type } from 'os';
import React, { useReducer, useState } from 'react';
import style from '../button.module.css';
import { reducer, TOGGLE__CONSTANT } from './reducer';

type AcordionPropsType = {
  title: string

}


export function UncontrolledAcordion(props: AcordionPropsType) {

  // const [collapse, setCollapse] = useState(true)
  const [state, dispatch] = useReducer(reducer, {collapsed : false})

  return (
    <div className={style.wrapper}>
      {/* <AcordionTitle title={props.title} onClick={() => { setCollapse(!collapse) }} /> */}
      <AcordionTitle title={props.title} onClick={() => { dispatch({ type:TOGGLE__CONSTANT}) }} />

      {!state.collapsed && <AcordionBody />}
    </div >
  )
}

type AcordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AcordionTitle(props: AcordionTitlePropsType) {
  return <div onClick={() => { props.onClick() }}>--- {props.title} ---</div>
}
function AcordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  )
}
