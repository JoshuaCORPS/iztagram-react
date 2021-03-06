import React from "react";

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++)
    pageNumbers.push(i);

  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            className={`page-item ${currentPage === number && "active"}`}
            key={number}
          >
            <button
              className="page-link"
              onClick={() => paginate(number)}
              disabled={currentPage === number && true}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
