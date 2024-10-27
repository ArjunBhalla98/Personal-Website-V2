import React, { Component, setState } from 'react';
import './About.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import 'react-tabs/style/react-tabs.css'
import arjun from '../graphics/arjun_norway.jpeg'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Projectcard from '../components/Projectcard/Projectcard'

class About extends Component {

  constructor(props) {
    super(props)
    this.state = { tabIndex: 0 }
    this.changeTabIndex = this.changeTabIndex.bind(this)
  }

  changeTabIndex(idx) {
    this.setState({ tabIndex: idx })
    return true
  }

  render() {
    return (
      <div className='Page'>
        <div id='IntroSection'>
          <div id='About'>
            <div id='LeftInternal'>
              <div id='photo'>
                <img src={arjun} id='ProfilePic' />
              </div>
              <h1>Arjun Bhalla</h1>
              <div id='mediaDiv'>
                <ul id='media'>
                  <li><a href='https://drive.google.com/file/d/1TeD5VVDtm_C6t7Kbi0pxEX6TaSg-5Eot/view?usp=sharing' target='blank'>Resumé</a></li>
                  <li><a href='https://www.linkedin.com/in/ab-98' target='blank'>LinkedIn</a></li>
                  <li><a href='https://www.github.com/ArjunBhalla98' target='blank'>GitHub</a></li>
                  <li><a href='mailto:arjunbhallasg@gmail.com'>Email</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div id='Projects'>
            <div id='text'>
              <h2>About Me</h2>
              <p className='accentText'>Hello! I'm Arjun, and I'm a Machine Learning Engineer working on the Large Language Model (LLM) Platform team within <a href="https://www.bloomberg.com/company/engineering/" className='inTextLink' target="blank">Bloomberg's</a>  AI group. Currently our work focuses on serving a variety of LLMs at scale to various client applications,
                as well as incorporating new research and leveraging new technology to improve LLM inference. Prior to this, I worked in the Search group, where I was focused on problems such as intent classification, dense retrieval, and continuous training, among others.
                I recieved my Masters in Computer Science from Cornell Tech in 2021, and my Bachelor's in Computer Science with an external specialisation in Mathematics from Cornell right before that.                 <br /><br />
                Please explore the rest of my website to learn about my projects and other work! Outside of Computer Science, I have a wide array of interests, from golf to learning languages and experiencing new cultures. I also really enjoy reading, exploring wine and cooking, and all things music.
              </p>
            </div>

            <div id='ProjectsContainer'>
              <div class='ProjectsCarousel'>
                <h2>Select Papers</h2>
                <Projectcard title="Memory Efficient Solutions to Large-Graph MST Problems" conference="Preprint" authors="Arjun Bhalla" year="2022" link="https://arxiv.org/abs/2305.05121" />
                <Projectcard title="Exploiting Data Hierarchy as a New Modality for Contrastive Learning" conference="Preprint" authors="Arjun Bhalla*, Daniel Levenson*, Jan Bernhard*" year="2021" link="https://arxiv.org/abs/2401.03312" />
                <Projectcard title="Batch Learning From Bandit Feedback" conference="ICML, RWSDM Workshop" authors="Lequn Wang, Yiwei Bai, Arjun Bhalla, Thorsten Joachims" year="2019" link="http://www.cs.cornell.edu/people/tj/publications/wang_etal_19a.pdf" />
                <Projectcard title="The Effects of Dropout on Neural Models for Abstractive Headline Generation" conference="CS 6700 (Advanced AI) Final Project" authors="A. Bhalla, R. Slama, Y. Sahota, J. Kuang, A. Kompella" year="2018" link="https://drive.google.com/file/d/16GgnTy0iZg04shfQrRr8TXG53GscReXr/view?usp=sharing" />
              </div>
              <div class='ProjectsCarousel'>
                <h2>Select Projects</h2>
                <Projectcard title='My Dotfiles!' conference='Personal Interest' authors='Arjun Bhalla' year="2021/Perpetual" link='https://github.com/ArjunBhalla98/dotfiles/tree/master' />
                <Projectcard title='VR Office Hours' conference='CS 5650 (VR & AR) Final Project' authors='Arjun Bhalla, Xin Chen, William Zhang' year="Fall 2020" link='https://sites.google.com/cornell.edu/cs5650-projects-2020/projects/vr-office-hours?authuser=0' />
                <Projectcard title='Distributed Thermal Fall Detector' conference='CS 5412 (Cloud Computing) Final Project' authors='Arjun Bhalla, Benjamin Posnick' year="Spring 2020" link='https://github.com/benjaminmposnick/Fall-Detector' />
                <Projectcard title='Full Stack Extractive News Summariser' conference='Personal Project' authors='Arjun Bhalla' year="2019" link='https://github.com/ArjunBhalla98/News-Summariser' />
              </div>
            </div>
          </div>
        </div>
        <div id='footer'>
          Copyright © Arjun Bhalla 2024. Last Update: 27 Oct 2024.
        </div>
      </div>
    )
  }
}

export default About
