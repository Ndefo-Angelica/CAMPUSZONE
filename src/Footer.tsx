import React from "react"; 

const Footer: React.FC = () => {
    return(
        <footer className="footer">
            <div className="explore">
                <ul>
                    <span>Explore</span>
                    <li>Courses</li>
                    <li>Social Media </li>
                    <li>Chat</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="our-patners">
                <ul>
                    <span>Our Patners</span>
                    <li>IUC</li>
                    <li>ISTAMA</li>
                    <li>IUT</li>
                    <li>ESG</li>
                </ul>
            </div>
            <div className="Information">
            <ul>
                    <span>Informations</span>
                    <li>Register</li>
                    <li>Login</li>
                    <li>My plans</li>
                    <li>My courses</li>
                </ul>
        
            </div>
        </footer>
    )
}

export default Footer;