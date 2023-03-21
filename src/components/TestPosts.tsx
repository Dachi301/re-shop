/* eslint-disable react/jsx-key */
import React, { Key } from "react";
import Card from "./card";

const Posts = ({ posts, loading }: { posts: []; loading: boolean }) => {
    return (
        <div>
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <div
                    className={
                        "grid w-full grid-cols-4 gap-x-[30px] gap-y-[30px] px-[30px] mb-[50px] 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1"
                    }>
                    {posts.map(
                        (post: {
                            imgSrc: string;
                            price: number;
                            id: Key | null | undefined;
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
                            // <h1 key={Math.random()}>{post.title}</h1>
                            <Card
                                key={post.id}
                                title={post?.title}
                                price={post?.price}
                                imgSrc={post?.imgSrc}
                                id={post?.id}
                            />
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default Posts;
