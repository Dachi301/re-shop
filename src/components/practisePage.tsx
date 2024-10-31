import React, { useState, useEffect } from "react";
import Posts from "@/components/TestPosts";
import Pagination from "@/components/Pagination";
import Items from "@/data/items";

const PractisePage = ({filteredData, searchValue}: {filteredData?: any, searchValue: any}) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);

    const paginate = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirsttPost = indexOfLastPost - postsPerPage;
    const currentPosts = Items.slice(indexOfFirsttPost, indexOfLastPost);
    return (
        <div>
            <Posts posts={searchValue === "" ? currentPosts : filteredData} loading={loading} />
            <Pagination
                postsPerPage={searchValue === "" ? postsPerPage : filteredData.length}
                totalPosts={searchValue === "" ? Items.length : filteredData.length}
                paginate={paginate}
            />
        </div>
    );
};

export default PractisePage;
