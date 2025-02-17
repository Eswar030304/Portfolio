import React from "react";
import './contactme.css';
import instagramlogo from '../../assets/insta_logo.png';
import youtubelogo from '../../assets/youtube_png.png';
import twitterlogo from '../../assets/twitter_logo.png';


const Contact = () => {
    return (

        <section id="contactPage">
            <div id="contact" className="container">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Thank you for taking the time to provide your feedback!<br/> Your insights are valuable in enhancing my portfolio</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name"/>
                    <input type="email" className="email" placeholder="Your E-mail"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Suggestion"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={instagramlogo} alt="instagram" className="link" />
                        <img src={youtubelogo} alt="youtube" className="link" />
                        <img src={twitterlogo} alt="twitter" className="link" />  
                    </div>
                    </form>
            </div>
        </section>
    )

}

export default Contact