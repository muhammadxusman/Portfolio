import React from 'react'
import Navbar from '../Component/Navbar'
import LouderMilks from "../assets/LouderMilks.gif"
export default function Project() {
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
                                <img className='ProjectProfile' src={LouderMilks} alt="" />
                                <div className="ms-2 mt-4">
                                    <h6 className='mb-4'>The Louder Milks</h6>

                                    <a href="https://loudermilks.com/">
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
                                    I developed a website for a client to sell traditional family music. Users can browse and purchase music based on their preferences, with secure payment gateways ensuring smooth transactions. The website guarantees the delivery of music once the payment process is completed. I also integrated Yoast SEO to optimize the site’s visibility on Google and implemented Wordfence to protect it from potential attackers.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
