import React from 'react'
import Navbar from '../Component/Navbar'
import Botanista from '../assets/Botanista.png'
export default function Project6() {
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
                                <img className='ProjectProfile' id='' src={Botanista} alt="" />
                                <div className="ms-2 mt-4">
                                    <h6 className=''>Gastronovi API Integration for Botanista Cafe </h6>
                                    <a href="https://www.botanista-muc.de/food-und-drinks/">
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
                                    I successfully integrated the Gastronovi API into a WordPress site to dynamically display a restaurant menu that changes based on time slots. The API data included a list of dishes, their descriptions, and prices, which varied for different time periods (e.g., different lunch and dinner items on Monday versus Tuesday).
                                </p>

                                <h6>Functionality/Features :</h6>
                                <ul>
                                    <li>1. Designed a user-friendly interface for seamless menu browsing.
                                    </li>
                                    <li>2. Integrated the API to fetch and display real-time menu items, categories, and descriptions based on the current time.</li>
                                    <li>Implemented logic to ensure that only relevant menu items are shown at specific times of the day.</li>
                                    <li>3. Maintained consistent and reliable data flow between the WordPress site and the Gastronovi backend.</li>

                                </ul>
                                <p>This integration allows for automatic updates to the menu without manual intervention, providing both users and administrators with a smooth experience.</p>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
