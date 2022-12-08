import React from "react";
import {NavLink} from 'react-router-dom';





export default class Home extends React.Component {


    render() {
        return ( 
            <div className="links">
            <NavLink to="/login"><div className="link">Login</div></NavLink>  
        </div>
        )
    }
}