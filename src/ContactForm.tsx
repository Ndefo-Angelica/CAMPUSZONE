import React from "react";

const ContactForm: React.FC = () => {
    return(
        <section className="contact-form">
            <h2>Contact With us</h2>
            <form>
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Your email"/>
                <input type="text" placeholder="School" />
               <textarea placeholder="Your comments"></textarea>
               <button className="btn">Send your message</button>
            </form>
        </section>
    )
}

export default ContactForm;