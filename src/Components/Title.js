import React from 'react';
import '../App.css'

const Title = ({ userName, loggedInUser }) => {
    return (
        <div>
            { loggedInUser.length > 0 ? <div>
                < h1 className='main__title' > Welcome to the News, {loggedInUser}!</h1 >
                <p>You are logged in as {userName}</p>
            </div >
                : <div>
                    <h1 className='main__title'>Welcome to the News!</h1>
                </div>
            }
        </div>
    );
};

export default Title;