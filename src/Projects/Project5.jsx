import React from 'react'
import Navbar from '../Component/Navbar'
export default function Project5() {
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
                              
                                <div className="ms-2 mt-4">
                                    <h6 className=''>Dynamic web scrapper with data-processing</h6>
                                    
                                    <a href="https://github.com/muhammadxusman/Scrapper-with-data-processing">
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
                                Developed a robust web scraper using Python and Selenium to scrape data from approximately 200 websites in real-time. The scraper dynamically fetches data without errors and allows the use of specific keywords for targeted scraping. A separate configuration file stores website links, enabling the scraper to process each site sequentially. If the scraper encounters a website that restricts data extraction, it logs the site in a separate file for easy admin review. Additionally, I created a Python function to clean and extract relevant data, ensuring efficient data management.
                                </p>
                                
                                <h6>Keyword-Based Filtering :</h6>
                                <p>To improve efficiency, the scraper includes a feature that allows specific keywords to be passed as parameters. This makes it possible to extract only relevant data, speeding up the process and improving accuracy.</p>
                                <h6>Error Handling and Logging :</h6>
                                <p>If the scraper encounters a website where data extraction is blocked or fails, it logs the website's URL in a separate error file. This file serves as a record, enabling administrators to quickly identify which sites did not allow scraping, facilitating troubleshooting or further action.</p>
                                <h6>Post-Processing and Data Cleaning:</h6>
                                <p>After scraping, a custom Python function cleans and organizes the data, extracting specific pieces of information as needed. This ensures that the final dataset is both clean and tailored to specific requirements.</p>
                               
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
