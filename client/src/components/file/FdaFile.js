import React from "react";
import { Link } from 'react-router-dom';

const FdaFile = () => {
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
            <nev>
                <div>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                    <div>
                        <h2 class="center-align">แบบฟอร์มคำร้อง</h2>
                    </div>
                    <div>
                        <a class="waves-effect waves-light btn-large"><i class="material-icons left">cloud</i><Link to={'/filedownloads'} className="white-text">แบบฟอร์มขออย. รายละเอียดและขั้นตอนขออย.</Link></a>
                        <a class="waves-effect waves-light btn-large"><i class="material-icons left">cloud</i><Link to={'/filerequest'} className="white-text" >คำขอต่ออายุใบอนุญาตผลิอาหาร</Link></a>
                        <a class="waves-effect waves-light btn-large"><i class="material-icons left">cloud</i><Link to={'/filereport'} className="white-text ">แบบฟอร์มรายงานผลการตรวจสอบประเมินสถานที่ผลิต</Link></a>
                    </div>
                </div>
            </nev>
        </div>

    )
}
export default FdaFile;