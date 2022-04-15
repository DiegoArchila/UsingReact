import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import RouterApp from "../routers/RouterApp";
import "./ContentWrapper.css";

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="">
                {/*<!-- Main Content -->*/}
                <div id="content" className="d-flex flex-column overflow-y-auto h-100">
                    
                    <TopBar />

                    <div className="container-fluid">
                        <RouterApp />
                    </div>  
                    
                    <Footer />  
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;