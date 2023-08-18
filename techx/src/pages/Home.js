import React from 'react'
import Profile from '../components/Profile'
import CreatePost from '../components/CreatePost'
import Add from '../components/Add'
import './Home.css';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <div className="posts">
                    <div className="left"><Profile /></div>
                    <div className="center"><CreatePost /></div>
                    <div className="right"><Add /></div>
                </div>
            </div>


        </>
    )
}

export default Home