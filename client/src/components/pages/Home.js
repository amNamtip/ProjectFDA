import React from "react";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <nav>
                <div className="container ">
                    <Link to={'/'} className="brand-logo">FDA BOT</Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/chatbot'}>Chatbot</Link></li>
                        <li><Link to={'/notifications'}>Notifications</Link></li>
                        <li><Link to={'/fdafile'}>FDA File</Link></li>
                    </ul>
                </div>
            </nav>
            <div>
                 <h1>Home</h1>
            </div>
            
        </div>

    )

}
export default Home;