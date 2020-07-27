import React from "react";

const pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++)
    pageNumbers.push(i);

  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <button className="page-link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default pagination;
