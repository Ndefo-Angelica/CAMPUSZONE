import React from "react";

const About: React.FC = () => {
    return (
        <section className="about">
            <h2>About <span>Campus</span>Zone</h2>
            <p>Who is <span>Campus</span>Zone?</p>
            <p>We empower students with essential resources for academic
                success. Our platform offers easy access to course materials,
                past exams and interactive tools all designed to enhance your
                learning experiences. We offer a collaborative environment
                where students can connect share knowledge and achieve their
                goals, whether you are preparing for exams, catching up on
                lessons or seeking to expand your understanding. <span>Campus</span>Zone
                is here to support your educational journey. Join our community
                and take your learning to the next level with us</p>
            <button className="btn">Join our community</button>
        </section>
    )
}

export default About;