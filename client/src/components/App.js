import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Download from "./Download";
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Notifications from "./pages/Notification";
import FdaFile from "./file/FdaFile";
import FileDownloads from "./file/FileDownloads";
import FileReport from "./file/FileReport"
import FileRequest from "./file/FileRequest";
import Testpdf from "./file/Testpdf";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="container">
                 <Link to={'/'} className="brand-logo"></Link>
                    <Routes>
                        < Route exact path="/" element = {<Download />} />
                        < Route exact path="/home" element = {<Home />} />
                        < Route exact path="/chatbot" element = {<Chatbot />} />
                        < Route exact path="/notifications" element = {<Notifications />} />
                        < Route exact path="/fdafile" element = {<FdaFile />} />
                        < Route exact path="/filedownloads" element = {<FileDownloads />} />
                        < Route exact path="/filereport" element = {<FileReport />} />
                        < Route exact path="/filerequest" element = {<FileRequest />} />
                        < Route exact path="/testpdf" element = {<Testpdf />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}
export default App;
