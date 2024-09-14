import Navbar from './Component/Navbar'
// import Laptop from './assets/Laptop.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import EducationIcon from './assets/Education.svg'
import Webcustom from './assets/webcustom.svg'
import Webcustom2 from './assets/websitecustom.svg'
import Reactlogo from './assets/Reactlogo.png'
import PythonLogo from './assets/PythonLogo.png'
import NodejsLogo from './assets/NodejsLogo.png'
import MysqlLogo from './assets/MysqlLogo.png'
import DockerLogo from './assets/DockerLogo.png'
import Nextjs from './assets/Nextjs.png'
import WordpressLogo from './assets/WordpressLogo.png'
import GitHublogo from './assets/GitHublogo.png'
import pythonFlask from './assets/pythonFlask.png'
import PhpLaravel from './assets/PhpLaravel.png'
import resume from './assets/Resume.pdf'
import ProfilePic from './assets/ProfilePic.jpeg'

export default function Home() {
  const handleDownload = (e) => {
    // Open the resume in a new tab
    window.open(resume, '_blank');

    // Allow the download to proceed
    e.stopPropagation();
  };
  return (
    <>
      <Navbar />
      <div className="Home_first  d-flex align-items-center justify-content-center">
        <div className="row  container">
          <div className="col-md-6 headHomeTxt d-flex align-items-center justify-content-center">
            <div className="mt-5">
              <h3>I'm Usman Ali, a</h3>
              <h4 ><span className='txt-grad'>Software Engineer</span>
              </h4>
              {/* <p>High experience in Web Application development,<br /> producing quality work</p> */}
              <div className="d-flex gap-3 mt-3">
                <a href="https://www.facebook.com/profile.php?id=100068004366708" target='__blank'>
                  <FontAwesomeIcon className='theIcons' icon={faFacebook} />
                </a>
                <a href="https://github.com/muhammadxusman" target='__blank'>
                  <FontAwesomeIcon className='theIcons' icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/usman-ali23/" target='__blank' >
                  <FontAwesomeIcon className='theIcons' icon={faLinkedinIn} />
                </a>
              </div>

              <div className="d-flex gap-2 mt-3 headHomebtn">

                <a
                  href={resume}
                  download="Resume"
                  style={{ textDecoration: 'none' }}
                  onClick={handleDownload}
                >
                  <button className="cssbuttons-io-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="#ffffff"
                        d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                      ></path>
                    </svg>
                    <span>Download Resume</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6  pt-5  d-flex justify-content-center">
            {/* <img className='LaptopImg' src={Laptop} alt="" /> */}

            <div className="Profile LaptopImg">
              <div className="">
                <div className="row ">
                  <div className="col-md-4 ProfilePicmain">
                    <img className='ProfilePic' draggable="false" src={ProfilePic} alt="" />
                  </div>
                  <div className="col-md-8 Profileinfo ProfilePicmain">
                    <h4>Usman Ali</h4>
                    <h5 className='MainProfileInfo'>Software Engineer</h5>

                    <div className="alignProfileInfo">

                      <div className="">

                        <div className="d-flex gap-2">
                          <svg className='profileicons mt-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                          <p className='profilemoredetails'>Pakistan</p>
                        </div>
                        <div className="d-flex gap-2 secdProf ">
                          <svg className='profileicons mt-1 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="7.5" fill="#238D4D"></circle></svg>
                          <h6 className='profilemoredetails'>Online</h6>
                          {/* <p className='profilemoredetails'>Online</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className='d-flex d-flex justify-content-around '>

                  <div className="">
                    <h5 className='ProfileHeading'>
                      50+
                    </h5>
                    <p className='Profiletxt'>Project</p>
                  </div>
                  <div className="">
                    <h5 className='ProfileHeading'>
                      3 Years +
                    </h5>
                    <p className='Profiletxt'>Experience</p>
                  </div>
                  <div className="">
                    <h5 className='ProfileHeading'>
                      5.0
                    </h5>
                    <p className='Profiletxt'>Rating</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center gap-3 mt-2">
                  <a href="mailto:muhammadusmanali020@gmail.com">
                    <button className='ContactBtn'>
                      <span>Email me</span>
                    </button>
                  </a>
                  <a href="#MyProject">
                    <button className='ContactBtn'>
                      <span>Projects</span>
                    </button>
                  </a>
                </div>

                <hr />

                <div className=" ">
                  <h5 className='ProfileHeading'>
                    Contact me
                  </h5>

                  <div className=" mt-3">
                    <a className='d-flex gap-2 ms-2 ancherWhats' href="https://wa.me/923242013266" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon className='Whatsappicon' icon={faWhatsapp} />
                      <p>+92-3242013266</p>
                    </a>
                  </div>
                  <div className=" mt-1">
                    <a className='d-flex gap-2 justify-content-center ancherWhats' href="#" rel="noopener noreferrer">

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px" fill="#505050">
                        <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                      </svg>

                      <p className='my-email'>muhammadusmanali020@gmail.com</p>
                    </a>
                  </div>



                </div>
              </div>

            </div>
          </div>
        </div>
      </div >
      <div className="container mt-5">
        <div className="AboutContMain py-5 d-flex justify-content-center">

          <div className=" AboutCont d-flex justify-content-center flex-column align-items-center ">
            <h2 className='mb-5 aboutme '>About Me</h2>
            {/* <h3>Who I am?</h3> */}
            <p>I am a recent graduate from the Software Engineering program with a strong foundation in
              various programming languages and frameworks. My technical expertise includes Python, React,
              Node.js, Next.js, PHP Laravel. While pursuing my academic degree, I also worked with various
              software companies, where I honed my skills in creating dynamic, efficient, and user-friendly
              software solutions. As a software engineer, I am motivated to leverage my knowledge and skills
              to contribute to innovative projects.</p>
            <div className="mt-5 d-flex gap-4 justify-content-center flex-wrap ">
              <div className="AboutBox1 d-flex align-items-center justify-content-center">
                <div className="d-flex gap-2 flex-column align-items-center justify-content-center">
                  <img className='EduIcon' src={EducationIcon} alt="" />
                  <h3>Software Engineer</h3>
                </div>
              </div>
              <div className="AboutBox1 d-flex align-items-center justify-content-center">
                <div className="d-flex gap-2 flex-column align-items-center justify-content-center">
                  <img className='EduIcon' src={Webcustom2} alt="" />
                  <h3>Custom Development</h3>
                </div>
              </div>
              <div className="AboutBox1 d-flex align-items-center justify-content-center">
                <div className="d-flex gap-2 flex-column align-items-center justify-content-center">
                  <img className='EduIcon' src={Webcustom} alt="" />
                  <h3>CMS Development</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container-fluid mt-5 ">
        <div className="container  ">

          <div className="my-4 d-flex  justify-content-center">
            <h2 className='text-center mb-5 techskilltxt '>Tech Skills</h2>

          </div>

          <div className="row  d-flex gap-3 justify-content-center">
            <din className="col-md-2 col-sm-2 AboutBox1">
              <div className="d-flex gap-2 flex-column justify-content-center align-items-center">
                <img className='Techlogo' src={PythonLogo} alt="" />
                <h6>Python</h6>
              </div>
            </din>
            <din className="col-md-2 col-sm-2 AboutBox1">
              <div className="d-flex gap-2 flex-column justify-content-center align-items-center">
                <img className='Techlogo' src={Reactlogo} alt="" />
                <h6>React</h6>
              </div>
            </din>

            <din className="col-md-2  col-sm-2 AboutBox1">
              <div className="d-flex gap-2 flex-column justify-content-center align-items-center">
                <img className='Techlogo' src={NodejsLogo} alt="" />
                <h6>Node Js</h6>
              </div>
            </din>
            <din className="col-md-2 col-sm-2 AboutBox1">
              <div className="d-flex gap-2 flex-column justify-content-center align-items-center">
                <img className='Techlogo pt-3' src={MysqlLogo} alt="" />
                <h6>My SQL</h6>
              </div>
            </din>
            <din className="col-md-2 col-sm-2 AboutBox1">
              <div className="d-flex gap-2 flex-column justify-content-center align-items-center">
                <img className='Techlogo' src={DockerLogo} alt="" />
                <h6>Docker</h6>
              </div>
            </din>
            <din className="col-md-2 col-sm-2 AboutBox1">
              <div className="d-flex gap-2 flex-column justify-content-center align-items-center">
                <img className='Techlogo pt-2' src={Nextjs} alt="" />
                <h6>Next Js</h6>
              </div>
            </din>
            <din className="col-md-2 col-sm-2 AboutBox1">
              <div className="d-flex gap-2 flex-column justify-content-center align-items-center">
                <img className='Techlogo' src={WordpressLogo} alt="" />
                <h6>WordPress</h6>
              </div>
            </din>
            <din className="col-md-2 col-sm-2 AboutBox1">
              <div className="d-flex gap-2 flex-column justify-content-center align-items-center">
                <img className='Techlogo' src={GitHublogo} alt="" />
                <h6>GitHub</h6>
              </div>
            </din>
            <din className="col-md-2 col-sm-2 AboutBox1">
              <div className="d-flex gap-2 flex-column justify-content-center align-items-center">
                <img className='Techlogo pt-2' src={pythonFlask} alt="" />
                <h6>Flask</h6>
              </div>
            </din>
            <din className="col-md-2 col-sm-2 AboutBox1">
              <div className="d-flex gap-2 flex-column justify-content-center align-items-center">
                <img className='Techlogo pt-2' src={PhpLaravel} alt="" />
                <h6>Laravel</h6>
              </div>
            </din>


          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 technoCont pb-5">
        <div className="container">
          <h2>Experience</h2>
          <div className="">
            <div className="mt-5 d-flex justify-content-between expComp">
              <h4>Software Engineer</h4>
              <p>July. 2024 - Present</p>
            </div>
            <p className='mt-2 brainwave'>Brainwave Technology</p>
            <ul className="custom-class">
              <li>• Collaborated directly with clients to provide optimal solutions to their problems.</li>
              <li>• Developed responsive and dynamic web applications on MERN.</li>
              <li>• Built and maintained e-commerce websites.</li>
              <li>• Worked on multiple WordPress websites.</li>
            </ul>

          </div>
          <div className="">
            <div className="mt-5 d-flex justify-content-between expComp">
              <h4>Freelance Software Developer</h4>
              <p>Aug. 2023 - Present</p>
            </div>
            <p className='mt-2 brainwave'>Upwork</p>
            <ul className="custom-class">
              <li>• Migrated legacy systems to modern frameworks.</li>
              <li>• Develop web app on Flask/Mern.</li>
              <li>• Used client feedback to improve design and functionality.</li>
              <li>• Built multiple WordPress websites.</li>
            </ul>
          </div>
          <div className="">
            <div className="mt-5 d-flex justify-content-between expComp">
              <h4>Web Developer</h4>
              <p>Sep. 2023 - July 2024</p>
            </div>
            <p className='mt-2 brainwave'>TechDot Solutions</p>
            <ul className="custom-class">
              <li>• Hands-on experience on Upwork and working as a Intern Project Manager.</li>
              <li>• Develop Reactjs and Nextjs Projects.</li>
              <li>• Build and optimize wordPress Websites.</li>
              <li>• Integrated third-party APIs and services to enhance application functionality and meet client requirements.</li>
            </ul>
          </div>
          <div className="">
            <div className="mt-5 d-flex justify-content-between expComp">
              <h4>Web Developer<span className='ms-2 intertxt'>(Intern)</span></h4>
              <p>Sep. 2022 - Aug. 2023</p>
            </div>
            <p className='mt-2 brainwave'>Fugen Services</p>
            <ul className="custom-class">
              <li>• Developed full-stack web applications using the MVC (Model-View-Controller) architecture.</li>
              <li>• Developed responsive and dynamic web applications using React.</li>
              <li>• Built and maintained e-commerce websites using WooCommerce and OpenCart.</li>
              <li>• Implemented RESTful APIs to support various web and mobile applications, to ensure
                seamless integration and data exchange.</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="container-fluid mt-5 " id='MyProject'>
        <div className="container">
          <div className="my-4 d-flex justify-content-center">
            <h2 className='text-center mb-5 techskilltxt' >Projects</h2>

          </div>
          <div className="d-flex flex-wrap justify-content-center ProjectCards ">

            <div className="custom-card">
              <a className="custom-card1 FypBox" href="#">
                <p className="custom-small"><span className='FYPtxt'>Final Year Project: </span>Grad.io - University Recommendation System</p>
                <div className="custom-go-corner" href="#">
                  <div className="custom-go-arrow">→</div>
                </div>
              </a>
            </div>
            <div className="custom-card">
              <a className="custom-card1" href="#">
                <p className="custom-small">Automated and Intelligent System for Google Ads</p>
                <div className="custom-go-corner" href="#">
                  <div className="custom-go-arrow">→</div>
                </div>
              </a>
            </div>
            <div className="custom-card">
              <a className="custom-card1" href="#">
                <p className="custom-small">Developed Shift Management System for a Prominent Firm</p>
                <div className="custom-go-corner" href="#">
                  <div className="custom-go-arrow">→</div>
                </div>
              </a>
            </div>
            <div className="custom-card">
              <a className="custom-card1" href="#">
                <p className="custom-small">Peptides Dosage Calculator Web App.</p>
                <div className="custom-go-corner" href="#">
                  <div className="custom-go-arrow">→</div>
                </div>
              </a>
            </div>

            <div className="custom-card">
              <a className="custom-card1" href="#">
                <p className="custom-small">Dynamic web scraping from 200 websites using Selenium.</p>
                <div className="custom-go-corner" href="#">
                  <div className="custom-go-arrow">→</div>
                </div>
              </a>
            </div>
            <div className="custom-card">
              <a className="custom-card1" href="#">
                <p className="custom-small"> Automobile sell and purchase web app on Php Laravel</p>
                <div className="custom-go-corner" href="#">
                  <div className="custom-go-arrow">→</div>
                </div>
              </a>
            </div>
            <div className="custom-card">
              <a className="custom-card1" href="#">
                <p className="custom-small">Learning Management System using LearnPress</p>
                <div className="custom-go-corner" href="#">
                  <div className="custom-go-arrow">→</div>
                </div>
              </a>
            </div>

            <div className="custom-card">
              <a className="custom-card1" href="#">
                <p className="custom-small">API Integration for Botanista Cafe & Club.</p>
                <div className="custom-go-corner" href="#">
                  <div className="custom-go-arrow">→</div>
                </div>
              </a>
            </div>


            <div className="custom-card">
              <a className="custom-card1" href="#">
                <p className="custom-small">Developed and customized an e-commerce store for ticket booking.</p>
                <div className="custom-go-corner" href="#">
                  <div className="custom-go-arrow">→</div>
                </div>
              </a>
            </div>
            <div className="custom-card">
              <a className="custom-card1" href="#">
                <p className="custom-small">Built a website on GoHighLevel to run automation processes.</p>
                <div className="custom-go-corner" href="#">
                  <div className="custom-go-arrow">→</div>
                </div>
              </a>
            </div>
            <div className="custom-card">
              <a className="custom-card1" href="#">
                <p className="custom-small">Recipe-sharing web app using Laravel with Google auth and IP restrictions.</p>
                <div className="custom-go-corner" href="#">
                  <div className="custom-go-arrow">→</div>
                </div>
              </a>
            </div>
            <div className="custom-card">
              <a className="custom-card1" href="#">
                <p className="custom-small">WordPress E-Commerce Store: AntiagingSolution.co</p>
                <div className="custom-go-corner" href="#">
                  <div className="custom-go-arrow">→</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>



      <div className="spacer">

      </div>





    </>
  )
}
