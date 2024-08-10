import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const { 
    project = "Default Project", 
    root = "Default Root", 
    about = "Default About" 
  } = props;
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {project}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {root}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {about}
                </Link>
              </li>
            </ul>
            <input type="checkbox" className="btn-check" id="btn-check-Blue" autoComplete="off"/>
            <label className="btn btn-primary mx-2" htmlFor="btn-check">Blue</label>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.modeSelector}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={props.mode==='dark'?{color:'white'}:{color:'black'}}>Dark mode</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
  project: PropTypes.string.isRequired,
  root: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
};

// Navbar.defaultProps = {
//   project: "Default Project",
//   root: "Default Root",
//   about: "Default about"
// };