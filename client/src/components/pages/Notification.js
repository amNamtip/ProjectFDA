import React from "react";
import { Link } from 'react-router-dom';

const Notification = () => {
    return (
        <div>
           <nav>
                <div className="container">
                    <Link to={'/'} className="brand-logo">FDA BOT</Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/chatbot'}>Chatbot</Link></li>
                        <li><Link to={'/notifications'}>Notifications</Link></li>
                        <li><Link to={'/fdafile'}>FDA File</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <h1>Selling you great stuff</h1>
                with the help of the chatbot
            </div>
        </div>
    )

}
export default Notification;