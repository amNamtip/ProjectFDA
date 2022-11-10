import React from "react";
import { Link } from "react-router-dom";

const FileRequest = () => {
    return (
        <div>
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
                <h4> <i class="material-icons">< Link to={'/fdafile'}>chevron_left</Link></i>คำขอต่ออายุใบอนุญาตผลิอาหาร</h4>
            </div>
            <div>
                <div class="row">
                    <div class="col s12 m4 l8"><span class="flow-text">เรื่อง</span></div>
                    <div class="col s12 m4 l2"><span class="flow-text">รายละเอียด</span></div>
                    <div class="col s12 m4 l2"><span class="flow-text">ดาวน์โหลด</span></div>
                </div>
                <div class="row">
                    <div class="col s12 m4 l8"><span class="flow-text">คำขอต่ออายุใบอนุญาตผลิตอาหาร (แบบ อ.3)</span></div>
                    <div class="col s12 m4 l2"><span class="flow-text"></span></div>
                    <div class="col s12 m4 l2"><Link>PDF</Link></div>
                </div>
            </div>
        </div>
    )
}
export default FileRequest;