import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "@/components/TestPosts";
import Pagination from "@/components/Pagination";
import Items from "@/data/items";

const PractisePage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirsttPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirsttPost, indexOfLastPost);
    return (
        <div>
            <h1 className={"text-2xl"}>PractisePage</h1>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    );
};

export default PractisePage;
