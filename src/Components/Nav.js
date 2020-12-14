import React, { Component } from 'react';
import { Link } from '@reach/router';
import '../App.css'

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul className='nav'>
                    <li >
                        <Link to='/' className='nav__btn'>Home</Link>
                    </li>
                    <li>
                        <Link to='/articles' className='nav__btn'>Articles</Link>
                    </li>
                    <li>
                        <Link to='/user' className='nav__btn'>User</Link>
                    </li>


                </ul>
            </nav>
        );
    }
}

export default Nav; 