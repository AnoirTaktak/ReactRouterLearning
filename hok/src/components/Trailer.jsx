import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const Trailer = ({movie}) => {
  const param =  useParams();
  const mov = movie.find((el) => el.id === Number(param.id));
  return (
    <div>
      <Link to='/'><button>Back to home page</button></Link>
       <h1 style={{color:'white'}}>Trailer</h1> 
       <h2 style={{color:'white'}}>{mov.Description}</h2>
      <iframe title="This is a unique title" width={420} height={315} src={mov.Trailer}>
      </iframe>

    </div>
  )
}

export default Trailer