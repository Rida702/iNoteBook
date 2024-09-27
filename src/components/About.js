import React, {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
const About = () => {
  const a = useContext(noteContext);
  useEffect(()=>{
    a.update()
    // eslint-disable-next-line 
  }, []);
  return (
    //state. is the state that we created using useEffect
    <div  style={{ marginTop: '56px' }} >
      This is About {a.state.name} and he is in class {a.state.class}
    </div>
  )
}

export default About
