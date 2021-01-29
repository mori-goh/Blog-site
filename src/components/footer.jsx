import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <p>Landing Page Designed by Vivek and Ashish</p>
            <p>copyright © {currentYear}</p>
        </div>
    );
}

export default Footer;