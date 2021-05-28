import React, { useState } from 'react';
import style from '../button.module.css';

export type ToggleBtnPropsType = {
  onLamp: boolean
  setOnLamp: (value: boolean) => void
}
export type BtnPropsType = {
  openToggle: boolean
  setOpenToggle: (value: boolean) => void
  onLamp: boolean
  setOnLamp: (value: boolean) => void
}


export function BtnClick(props: BtnPropsType) {
  const onClickOpen = () => props.openToggle === false ? props.setOpenToggle(true) : props.setOpenToggle(false)
  return (
    <div className="wrapper" >
      <button
        className='btn'
        onClick={onClickOpen}>
        Toggle Open
      </button>
      { !props.openToggle && <ToggleBtn onLamp={props.onLamp} setOnLamp={props.setOnLamp} />}
    </div >
  )
}

export function ToggleBtn(props: ToggleBtnPropsType) {
  const OnStyle = { background: props.onLamp ? 'green' : 'white' }
  const OffStyle = { background: props.onLamp ? 'white' : 'red' }
  const CircleStyle = { background: props.onLamp ? 'green' : 'red' }
  const onClickOn = () => props.setOnLamp(true)
  const onClickOff = () => props.setOnLamp(false)
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Toggle lamp</h3>
      <div className={style.inner}>
        <div
          className={style.on}
          style={OnStyle}
          onClick={onClickOn}>On</div>
        <div
          className={style.off}
          style={OffStyle}
          onClick={onClickOff}>Off</div>
        <div
          className={style.lamp}
          style={CircleStyle}>
        </div>
      </div>
    </div >
  )
}
