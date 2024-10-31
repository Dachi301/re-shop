import React, { useEffect, useState } from "react";

const Pagination = ({
    postsPerPage,
    totalPosts,
    paginate
}: {
    postsPerPage: number;
    totalPosts: number;
    paginate: any;
}) => {
    const pageNumbers: number[] = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const [active, setActive] = useState(0);

    useEffect(() => {
        console.log(active);
    }, [active]);

    return (
        <nav className={" flex justify-center"}>
            <ul className={"flex gap-5"}>
                {pageNumbers.map((number, id) => (
                    <li key={number}>
                        <button
                            id={`${id}`}
                            className={`px-[10px] py-[3px] rounded-[50%] text-black hover:bg-[#e7c128] ${
                                active === Number(id) ? "bg-[#e7c128]" : "bg-[gray]"
                            }`}
                            onClick={(e: any) => {
                                paginate(number);

                                setActive(Number(e.target.id));
                            }}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
