import React, { useContext } from 'react'
import { data } from '../Store'
import { BsFillMoonFill, BsFillSunFill, BsPersonFill } from "react-icons/bs";

const Navbar = () => {

  let {mode, setMode} = useContext(data)

  return (
    <>
      <nav className="fixed-top navbar navbar-expand-lg shadow" style={{background: "linear-gradient(135deg, #acb6e5 10%, #86fde8 100%)"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><BsPersonFill style={{fontSize:"34px", background: "linear-gradient(to top, #ccffff 14%, #003366 100%)"}} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#Skill">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#Contact">Contact</a>
              </li>
            </ul>
            <div className="d-flex justify-content-center" role="search">
              <button className="btn" style={{background:"linear-gradient(135deg, #29323c 10%, #485563 100%)"}} onClick={()=>setMode(!mode)} >{mode? <BsFillSunFill style={{color: "azure"}}/>:<BsFillMoonFill style={{color :"azure"}}/>}</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar