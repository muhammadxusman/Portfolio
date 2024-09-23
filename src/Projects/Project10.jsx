import React from 'react'
import Navbar from '../Component/Navbar'
import antiaging from '../assets/antiaging.webp'
import Cyber from "../assets/Cyber.gif"
export default function Project10() {
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
                                <img className='' id='peptidelogo' src={Cyber} alt="" />
                                <div className="ms-2 mt-4">
                                    <h6 className='mb-4'>Cyber UniCorns</h6>

                                    <a href="https://cyberunicorns.com.au/">
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
                                E-commerce platform offering a range of cybersecurity courses, designed to provide the best learning facilities for students. Users can easily browse and choose their desired courses, complete secure payments, and gain immediate access to the purchased materials. The course content is provided in both video and PDF formats, allowing for flexible learning. The platform features a user-friendly dashboard, ensuring seamless navigation for students to track their progress and access learning resources with ease.
                                </p>

                                         
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
