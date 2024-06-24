import React from 'react';
import './Programs.css';
import program1Image from '../../assets/program-1.jpg';
import program2Image from '../../assets/program-2.png';
import program3Image from '../../assets/program-3.png';
// import programIcon1 from '../../assets/program-icon-1.png';
// import programIcon2 from '../../assets/program-icon-2.png';
// import programIcon3 from '../../assets/program-icon-3.png';

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program1Image} alt="" />
        <div className="caption">
            {/* <img src={programIcon1} alt="" /> */}
            <h2>Facade Services </h2>
            <p>
              Provides aluminum doors, windows, structural glazing, composite cladding, curtain walls, and custom aluminum windows for residential and commercial buildings.
            </p>
        </div>
      </div>
      <div className="program">
        <img src={program2Image} alt="" />
        <div className="caption">
            {/* <img src={programIcon2} alt="" /> */}
            <h2>Carpentry Services</h2>
            <p>
            Offers interior design solutions for residential and commercial buildings, including carved and flush doors, cabinets, fitted furniture, wall paneling, timber ceilings, composite wood decking, and parquet flooring.
            </p>
        </div>
      </div>
      <div className="program">
        <img src={program3Image} alt="" />
        <div className="caption">
            {/* <img src={programIcon3} alt="" /> */}
            <h2>Consultation Services</h2>
            <p>
            Offers turn-key design solutions as well as execution for your requirements for the interiors and facade, along with specifications and work inspections.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
