import React from 'react'
import Navbar from '../Component/Navbar'
import antiaging from '../assets/antiaging.webp'
import DcElectic from '../assets/dcelectric.webp'
export default function Project11() {
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
                                <img className='' id='peptidelogo' src={DcElectic} alt="" />
                                <div className="ms-2 mt-4">
                                    <h6 className='mb-3'>DC Electric Service</h6>

                                    <a href="https://dcelectricservice.com/">
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
                                Developed a responsive and visually appealing portfolio website for DC Electric, designed to showcase their range of electrical services and highlight completed projects. The website serves a dual purpose by providing detailed information about the services offered, including residential, commercial, and industrial electrical solutions, while also acting as a portfolio to display their past work. The website was built with a focus on ease of navigation, ensuring potential clients can quickly understand DC Electric's capabilities and connect with them for inquiries.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
