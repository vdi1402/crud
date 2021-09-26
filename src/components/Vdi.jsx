import React, { useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './vdi.css'
function Vdi() {
    useEffect(() => {
        Aos.init({duration:3000});
    
        
    }, [])
    return (
        <div className="vdi">

           
            <h2 data-Aos="fade-up">It may not be easy to confess but the happiness that you get after making a confession is a bliss </h2>

            <h3 data-aos="zoom-in-up">let your feelings out Today!</h3>
   

        </div>
    )
}

export default Vdi
