import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const About = () => {
    return (
        <Fragment>
        <nav>
          <div className="nav-wrapper  light-blue lighten-2">
                <div className="container">
                    <Link to="/" className="brand-logo"><i className="material-icons">arrow_back</i></Link>
                </div>
          </div>
        </nav>
        <div className="container">
            <h2 className="center">About us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio et commodi,
                dolorum fugiat facilis autem, temporibus tempore corrupti culpa, ducimus expedita.
                Distinctio dolores ut hic molestiae dolor iste nostrum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio et commodi,
                dolorum fugiat facilis autem, temporibus tempore corrupti culpa, ducimus expedita.
                Distinctio dolores ut hic molestiae dolor iste nostrum.
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio et commodi,
                dolorum fugiat facilis autem, temporibus tempore corrupti culpa, ducimus expedita.
                Distinctio dolores ut hic molestiae dolor iste nostrum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio et commodi,
                dolorum fugiat facilis autem, temporibus tempore corrupti culpa, ducimus expedita.
                Distinctio dolores ut hic molestiae dolor iste nostrum.</p>
            <h2 className="center">What we do</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio et commodi,
                dolorum fugiat facilis autem, temporibus tempore corrupti culpa, ducimus expedita.
                Distinctio dolores ut hic molestiae dolor iste nostrum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio et commodi,
                dolorum fugiat facilis autem, temporibus tempore corrupti culpa, ducimus expedita.
                Distinctio dolores ut hic molestiae dolor iste nostrum.
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio et commodi,
                dolorum fugiat facilis autem, temporibus tempore corrupti culpa, ducimus expedita.
                Distinctio dolores ut hic molestiae dolor iste nostrum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio et commodi,
                dolorum fugiat facilis autem, temporibus tempore corrupti culpa, ducimus expedita.
                Distinctio dolores ut hic molestiae dolor iste nostrum.</p>
        </div>
        </Fragment>
    )
}