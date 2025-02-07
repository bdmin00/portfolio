import './about.scss';
import { ReactComponent as NewTabIcon } from '../../../assets/icons/new-tab.svg';
import { ReactComponent as CopyIcon } from '../../../assets/icons/copy.svg';
import { ReactComponent as CheckIcon } from '../../../assets/icons/check.svg';
import { useState } from 'react';
import { Tag } from '../../components/tag/tag';

// import SelfPortrait from '../../assets/About/Bryan-Wall.jpg';

const show = {
  opacity: 1,
  visibility: 'visible',
}

const hide = {
  opacity: 0,
  visibility: 'hidden',
}

function About() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="About">
      <div className="AboutBox">
        <h2>About</h2>

        <div className="Content">

          {/* <div className="Portrait">
            <div className="PortraitImage">
              <img src={SelfPortrait} alt="Self Portrait"/>
            </div>
          </div> */}

          <div className="Bio">
            {/* <p>
              I am interested
            </p> */}
            <p>
              I'm first-year PhD student at <Tag name="ucsd">UC San Diego</Tag>, advised by Haijun Xia.
            </p>
            <p>
              My goal is to give end-users more control over their interface. End-users should be able to <b>easily</b>, <b>expressively</b>, and <b>broadly</b> customize their interface, without complex code and without searching for settings in a large system settings page.
            </p>
            <p>
              I'm looking into interaction techniques—through foundational design patterns and generative AI—that gives end-users this control to customize their interface.
            </p>
            <p>
              If you'd like to chat, please feel free to email me!
            </p>
              {/* I explore ways to improve user productivity within information workflows. */}
            {/* <p>
              I am a fourth-year undergraduate student at <a className="ucsd" href="https://ucsd.edu" target="_blank" rel="noreferrer">UC San Diego</a> pursuing Computer Science. 
              I am a part of the <a className="creativity" href="https://creativity.ucsd.edu/" target="_blank" rel="noreferrer">Creativity Lab</a>, where I build systems to improve workflows for productivity.
              I have been particularly interested in ways to enable greater manipulation and organization of workspaces to better support multi-application workflows.
            </p> */}
            {/* <p>
              Previously, I was part of the <a className="t4g" href="https://tech4good.soe.ucsc.edu/#/" target="_blank" rel="noreferrer">Tech4Good Lab</a>, where I developed web applications for social computing research.
            </p> */}
            {/* <p>
              I discovered my interest in app development for productivity while I developed social computing web apps in professor David T. Lee's lab.
              I was introduced to many differnt uses of online platforms to support growth in communities.
            </p> */}
            {/* <p>
              I began my creative journey with a curiosity for what aesthetics means to me. Along the way, I became inspired by the minimalist era, and I now strive to produce work that is clean yet deep in emotion.
            </p> */}
            {/* <p>
              Scroll up to see my <b>live status</b>! If you want to learn how I did this, <Link to="/docs/live-status"><u>click here</u></Link>.
            </p> */}
          </div>

          <div className='links'>
            <p className='email'
              onClick={(event) => {
                navigator.clipboard.writeText('bdmin@ucsd.edu');
                setCopied(true);
                const emailCopy = event.target.querySelector('.email-copy');
                if (emailCopy) emailCopy.style.opacity = 1;
                setTimeout(() => {
                  if (emailCopy) emailCopy.style.opacity = 0;
                }, 900);
                setTimeout(() => {
                  setCopied(false);
                }, 1000);
              }}
              onMouseEnter={(event) => {
                const emailCopy = event.target.querySelector('.email-copy') || event.target.parentElement;
                if (emailCopy) emailCopy.style.opacity = 1;
              }}
              onMouseLeave={(event) => {
                const emailCopy = event.target.querySelector('.email-copy') || event.target.parentElement;
                if (!copied) emailCopy.style.opacity = 0;
              }}
            >
              bdmin@ucsd.edu&nbsp;
              <div className='email-copy'>
                <CheckIcon style={copied ? show : hide}/>
                <CopyIcon style={copied ? hide : show}/>
              </div>
            </p>
            {/* <br/> */}
            <a href="https://scholar.google.com/citations?user=12yN6_gAAAAJ&hl=en/" target="_blank" rel="noreferrer">Google Scholar <NewTabIcon/></a>
            <a href="https://twitter.com/bryandmin/" target="_blank" rel="noreferrer">Twitter <NewTabIcon/></a>
            <a href="https://github.com/bdhmin/" target="_blank" rel="noreferrer">GitHub <NewTabIcon/></a>
            <a href="https://www.linkedin.com/in/bryanmin/" target="_blank" rel="noreferrer">LinkedIn <NewTabIcon/></a>
          </div>
        </div>

        <div className="More">
          {/* <div className="Socials">
            <div className="Links">
              <a href="https://www.linkedin.com/in/bryan-min-72108a19b/" target="_blank" rel="noreferrer"><h6>LinkedIn</h6></a>
              <a href="https://github.com/bdmin00" target="_blank" rel="noreferrer"><h6>GitHub</h6></a>
              <a href="https://vsco.co/bryanmin/gallery" target="_blank" rel="noreferrer"><h6>VSCO</h6></a>
              <a href="mailto: bryandhmin@gmail.com"><h6>Email</h6></a>
            </div>
          </div> */}
          <div className="Portrait">
            {/* <img className="PortraitImage" src={SelfPortrait} alt="Self Portrait"/> */}
          </div>
        </div>
        {/* <Socials /> */}

      </div>

    </div>
  )
}

export default About