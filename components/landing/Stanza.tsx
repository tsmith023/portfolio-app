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
        card w-192 h-20 bg-primary py-10
        cursor-pointer btn btn-primary
        text-center text-2xl
      `}
      onClick={onClick}
    >
      <div className={`
        card-body normal-case
      `}>{ props.text }</div>
    </div>
  )
}

export default Stanza