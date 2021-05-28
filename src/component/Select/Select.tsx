import React, { useEffect, useState } from 'react'
import s from './Select.module.css'
type ItemType = {
  title: string
  value?: any
}


export type SelectPropsItemType = {
  value: any
  onChange: (value: any) => void
  items: ItemType[]
}

export function Select(props: SelectPropsItemType) {
  const [active, setActive] = useState(false)
  const [hoveredElement, setHoveredElement] = useState(props.value)
  useEffect(() => {
    setHoveredElement(props.value)
  }, [props.value])


  const selectedItem = props.items.find(i => i.value === props.value)
  const hoveredItem = props.items.find(i => i.value === hoveredElement)
  const toggleItems = () => setActive(!active)
  const onItemClick = (value: any) => {
    props.onChange(value)
    toggleItems()
  }

  const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let index = 0; index < props.items.length; index++) {
        if (hoveredElement === props.items[index].value) {
          const pretendentElement = e.key === 'ArrowDown' ? props.items[index + 1] : props.items[index - 1]
          if (pretendentElement) {
            props.onChange(pretendentElement.value)
            return
          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value)
      }
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(!active)
    }
  }
  return (
    <div>
      <div
        tabIndex={0}
        className={s.select + ' ' + (active ? s.active : '')}
        onKeyUp={onKeyUp}
        onClick={toggleItems}>
        {selectedItem && selectedItem.title}
        {active && <div className={s.items}>
          {props.items.map(i => <div
            key={i.value}
            className={s.item + ' ' + (hoveredItem === i ? s.active : '')}
            onMouseEnter={() => setHoveredElement(i.value)}
            onClick={() => { onItemClick(i.value) }}
          >
            {i.title}
          </div>
          )}
        </div>}
      </div>
    </div >
  )
}