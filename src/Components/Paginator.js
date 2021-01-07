import React from "react";

const Paginator = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (currentPage <= 0) currentPage = 1;
  if (currentPage >= pageNumbers.length) currentPage = pageNumbers.length;

  return (
    <nav className="paginator-list">
      <h3 className="main__title">
        You are on page {currentPage} of {pageNumbers.length}
      </h3>

      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <a onClick={() => paginate(number)} href="#!" className="page-link">
            {number}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Paginator;
