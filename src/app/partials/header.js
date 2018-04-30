import React from "react";
import { Link } from "react-router-dom";


export const Header = (props) => {
  const renderViewIcon = () => {
    return props.stateView ? <i className="material-icons">view_module</i> : <i className="material-icons">view_list</i>
  }

  return (

    <nav>
      <div className="nav-wrapper  light-blue lighten-2">
        <div className="container">
        <div className="row">
          <a href="#!" className="brand-logo">React Users</a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link  to="/about">About</Link></li>
            <li><a onClick={props.onChangeViewClick}>{renderViewIcon()}</a></li>
            <li><a onClick={props.onRefresh}><i className="material-icons">refresh</i></a></li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}
