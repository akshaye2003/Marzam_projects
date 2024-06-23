import React, { useRef } from 'react'
import './Testimonials.css'

const Testimonials = () => {

    const slider = useRef();

    let tx = 0;

    const slideForward = ()=> {

        if (tx > -50 ){
            tx -=25;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=> {

        if (tx < 0 ){
            tx += 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
        
    }

  return (
    <div className='testimonials'>
        <img src="src/assets/next-icon.png" alt=""  className='next-btn' onClick={slideForward} />
        <img src="src\assets\back-icon.png" alt="" className='back-btn' onClick={slideBackward}  />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="src\assets\user-1.png" alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>
                            
William Jackson is a dedicated educator and mentor with over 20 years of experience in the field of education. Known for his innovative teaching methods and commitment to student development, Jackson has played a pivotal role in shaping the future leaders of tomorrow.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="src\assets\user-2.png" alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>
                            
William Jackson is a dedicated educator and mentor with over 20 years of experience in the field of education. Known for his innovative teaching methods and commitment to student development, Jackson has played a pivotal role in shaping the future leaders of tomorrow.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="src\assets\user-3.png" alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>
                            
William Jackson is a dedicated educator and mentor with over 20 years of experience in the field of education. Known for his innovative teaching methods and commitment to student development, Jackson has played a pivotal role in shaping the future leaders of tomorrow.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="src\assets\user-4.png" alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>
                            
William Jackson is a dedicated educator and mentor with over 20 years of experience in the field of education. Known for his innovative teaching methods and commitment to student development, Jackson has played a pivotal role in shaping the future leaders of tomorrow.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
