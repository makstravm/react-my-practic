import { type } from 'os';
import React, { useState } from 'react';
import style from '../button.module.css';


type StarRating = {
}

export function UnconrolledReiting(props: StarRating) {
  const [value, setValue] = useState(1)
  return (
    <div>
      <Star selected={value > 0} setValue={setValue} value = {1}/>
      <Star selected={value > 1} setValue={setValue} value = {2}/>
      <Star selected={value > 2} setValue={setValue} value = {3}/>
      <Star selected={value > 3} setValue={setValue} value = {4}/>
      <Star selected={value > 4} setValue={setValue} value = {5}/>
    </div >
  )
}
type StarType = {
  selected: boolean
  value: 1 | 2 | 3 | 4 | 5
  setValue: (value: 1 | 2 | 3 | 4 | 5) => void

}
function Star(props: StarType) {
  return <span onClick={() => { props.setValue(props.value) }}
  > {props.selected === true ? <b>Star</b> : 'Star'}</span>
}

