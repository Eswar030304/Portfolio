import React from "react";
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/star-outline.png'
import { Link } from 'react-scroll';

const Intro= () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Eswar</span><br /> Student </span>
                <p className="introPara">I am a student who is learning MERN full stack and AWS,<br />im very excited to learn new languages and skills</p>
                <Link><button className="btn"><img src={btnImg} alt="star" className="btnImg"/>Rate this website</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}
export default Intro;