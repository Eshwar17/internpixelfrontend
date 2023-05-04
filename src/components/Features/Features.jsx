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
      <h1 class="h1">
        Reliable, efficient delivery
        <span>Powered by Technology</span>
      </h1>
      <p>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </div>

    <div class="page2">
      <div>
        <div class="box b1">
          <h2>Supervisor</h2>
          <p>Monitors activity to identify project roadblocks</p>
          <img class="img" src={supervisor} alt="Supervisor" />
        </div>
      </div>

      <div>
        <div class="box b2">
          <h2>Team Builder</h2>
          <p>
            Scans our talent network to create the optimal team for your project
          </p>
          <img class="img" src={teamBuilder} alt="team-builder" />
        </div>

        <div class="box b4">
          <h2>Karma</h2>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img class="img" src={karma} alt="Karma" />
        </div>
      </div>

      <div>
        <div class="box b3">
          <h2>Calculator</h2>
          <p>
            Uses data from past projects to provide better delivery estimates
          </p>
          <img class="img" src={calculator} alt="Calculator" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Features