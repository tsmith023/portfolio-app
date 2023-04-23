interface StackedCardProps {
  visible: boolean,
  // onClick: React.MouseEventHandler<HTMLDivElement>,
  text: string
}

const Stanza: React.FC<StackedCardProps> = (props: StackedCardProps): React.ReactElement => {
  const onClick = () => {
    window.open("https://glaemscrafu.jrrvf.com")
  }
  return (
    <div
      className={`
        card w-8/12 h-1/4 bg-primary
        cursor-pointer btn btn-primary
        text-center text-2xl m-auto
      `}
      onClick={onClick}
    >
      <div className={`
        card-body normal-case p-12
      `}>{ props.text }</div>
    </div>
  )
}

export default Stanza