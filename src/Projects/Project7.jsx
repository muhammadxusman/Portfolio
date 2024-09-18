import React from 'react'
import Navbar from '../Component/Navbar'
import Peptides from '../assets/Peptides.png'
export default function Project7() {
    return (
        <>
            <div className="Navbar-Container">

                <Navbar />
            </div>
            <div className='Home_first Project-Main-Cont d-flex justify-content-center align-items-center'>

                <div className="Project-container ">

                    <div className="row">
                        <div className="col-md-3 projectColumn1">
                            <div className="pb-4">
                                <img className='' id='peptidelogo'  src={Peptides} alt="" />
                                <div className="ms-2 mt-4">
                                    <h6 className=''>Peptides Calculator</h6>
                                    
                                    <a href="https://peptidescalculator.com/">
                                        <button className='ContactBtn'>
                                            <span>View Project</span>
                                        </button>
                                    </a>



                                </div>

                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="Project-Detai-container">
                                <h5>Description:</h5>
                                <p>
                                The Peptides Calculator web application was developed to enhance user experience and improve peptide dosing accuracy. The project involved implementing new features and updates based on the client's specific requirements, focusing on precise unit conversions, customizable syringe options, and user-friendly functionality. The application ensures reliable dosing calculations, making it a critical tool for users requiring accurate peptide management.
                                </p>
                                
                                <h6>Authentication :</h6>
                                <p>To implement a secure signup process with email and phone OTP verification, you'll need to follow these steps. I'll outline how to do it in a React.js and Flask environment, assuming you have a basic authentication setup in place.</p>
                                <h6>Functionality :</h6>
                                <p>designed the output to provide clear dosing instructions, including concentration and dose count. Developed a unit converter for milliliters (ml), milligrams (mg), microliters (uL), and micrograms (mcg). Added a feature allowing users to save their calculations with a title and note for future reference.</p>
                               
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
