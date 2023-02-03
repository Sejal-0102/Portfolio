import React, { useContext, useEffect } from 'react'
import { data } from '../Store'
import { SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiReact } from "react-icons/si";
import Heading from './Heading';
import AOS from 'aos';


const Skills = () => {

    let { mode, setMode } = useContext(data)

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])

    let obj = [
        {
            id: 1,
            icon: <SiHtml5 />,
            colour: "red",
            heading: "HTML"
        },
        {
            id: 2,
            icon: <SiCss3 />,
            colour: "blue",
            heading: "CSS"
        },
        {
            id: 3,
            icon: <SiBootstrap />,
            colour: "darkslateblue",
            heading: "Bootstrap"
        },
        {
            id: 4,
            icon: <SiJavascript />,
            colour: "rgba(243, 214, 51, 0.911)",
            heading: "JavaScript"
        },
        {
            id: 5,
            icon: <SiReact />,
            colour: "cyan",
            heading: 'React'
        }
    ]
    return (
        <>
            <div id='Skill'>
                <div className={`container-fluid bg-${mode? 'dark':'light'} text-${mode?'light':'dark'} pt-5`}>
                    <Heading h1='Skills' h2="My Skill-Set" />
                    <div className="row justify-content-evenly">
                        {
                            obj.map((e) => {
                                return (
                                    <div className="col-md-5 mb-3 text-center" key={e.id}>
                                        <div className="card text-center" data-aos='flip-down' style={{background:'#D4C4FB', color:'dark'}}>
                                            <div style={{fontSize : '85px', color: e.colour}} data-aos='flip-up'>{e.icon}</div>
                                            <div className='card-body'>
                                                <h5 className='card-text'>{e.heading}</h5>
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

export default Skills