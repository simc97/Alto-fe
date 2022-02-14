import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/new-trip');
    }

    return(
        <section className="home-container">
            <h1 className="welcome">Welcome</h1>
            <div className="home-content-container w-100">
                <div className="home-page-subtitle w-100">Elevate your ride experience.</div>
                <button className="filled-button" onClick={() => handleClick()}>book a ride</button>
            </div>
        </section>
    )
}

export default Home;