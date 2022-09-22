import { TechProps } from './types'
import atIcon from '../../assets/images/atcounselling.png'
import bpIcon from '../../assets/images/brainpool.png'
import cfIcon from '../../assets/images/carbonfixers.png'
import sxIcon from '../../assets/images/stox.png'
import sgIcon from '../../assets/images/strawberry-gql.png'

export const cards = [
  {
    body: ' \
      Become an investing expert by actively managing your portfolio through actionable insights generated from data-driven calculations and recommendations.\n \
      Understand the holdings in your portfolio at the granular level through traditional statistical methods and discover your own investment style through \
      AI recommendation strategies based on your fundamental personality. \
    ',
    img: sxIcon,
    techs: new Array<TechProps>(
      {
        name: 'React',
        url: 'https://reactjs.org'
      },
      {
        name: 'Apollo-GQL',
        url: 'https://www.apollographql.com'
      },
      {
        name: 'Strawberry-GQL', 
        url: 'https://strawberry.rocks'
      },
      {
        name: 'FastAPI',
        url: 'https://fastapi.tiangolo.com'
      },
      {
        name: 'MongoDB',
        url: 'https://mongodb.com'
      },
      {
        name: 'Go',
        url: 'https://go.dev'
      }
    ),
    title: 'StoX',
    subtitle: 'An investment portfolio management SaaS platform',
    url: 'https://mystox.io',
    whoWith: {
      title: 'Freelance',
      body: `
        This personal project developed out of the use of complex spreadsheets for active portfolio management.
        I work on it in my free-time when I can with the co-founder and fellow developers.
      `,
    },
  },
  {
    body: ' \
      Brainpool AI is a consultancy firm specialising in value-add for all sizes of \
      companies seeking to increase productivity by automating time-consuming processes. \n \
      As a consultancy, in the absence of in-house expertise, we leverage the pool to deliver on client requirements. However, \
      we also develop solutions ourselves and I have been lucky to work on recommendation systems, sentiment analysers, \
      and demand forecasters. \
    ',
    img: bpIcon,
    techs: new Array<TechProps>(
      {
        name: 'Docker',
        url: 'https://www.docker.com'
      },
      {
        name: 'k8s',
        url: 'https://kubernetes.io'
      },
      {
        name: 'Knowledge Graphs', 
        url: 'https://en.wikipedia.org/wiki/Knowledge_graph'
      },
      {
        name: 'Sentiment Analysis',
        url: 'https://en.wikipedia.org/wiki/Sentiment_analysis'
      },
      {
        name: 'Demand Forecasting',
        url: 'https://en.wikipedia.org/wiki/Demand_forecasting'
      },
    ),
    title: 'Brainpool AI',
    subtitle: 'A network of 500+ data scientists and AI experts',
    url: 'https://brainpool.ai',
    whoWith: {
      title: 'Employed',
      body: ' \
        Working for Brainpool is my current primary employment. During my time in this role, I have developed my engineering skills \
        by writing professional standard code while learning about the many different applications of ML and AI in industrial environments. \
      ',
    }
  },
  {
    body: ' \
      Gain a deeper understanding of the carbon emissions implications of choosing concrete & steel over timber in architectural designs. \n \
      Using our expert-curated catalogue of ready-built building assemblies, model the carbon emissions of your early-stage architectural designs at a high-level to \
      avoid the pitfalls of committing to polluting concrete & steel before any lifecycle analysis has been conducted. \
    ',
    img: cfIcon,
    techs: new Array<TechProps>(
      {
        name: 'React',
        url: 'https://reactjs.org'
      },
      {
        name: 'Apollo-GQL',
        url: 'https://www.apollographql.com'
      },
      {
        name: 'Strawberry-GQL', 
        url: 'https://strawberry.rocks'
      },
      {
        name: 'FastAPI',
        url: 'https://fastapi.tiangolo.com'
      },
      {
        name: 'MongoDB',
        url: 'https://mongodb.com'
      },
      {
        name: 'Speckle',
        url: 'https://speckle.systems/'
      },
    ),
    title: 'Carbon Fixers',
    subtitle: 'A SaaS platform for cradle-to-gate carbon emissions estimation of early-stage architectural designs',
    url: 'https://carbonfixers.org',
    whoWith: {
      title: 'Employed',
      body: ' \
        Working on this project has been a key part of my employment at Brainpool. I am involved in all aspects of the stack as one of \
        two developers while managing the overal project as the senior member. My main contribution is the data aggregation pipeline, however. \
      ',
    }
  },
  {
    body: "\
      With GraphQL's origins in Javascript, its development within other languages like Python remains in its infancy. \n \
      There exists Ariadne, which is an async schema-first library, and Graphene, which is a sync code-first library with a strong Django integration. \n \
      Strawberry, on the other hand, is an async code-first library that aims to supply GraphQL functionality to APIs deployed as microservices.  \
    ",
    img: sgIcon,
    techs: new Array<TechProps>(
      {
        name: 'Poetry',
        url: 'https://python-poetry.org'
      },
      {
        name: 'my[py]',
        url: 'https://mypy.readthedocs.io/en/stable'
      },
    ),
    title: 'Strawberry-GraphQL',
    subtitle: 'An open-source Python code-first GraphQL API technology',
    url: 'https://strawberry.rocks',
    whoWith: {
      title: 'Contributor',
      body: ' \
        When I have the time, provided I also have the knowledge and ability, I help the project by responding to issues with bug fixes and feature requests. \
        Through this, I further develop my collaborative skill and gain a deeper understanding of Gitflow through PR contributions. \
      ',
    }
  },
  // {
  //   body: 'Remote Psychotherapy Services',
  //   img: atIcon,
  //   techs: new Array<TechProps>(
  //     {
  //       name: 'Next',
  //       url: 'https://nextjs.org'
  //     },
  //     {
  //       name: 'Tailwind',
  //       url: 'https://tailwindcss.com'
  //     },
  //     {
  //       name: 'Daisy UI',
  //       url: 'https://daisyui.com'
  //     },
  //   ),
  //   title: 'AT Counselling Services',
  //   subtitle: 'A portfolio website for professional therapy services',
  //   url: 'https://atcounselling.services',
  //   whoWith: {
  //     title: 'Freelance',
  //     body: '',
  //   }
  // },
]