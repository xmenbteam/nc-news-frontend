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
                        <Link to='/topics' className='nav__btn'>Topics</Link>
                    </li>


                </ul>
            </nav>
        );
    }
}

export default Nav; 