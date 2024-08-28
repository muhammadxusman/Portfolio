import Navbar from './Component/Navbar'
// import Laptop from './assets/Laptop.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


import ProfilePic from './assets/ProfilePic.jpeg'
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="Home_first  d-flex align-items-center justify-content-center">
        <div className="row  container">
          <div className="col-md-6 headHomeTxt d-flex align-items-center justify-content-center">
            <div className="mt-5">
              <h3>I'm Muhammad Usman Ali, a</h3>
              <h4 ><span className='txt-grad'>Software Engineer.</span>
              </h4>
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

              </div>
            </div>
          </div>
          <div className="col-md-6  pt-5  d-flex justify-content-center">
            {/* <img className='LaptopImg' src={Laptop} alt="" /> */}

            <div className="Profile LaptopImg">
              <div className="">
                <div className="row ">
                  <div className="col-md-4 ">
                    <img className='ProfilePic' draggable="false" src={ProfilePic} alt="" />
                  </div>
                  <div className="col-md-8 Profileinfo">
                    <h4>Usman Ali</h4>
                    <h5 className='MainProfileInfo'>Software Engineer</h5>
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
                  <button className='ContactBtn'>
                    <span>Email me</span>
                  </button>
                  <button className='ContactBtn'>
                    <span>Projects</span>
                  </button>
                </div>

                <hr />

                <div className=" ">
                  <h5 className='ProfileHeading'>
                    Contact me
                  </h5>

                  <div className="d-flex d-flex justify-content-around  mt-4">
                    <div className="social-media">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6.62 10.79a15.92 15.92 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.24c1.2.48 2.51.73 3.86.73.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C10.29 21.5 2.5 13.71 2.5 3c0-.55.45-1 1-1H7c.55 0 1 .45 1 1 0 1.35.25 2.66.73 3.86.14.31.07.68-.24 1.11l-2.2 2.2z" />
                        </svg>

                        <span className="tooltip-social">+92-3242013266</span>
                      </a>
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.01 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16.01a2 2 0 002-2V6a2 2 0 00-2-2zm-.4 2L12 11.99 4.39 6h15.22zM4 18V7.2l7.6 5.69a1 1 0 001.2 0L20 7.2V18H4z" />
                        </svg>

                        <span className="tooltip-social">muhammadusmanali010@gmail.com</span>
                      </a>

                      <a href="https://www.linkedin.com/in/usman-ali23/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                        </svg>
                        <span className="tooltip-social">LinkedIn</span>
                      </a>
                    </div>
                  </div>


                </div>
              </div>

            </div>
          </div>
        </div>
      </div >
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="">
              <h3>Who I am?</h3>
              <p>I am a recent graduate from the Software Engineering program with a strong foundation in
                various programming languages and frameworks. My technical expertise includes Python, React,
                Node.js, Next.js, PHP Laravel. While pursuing my academic degree, I also worked with various
                software companies, where I honed my skills in creating dynamic, efficient, and user-friendly
                software solutions. As a software engineer, I am motivated to leverage my knowledge and skills
                to contribute to innovative projects.</p>
            </div>
          </div>
          <div className="col-md-6">
            
          </div>
        </div>
      </div>



    </>
  )
}
