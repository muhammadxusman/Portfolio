import React from 'react'
import Navbar from '../Component/Navbar'
import FillShift from '../assets/FillShift.png'
export default function Project3() {
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
                                <img className='ProjectProfile' src={FillShift} alt="" />
                                <div className="ms-2 mt-4">
                                    <h6 className=''>Fill Shift</h6>
                                    
                                        <button className='ContactBtn2'>
                                            <span>View Project</span>
                                        </button>


                                </div>

                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="Project-Detai-container">
                                <h5>Description:</h5>
                                <p>
                                Advance & Smart Shift Management System
                                </p>
                                
                                <h6>Note:</h6>
                                <p>This website is currently under development phase. Once completed, I will add all the relevant details here. Stay tuned for updates as the full site is launched.</p>
                               
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
