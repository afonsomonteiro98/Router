import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
    render () {
        return (
            <ul className="NavBar">
                <li><NavLink activeClassName="active" exact to="/" activeStyle={{color:"red"}} > Home </NavLink></li>
                <li><NavLink activeClassName="active" to="/our-history" activeStyle={{color:"red"}} > Our Story </NavLink></li>
            </ul>
        )
    }
}

export default NavBar;