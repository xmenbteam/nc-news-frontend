import React, { Component } from 'react';
import { Link } from '@reach/router';
import '../App.css'

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul className='nav'>
                    <li className='nav__btn'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='nav__btn'>
                        <Link to='/articles'>Articles</Link>
                    </li>
                    <li className='nav__btn'>
                        <Link to='/topics'>Topics</Link>
                    </li>

                </ul>
            </nav>
        );
    }
}

export default Nav; 