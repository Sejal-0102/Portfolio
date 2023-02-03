import AOS from 'aos'
import React, { useContext, useEffect } from 'react'
import { data } from '../Store'
import Heading from './Heading'
import './App.css'

const About = () => {

    let { mode, setMode } = useContext(data)

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])

    let obj = [
        {
            id: 1,
            heading: "Name",
            content: "Sejal Mankar"

        },
        {
            id: 2,
            heading: "Email",
            content: "sejalamankar@gmail.com",

        },
        {
            id: 3,
            heading: "Date of Birth",
            content: "1st February 2001",

        },
        {
            id: 4,
            heading: "From",
            content: "Nagpur",

        }
    ]

    return (
        <>
            <div id='About'>
                <div className={`container-fluid bg-${mode ? 'dark' : 'light'} text-${mode ? 'light' : 'dark'}`}>
                    <div className='p-5'>
                        <Heading h1='About me' h2='Know me' />
                    </div>
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h1 style={{color: `${mode? '#66FCF1' : 'black' }`}}>Hello, I'm Sejal Mankar</h1>
                            <br />
                            <p>  Recently began taking interest in web development. I am learning React JS using languages like 
                                <br /> 
                               <b>HTML, CSS, Java script.</b> 
                            </p>
                        </div>
                        <div className='col-4'>
                            <img src="Images/output-onlinegiftools.gif" alt="" width='100%' />
                        </div>
                    </div>
                    <div className="row mt-5">
                        {
                            obj.map((e) => {
                                return (
                                    <div className="col-sm-6 col-xl-3" key={e.id}>
                                        <div className={`card p-2 mb-3`} style={{background:'#D4C4FB'}} data-aos='zoom-in-up'>
                                            <div className='card-header text-dark'>{e.heading}</div>
                                           <div className="card-body">
                                                <h5 className="card-title text-dark">{e.content}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
