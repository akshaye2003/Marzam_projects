import React from 'react'
import './Programs.css'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src="src\assets\program-1.jpg" alt="" />
        <div className="caption">
            <img src="src\assets\program-icon-1.png" alt="" />
            <h2>Facade Services </h2>
            <p>
              Provides aluminum doors, windows, structural glazing, composite cladding, curtain walls, and custom aluminum windows for residential and commercial buildings.
            </p>
        </div>
      </div>
      <div className="program">
        <img src="src\assets\program-2.jpg" alt="" />
        <div className="caption">
            <img src="src\assets\program-icon-2.png" alt="" />
            <h2>Carpentry Services</h2>
            <p>
            Offers interior design solutions for residential and commercial buildings, including carved and flush doors, cabinets, fitted furniture, wall paneling, timber ceilings, composite wood decking, and parquet flooring.
            </p>
        </div>
      </div>
      <div className="program">
        <img src="src\assets\program-3.jpg" alt="" />
        <div className="caption">
            <img src="src\assets\program-icon-3.png" alt="" />
            <h2>Consultation Services</h2>
            <p>
            Offers turn-key design solutions as well as execution for your requirements for the interiors and facade, along with specifications and work inspections.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Programs
