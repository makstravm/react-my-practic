
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
  value: RatingValueType
  onCLick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
  return (
    <div >
      <Star selected={props.value > 0} onCLick={props.onCLick} value={1} />
      <Star selected={props.value > 1} onCLick={props.onCLick} value={2} />
      <Star selected={props.value > 2} onCLick={props.onCLick} value={3} />
      <Star selected={props.value > 3} onCLick={props.onCLick} value={4} />
      <Star selected={props.value > 4} onCLick={props.onCLick} value={5} />
    </div>
  )
}

type StarPropstype = {
  selected: boolean
  onCLick: (value: RatingValueType) => void
  value: RatingValueType
}

function Star(props: StarPropstype) {
  return <span onClick={() => props.onCLick(props.value)}>{props.selected ? <b>Star</b> : 'Star'}</span>
}