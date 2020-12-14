import React from 'react';
import '../App.css'

const Title = ({ userName, loggedInUser }) => {
    return (
        <div>
            { loggedInUser.length > 0 ? <div>
                < h1 className='main__title' > Welcome to the News, {loggedInUser}!</h1 >
                <p className='main__title--subtitle'>You are logged in as <b>{userName}</b></p>
            </div >
                : <div>
                    <h1 className='main__title'>Welcome to the News!</h1>
                </div>
            }
        </div>
    );
};

export default Title;