import React from 'react';

const Paginator = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <nav className="paginator-list">
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <p>

                        <a onClick={() => paginate(number)} href='#!' className='page-link'>
                            {number}
                        </a>


                    </p>
                </li>

            ))}

        </nav>
    );
};

export default Paginator;