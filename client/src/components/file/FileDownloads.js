import React from "react";
import { Link } from "react-router-dom";
import '../file/FileDownload.css';

 const  FileDownloads = () => {
    return (
        <div>
            <link href="FileDownload.css" rel="stylesheet"></link>
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
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
            <div>
                <h4> <i class="material-icons">< Link to={'/fdafile'}>arrow_back</Link></i>แบบฟอร์มการขออย. รายละเอียดและขั้นตอนขออย.</h4>
            </div>
            <div>
                <div class="row">
                    <div class="col s12 m4 l8 div"><span class="flow-text">เรื่อง</span></div>
                    <div class="col s12 m4 l2 div"><span class="flow-text">รายละเอียด</span></div>
                    <div class="col s12 m4 l2 div"><span class="flow-text">ดาวน์โหลด</span></div>
                </div>
            </div>
            <div>
                <div class="row">
                    <div class="col s12 m4 l8 "><span class="flow-text">คำขออนุญาตตั้งโรงงานผลิตอาหาร(แบบอ.1)</span></div>
                    <div class="col s12 m4 l2 div"><span class="flow-text">รายละเอียด</span></div>
                    <div class="col s12 m4 l2 div">
                        <span class="flow-text">
                                <a href="O1.pdf"><img src="pdf-icon.png" ></img></a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileDownloads;