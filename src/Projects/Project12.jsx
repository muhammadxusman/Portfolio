import React from 'react'
import Navbar from '../Component/Navbar'
import Carweb from "../assets/carweb.png"
import Cyber from "../assets/Cyber.gif"
export default function Project12() {
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
                                <img className='' id='peptidelogo' src={Carweb} alt="" />
                                <div className="ms-2 mt-4">
                                    <h6 className='mb-4'>Prestige Automotive</h6>

                                    <a href="https://prestigeautobodycampbell.com/">
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
                                    Created an eye-catching and user-friendly website for an automobile repair service, showcasing a full range of car repair and maintenance offerings. The website is designed to ensure that all services are clearly listed, allowing users to easily browse and select the services they need. A streamlined booking system enables customers to effortlessly book their repair or maintenance slot online, ensuring convenience and efficiency in scheduling. The site combines a modern design with functionality, enhancing the overall user experience.
                                </p>

                               


                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
