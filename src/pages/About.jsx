import {FaGithub} from 'react-icons/fa'

function About() {
  return (
    <div className="hero">
      <div className="hero-content flex-col">
      <h1 className="text-3xl text-center mb-3">A React App which helps in searching for Github Users and seeing their profiles.</h1>
      <p className="text-center">Made By: <span className="font-bold text-lg">Mohammad Aman</span></p>
      <a href="https://github.com/AMANmohd1" className='btn btn-outline'><FaGithub className='inline mr-2'/>Github</a>
      </div>
      
    </div>
  )
}

export default About