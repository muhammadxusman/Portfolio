import React from 'react'
import Navbar from '../Component/Navbar'
import Vidtrial from '../assets/Vidtrial.png'
export default function Project2() {
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
                                <img className='ProjectProfile' src={Vidtrial} alt="" />
                                <div className="ms-2 mt-4">
                                    <h6 className=''>VidTrial</h6>
                                    
                                    <a href="https://vidtrial.com/">
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
                                VidTrial is a platform designed to help users automate the process of running YouTube ads. By selecting a plan, users can launch their ads on YouTube with advanced targeting options. They can choose specific YouTube channels and even pinpoint the exact videos where they want their ads to appear. VidTrial focuses on providing organic and real reach to businesses, ensuring that the ads gain authentic engagement from viewers, enhancing the visibility of their brand or service.
                                </p>
                                <h6>Backend Development:</h6>
                                <p>Developed RESTful APIs to manage YouTube channel data and integrated Google's API for seamless interaction with YouTube services. Additionally, I implemented a custom-built, secure payment gateway on the website, ensuring that payment transactions are processed safely and efficiently.</p>
                                <h6>Note:</h6>
                                <p>This website is still under development. Once completed, it will provide detailed information and services related to ads automating. Stay tuned for updates when the full site is launched.</p>
                               
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
