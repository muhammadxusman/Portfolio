import React from 'react'
import Navbar from '../Component/Navbar'
import Bobw from '../assets/bobw.webp'
import LouderMilks from "../assets/LouderMilks.gif"
import HireWomen from "../assets/HireWomen.webp"
export default function () {
    return (
        <>
            <div className="Navbar-Container">

                <Navbar />
            </div>
            <div className='Home_first Project-Main-Cont d-flex justify-content-center align-items-center flex-wrap gap-4'>

                <div className="Project-container ">
                    <div className="row">
                        <div className="col-md-3 projectColumn1">
                            <div className="pb-4">
                                <img className='ProjectProfile' src={Bobw} alt="" />
                                <div className="ms-2 mt-4">
                                    <h6 className=''>Buy online bacteriostatic water</h6>


                                    <a href="https://buyonlinebacteriostaticwater.com">
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
                                    I developed a full-featured e-commerce store for buyonlinebacteriostaticwater.com, a platform focused on selling advanced skincare products. The goal was to create a modern, responsive, and secure online shopping experience for customers seeking anti-aging solutions. My role included setting up WordPress and WooCommerce for product management, integrating secure payment gateways such as Stripe and PayPal, configuring shipping options, and implementing best practices in web security and SEO. The project resulted in a streamlined user experience, increased online visibility, and high customer satisfaction through a visually appealing, well-functioning platform.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="Project-container ">
                    <div className="row">
                        <div className="col-md-3 projectColumn1">
                            <div className="pb-4">
                                <img className='ProjectProfile' src={HireWomen} alt="" />
                                <div className="ms-2 mt-4">
                                    <h6 className='mb-4'>Hirewomen Exeutives</h6>


                                    <a href="https://hirewomenexeutives.demowebtest.com/">
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
                                This website provides job opportunities for women seeking employment in Canada. Employers can easily create and manage job postings through their dashboard. Once a job is posted with complete details, the system automatically sends notifications to registered women who meet the eligibility criteria for the position.
                                </p>
                                <h6>Note :</h6>
                                <p>This website is currently in development. Once completed, I will share all the details here.</p>
                            </div>
                        </div>
                    </div>

                </div>

                
               

            </div>

        </>
    )
}
