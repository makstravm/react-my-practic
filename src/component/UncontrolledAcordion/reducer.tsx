import { type } from 'os';
import React, { useReducer, useState } from 'react';
import style from '../button.module.css';


export type ActionType = {
  type: string
}
export type StateType ={
  collapsed: boolean
}

export const TOGGLE__CONSTANT = "TOGGLE_COLLAPSED"


export const reducer = (state: StateType, action: ActionType):StateType => {
  switch (action.type) {
    case TOGGLE__CONSTANT:
      return {
        ...state,
        collapsed: !state.collapsed
            }
    default :
      throw new Error('Bad action type')
  }
  return state;
}
