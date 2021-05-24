import React, { useState } from 'react';
import style from '../button.module.css';

type ToggleBtnPropsType = {
  text: string
  // on: boolean

}
const task = {
  text: 'Toggle lamp'
}
function ToggleBtn(props: ToggleBtnPropsType) {

  const [on, setOn] = useState(false);

  const OnStyle = {
    background: on ? 'green' : 'white'
  }
  const OffStyle = {
    background: on ? 'white' : 'red'
  }
  const CircleStyle = {
    background: on ? 'green' : 'red'
  }
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>{props.text}</h3>
      <div className={style.inner}>
        <div
          className={style.on}
          style={OnStyle}
          onClick={() => { setOn(true) }}>On</div>
        <div
          className={style.off}
          style={OffStyle}
          onClick={() => { setOn(false) }}>Off</div>
        <div
          className={style.lamp}
          style={CircleStyle}>

        </div>
      </div>
    </div >
  )
}

export function UncontrolledBtnClick() {

  const [open, setOpen] = useState(true);
  return (
    <div className="wrapper" >
      <button
        className='btn'
        onClick={() => open === false ? setOpen(true) : setOpen(false)}>
        Toggle Open
      </button>
      { !open && <ToggleBtn text={task.text} />}
    </div >
  )

}