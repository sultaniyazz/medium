import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchAuthors, getAllPosts } from '../API/request';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const RootLayout = () => {
    const dispatch = useDispatch();
    const urlPosts = 'https://posts-db.onrender.com/posts';
    const urlAuthors = 'https://posts-db.onrender.com/authors';

    useEffect(() => {
        dispatch(getAllPosts(urlPosts));
        dispatch(fetchAuthors(urlAuthors));
    }, []);

    return (
        <div className='select-none w-[100vw] h-[100vh] overflow-x-hidden bg-[#fff] flex flex-col justify-center dark:bg-black duration-300 overflow-hidden text-[1vw]'>
            <SideBar />
            <Header />
            <Outlet />
        </div >
    );
};

export default RootLayout;
