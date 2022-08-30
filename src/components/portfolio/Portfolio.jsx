import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import { FaGithub } from 'react-icons/fa'
import { GrDeploy} from 'react-icons/gr'

// SIX OF MY PROJECTS.....

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Weather Dashboard',
    github: 'https://github.com/stellalph/WEATHER-DASHBOARD.git',
    demo: 'https://stellalph.github.io/WEATHER-DASHBOARD/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'SKLHub',
    github: 'https://github.com/stellalph/sklhub.git',
    demo: 'https://warm-citadel-17427.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Travel Planner',
    github: 'https://chardige.github.io/Travel-planner/',
    demo: 'https://github.com/CharDige/Travel-planner.git'
  },
  {
    id: 4,
    image: IMG4,
    title: 'MERN Ski Resort',
    github: 'https://github.com/stellalph/MERN-Ski-Resort.git',
    demo: 'https://still-harbor-63486.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Note Taker',
    github: 'https://github.com/stellalph/EJS-NOTE-TAKER',
    demo: 'https://note-taker-app-stella.herokuapp.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'MERN Book Search Engine',
    github: 'https://github.com/stellalph/21-MERN-Book-Search-Engine.git',
    demo: 'https://protected-brushlands-99995.herokuapp.com/'
  },
 

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Check out some of my projects....</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'rel="noopener noreferrer" ><FaGithub/>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer"><GrDeploy/>Deployed Link</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}
export default Portfolio