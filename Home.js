import React, { useContext } from 'react'
import { data } from '../Store'

const Home = () => {

    let {mode, setMode} = useContext(data)

  return (
    <>
        <div id='Home'>
        <div className={`container-fluid bg-${mode? "dark":"light"}`}>
            <div className="row align-items-center">
                <div className={`col-lg-6 mt-4 text-${mode? "light":"dark"}`}>
                    <h1 style={{color: `${mode? '#66FCF1' : 'black' }`}} className="mt-5">Frontend Developer</h1>
                    <p>A front-end developer builds the front-end portion of websites and web applications—that is, the part that users actually see and interact with.
                    ront-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app. When you visit a website, the design elements you see were created by a front-end developer.
                    </p>
                </div>
                <div className="col-lg-6">
                    <img src="Images/female-developer-vector-removebg-preview.png" alt="" width="70%" className='my-5 mx-5'/>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Home