import React from 'react'
import Navbar from '../Component/Navbar'
import Gradio from '../assets/Gradio.png'
export default function Project1() {
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
                                <img className='ProjectProfile' src={Gradio} alt="" />
                                <div className="ms-2 mt-4">
                                    <h6 className=''>Grad.io - University Recommendation System</h6>
                                    <p>Final Year Project</p>
                                    <a href="https://github.com/muhammadxusman/Gradio-Final-Product">
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
                                    Grad.io is a cutting-edge university recommendation system that helps students find the best academic programs based on their personalities, interests, and career goals. By combining the RIASEC personality test with personal text input, Grad.io creates a profile of each user. It then leverages a rich dataset, collected from various university websites through web scraping, to match students with programs that fit their academic achievements and future aspirations.
                                </p>
                                <h6>Backend Development:</h6>
                                <p>Using NodeJs created RESTful APIs to handle data from universities, student grades, RIASEC personality assessments, and user interests.</p>
                                <h6>Model Training:</h6>
                                <p>Utilized NLP libraries, Porter Stemmer, and word lemmatization for preprocessing user interests and improved recommendation accuracy by 30%</p>
                                <h6>Web Scrapping:</h6>
                                <p>Implemented web scraping using Selenium to gather data from around 200 leading universities in Pakistan. Ensured the data was up-to-date and accurate for reliable recommendations.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
