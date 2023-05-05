import React from 'react'
import './Features.css';
import supervisor from './img/icon-supervisor.png';
import karma from './img/icon-karma.png';
import calculator from './img/icon-calculator.png';
import teamBuilder from './img/icon-team-builder.png';

const Features = () => {
  return (
    <>
    <div class="page1">
      {/* <h1 class="h1">
      Internpixel 
        <span> Your Gateway to Landing the Perfect Internship!</span>
      </h1> */}
      {/* <p>
      Internpixel is the ultimate platform for students and recent graduates to find internship opportunities across a wide range of industries. Our platform connects aspiring interns with top companies, offering them invaluable experience, skills, and contacts to jumpstart their careers. 
      </p> */}
    </div>

    <div class="page2">
      <div>
        <div class="box b1">
          <h2>Multiple Technologies</h2>
          <p>Internpixel's multiple technologies feature offers students and recent graduates the opportunity to explore a wide range of technologies and gain hands-on experience in cutting-edge tools and software. Join us today to broaden your technical skills and enhance your employability!</p>
          <img class="img" src={supervisor} alt="Supervisor" />
        </div>
      </div>

      <div>
        <div class="box b2">
          <h2>Virtual Mode</h2>
          <p>
          Internpixel's virtual mode feature allows students and recent graduates to gain valuable experience and skills from the comfort of their own homes, connecting them with top companies and internship opportunities across the world. Join us today to kickstart your career journey, no matter where you are!
          </p>
          <img class="img" src={teamBuilder} alt="team-builder" />
        </div>

        <div class="box b4">
          <h2>Dedicated Mentor</h2>
          <p>Internpixel's one-to-one mentorship feature connects students and recent graduates with experienced mentors who can provide guidance, support, and valuable industry insights to help them succeed in their chosen career paths. Join us today to unlock the power of mentorship and accelerate your career growth!</p>
          <img class="img" src={karma} alt="Karma" />
        </div>
      </div>

      <div>
        <div class="box b3">
          <h2>Client Projects</h2>
          <p>
          Internpixel's client project feature provides students and recent graduates with the opportunity to work on real-world projects for top companies, gaining hands-on experience and valuable skills to add to their resumes. Join us today to take your internship experience to the next level!
          </p>
          <img class="img" src={calculator} alt="Calculator" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Features