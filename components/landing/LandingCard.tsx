type LandingCardProps = {
  title: string,
  description: string
}

const LandingCard = ({ title, description }: LandingCardProps) => {
  return (
    <div className="card w-72 border-tertiaryLight border-solid border-2 rounded-3xl bg-tertiaryDark hover:bg-tertiary text-white m-7 px-1">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{ title } &rarr;</h2>
        <p>{ description }</p>
      </div>
    </div>
  )
}

export default LandingCard