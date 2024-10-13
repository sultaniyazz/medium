import { FaSpinner } from "react-icons/fa";
import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from "./PostCard";


const Posts = () => {


    const postsData = useSelector(state => state.dataPosts)


    const filtered = useSelector(state => state.filterPosts);

    const loading = useSelector(state => state.loadingPosts);

    return (
        <div className='flex flex-col w-[75%] max-sm:w-[100%] p-[1vw] overflow-y-auto'>
            {loading ? (
                <div className='h-full text-[1.3vw] flex justify-center gap-[.4vw] items-center'>
                    <h1 className="dark:text-white">Loading</h1>
                    <span className="animate-spin"><FaSpinner className="dark:text-white" /></span>
                </div>
            ) : (
                <div className="flex flex-col gap-[.5vw]">
                    {filtered.length > 0 ? filtered.map((post) => (
                        <PostCard post={post} />
                    )) : postsData.map((post) => (
                        <PostCard post={post} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Posts;
