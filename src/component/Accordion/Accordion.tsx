export type ItemsType = {
  title: string
  value: any
}

export type AccordionPropsType = {
  titleValue: string
  setCollapsed: (value: boolean) => void
  collapsed: boolean
  items: ItemsType[]
  onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed} />
      {!props.collapsed && <AccordionBody items={props.items}
        onClick={props.onClick} />}
    </div>
  )
}

type AccordionTiltePropsType = {
  title: string
  setCollapsed: (value: boolean) => void
  collapsed: boolean
}

function AccordionTitle(props: AccordionTiltePropsType) {
  return (
    <h4 onClick={() => { props.setCollapsed(!props.collapsed) }}>---{props.title}---</h4>
  )
}
type AccordionBodyPropsType = {
  items: ItemsType[]
  onClick: (value: any) => void

}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((i, index) => <li key={index} onClick={() => props.onClick(i.value)}>{i.title}</li>)
      }
    </ul >
  )
}