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
        <nav className={" flex justify-center"}>
            <ul className={"flex gap-5"}>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button
                            className={"bg-[gray] px-[10px] py-[3px] rounded-[50%] text-[#FFF]"}
                            onClick={() => {
                                paginate(number);
                            }}
                            // href="#">
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
