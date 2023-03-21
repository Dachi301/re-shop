import React from "react";

const Pagination = ({
    postsPerPage,
    totalPosts,
    paginate
}: {
    postsPerPage: number;
    totalPosts: number;
    paginate: (a: number) => {};
}) => {
    const pageNumbers: number[] = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a
                            onClick={() => {
                                paginate(number);
                            }}
                            href="#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
