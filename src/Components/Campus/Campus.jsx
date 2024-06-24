import React from 'react';
import './Campus.css';
import { useNavigate } from 'react-router-dom';
import gallery1Image from '../../assets/gallery-1.png';
import gallery2Image from '../../assets/gallery-2.png';
import gallery3Image from '../../assets/gallery-3.png';
import gallery4Image from '../../assets/gallery-4.png';
import whiteArrowImage from '../../assets/white-arrow.png';

const Campus = () => {
  const navigate = useNavigate();
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery1Image} alt="" />
            <img src={gallery2Image} alt="" />
            <img src={gallery3Image} alt="" />
            <img src={gallery4Image} alt="" />
        </div>

        <button onClick={() => navigate('/gallery')} className='btn dark-btn'> See more here <img src={whiteArrowImage} alt="" className='white-arrow' /></button>
      
    </div>
  );
}

export default Campus;
