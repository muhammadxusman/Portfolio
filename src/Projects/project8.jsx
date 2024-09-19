import React from 'react'
import Navbar from '../Component/Navbar'
import antiaging from '../assets/antiaging.webp'

export default function Project8() {
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
                                <img className='' id='peptidelogo' src={antiaging} alt="" />
                                <div className="ms-2 mt-4">
                                    <h6 className=''>Antiaging Solution</h6>

                                    <a href="https://antiagingsolution.co/">
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
                                Developed a secure and visually appealing e-commerce platform for AntiagingSolution.co, specializing in advanced anti-aging skincare products. Leveraging WordPress and WooCommerce, I implemented product listings, payment gateways (Pay Bright), and shipping configurations, ensuring a seamless shopping experience. The project included designing a responsive UI, optimizing for SEO using Yoast, and enhancing security through SSL, backups, and plugins like Wordfence. The final result was a fully functional, user-friendly online store with improved search engine visibility and positive client feedback.
                                </p>

                               
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
