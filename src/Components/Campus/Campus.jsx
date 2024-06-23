import React from 'react'
import './Campus.css'
import { useNavigate } from 'react-router-dom';

const Campus = () => {
  const navigate = useNavigate();
  return (
    <div className='campus'>
        <div className="gallery">
            <img src="src\assets\gallery-1.JPG" alt="" />
            <img src="src\assets\gallery-2.JPG" alt="" />
            <img src="src\assets\gallery-3.JPG" alt="" />
            <img src="src\assets\gallery-4.JPG" alt="" />
        </div>

        <button onClick={()=>navigate('/gallery')} className='btn dark-btn'> See more here <img src="src\assets\white-arrow.png" alt="" className='white-arrow' /></button>
      
    </div>
  )
}

export default Campus
