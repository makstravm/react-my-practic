import { type } from 'os';
import React, { useState } from 'react';
import style from '../button.module.css';

type AcordionPropsType = {
  title: string

}

export function UncontrolledAcordion(props: AcordionPropsType) {

  const [collapse, setCollapse] = useState(true)

  return (
    <div className={style.wrapper}>
      <AcordionTitle title={props.title} onClick={() => { setCollapse(!collapse) }} />

      { !collapse && <AcordionBody />}
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
