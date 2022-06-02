import type { NextPage } from 'next'
import { LandingCard, LandingHeader, WrappingLink } from '../components/landing'

const Home: NextPage = () => {
  return (
    <div className="w-2/5">
      <LandingHeader content="TBSmith" />
      <div className="divider"/>
      <div className="display flex flex-wrap justify-center items-center">
        <WrappingLink to="/brainpool">
          <LandingCard
            title="Brainpool AI"
            description="Find out about the projects I've been involved in at an AI consultancy start-up"
          />
        </WrappingLink>
        <WrappingLink to="/personal">
          <LandingCard
            title="Part-time Projects"
            description="Explore some solutions that I've been developing in my spare time"
          />
        </WrappingLink>
        <WrappingLink to="/physics">
          <LandingCard
            title="Pretty Physics"
            description={`Discover some "cool" insights from a former theoretical physicist`}
          />
        </WrappingLink>
        <WrappingLink to="/ramblings">
          <LandingCard
            title="Inane Ramblings"
            description={`Subject yourself to random discussions on various "interesting" topics`}
          />
        </WrappingLink>
      </div>
    </div>
  )
}

export default Home
