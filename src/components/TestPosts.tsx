/* eslint-disable react/jsx-key */
import React from "react";

const Posts = ({ posts, loading }: { posts: []; loading: boolean }) => {
    return (
        <div>
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <div>
                    {posts.map(
                        (post: {
                            title:
                                | string
                                | number
                                | boolean
                                | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                                | React.ReactFragment
                                | React.ReactPortal
                                | null
                                | undefined;
                        }) => (
                            <h1 key={Math.random()}>{post.title}</h1>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default Posts;
