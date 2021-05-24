

type AccordionPropsType = {
  titleValue: string
  setCollapsed: (value: boolean) => void
  collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed} />
      {!props.collapsed && <AccordionBody />}
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
    <h4 onClick={() => { props.setCollapsed(!props.collapsed)}}>---{props.title}---</h4>
  )
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}