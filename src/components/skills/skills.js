import React from "react";
import './skills.css'
import figma from '../../assets/figma.png'
import webDesign from '../../assets/webdesign.png'
import aws from '../../assets/aws.png'

const Skills = () => {
    return(
        <section id="skills">
            <span className="skillTitle">What I'm Learning</span>
            <span className="skillDesc">I'm passionately diving into web development, app development, and AWS, driven by a strong desire to evolve into a skilled software developer.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src= {figma} alt="figma" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Figma</h2>
                        <p>Demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src= {webDesign} alt="webDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>Demo</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src= {aws} alt="aws" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Amazon Web Services</h2>
                        <p>Demo</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;