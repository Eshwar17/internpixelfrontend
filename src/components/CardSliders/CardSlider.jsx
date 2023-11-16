import React from "react";
import "./CardSlider.css";

const CardSlider = () => {
  return (
    <>
      <div className="main1">
        <ul className="cards1">
          <li className="cards1_item">
            <div className="card1">
              <div className="card1_image">
              <span className="note1">Most requested</span>
                <img src="https://www.iimtindia.net/Blog/wp-content/uploads/2021/08/Data-Science-Future-scope.jpg" />
              </div>
              <div className="card1_content">
                <h2 className="card1_title">
                  Data Science Explorer: Unleashing Insights Through Internship
                </h2>
                <div className="card1_text">
                  <p>
                    <strong>Launch Date: Coming Soon</strong>
                  </p>
                  <p>
                    Introducing the Most Awaited Internship on Data Science:
                    Unleash Your Potential!
                  </p>
                  <hr />
                  <p>
                    Are you ready to dive into the exciting world of data
                    science? Get ready, because we are thrilled to announce the
                    launch of the most awaited internship on data science! This
                    is your golden opportunity to gain hands-on experience,
                    unlock valuable insights, and embark on a transformative
                    journey in the realm of data analytics. As businesses
                    increasingly rely on data-driven decision-making, the demand
                    for skilled data scientists is skyrocketing. With our
                    cutting-edge internship program, you'll acquire the
                    essential knowledge and skills to tackle complex data
                    challenges and become a sought-after professional in this
                    rapidly evolving field.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="cards1_item">
            <div className="card1">
              <div className="card1_image">
              <span className="note1">Sizzling discount</span>
                <img src="https://wallpapercave.com/wp/wp8903936.jpg" />
              </div>
              <div className="card1_content">
                <h2 className="card1_title">
                  MERN Stack Maestro: Embark on an Internship Journey of
                  Full-Stack Web Development
                </h2>
                <div className="card1_text">
                  <p>
                    <strong>Launch Date: Coming Soon</strong>
                  </p>
                  <p>
                    Introducing the Most Awaited MERN Stack Internship: Unlock
                    the Power of Full-Stack Web Development!
                  </p>
                  <hr />
                  <p>
                    Get ready to elevate your web development skills to new
                    heights because the moment you've been waiting for has
                    arrived! We are thrilled to announce the upcoming launch of
                    the most awaited internship on MERN Stack. This is your
                    golden opportunity to immerse yourself in the world of
                    full-stack web development, master cutting-edge
                    technologies, and unlock the potential to create dynamic and
                    interactive web applications.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="cards1_item">
            <div className="card1">
              <div className="card1_image">
                <span className="note1">Popular choice</span>
                <img src="data:image/jpeg;base64,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" />
              </div>
              <div className="card1_content">
                <h2 className="card1_title">
                  Java Mastery: Ignite Your Career with a Core Java Internship
                </h2>
                <div className="card1_text">
                  <p>
                    <strong>Launch Date: 15-05-2023</strong>
                  </p>
                  <p>
                    Launched the Most Awaited Java Internship: Ignite Your
                    Coding Journey!
                  </p>
                  <hr />
                  <p>
                    Are you ready to dive into the world of Java programming?
                    Brace yourself, because we are excited to announce the
                    upcoming launch of the most awaited internship on Java! This
                    is your chance to immerse yourself in the power of Java,
                    master the fundamentals, and embark on a transformative
                    coding journey that will set the stage for a successful
                    career in software development.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="cards1_item">
            <div className="card1">
              <div className="card1_image">
              <span className="note1">Exclusive🔥</span>
                <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149387396.jpg?size=626&ext=jpg&ga=GA1.1.136392163.1683044531&semt=ais" />
              </div>
              <div className="card1_content">
                <h2 className="card1_title">
                  DevOps Dynamo: Unleash Your Potential with a Core DevOps
                  Internship
                </h2>
                <div className="card1_text">
                  <p>
                    <strong>Launch Date: Coming Soon</strong>
                  </p>
                  <p>
                    Introducing the Most Awaited DevOps Internship: Empower Your
                    Journey of Continuous Integration and Delivery!
                  </p>
                  <hr />
                  <p>
                    Are you ready to revolutionize software development
                    practices and enhance collaboration between development and
                    operations teams? Get ready, because the moment you've been
                    waiting for is almost here! We are thrilled to announce the
                    upcoming launch of the most awaited internship on DevOps.
                    This is your golden opportunity to immerse yourself in the
                    world of DevOps, master cutting-edge tools and
                    methodologies, and pave the way for seamless and efficient
                    software delivery.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="cards1_item">
            <div className="card1">
              <div className="card1_image">
              <span className="note1">Buzzworthy❤️‍🔥</span>
                <img src="https://img.freepik.com/free-vector/coding-round-composition_1284-40752.jpg?size=626&ext=jpg&ga=GA1.1.136392163.1683044531&semt=ais" />
              </div>
              <div className="card1_content">
                <h2 className="card1_title">
                  Testing Trailblazer: Embark on a Core Software Testing
                  Internship Adventure
                </h2>
                <div className="card1_text">
                  <p>
                    <strong>Launch Date: Coming Soon</strong>
                  </p>
                  <p>
                    Introducing the Most Awaited Software Testing Internship:
                    Unleash Your Testing Prowess!
                  </p>
                  <hr />
                  <p>
                    Are you passionate about ensuring software quality and
                    delivering flawless user experiences? Brace yourself,
                    because the moment you've been eagerly anticipating is just
                    around the corner! We are thrilled to announce the upcoming
                    launch of the most awaited internship on software testing.
                    This is your golden opportunity to immerse yourself in the
                    world of testing, master industry-leading methodologies, and
                    pave the way for a successful career in ensuring software
                    reliability.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="cards1_item">
            <div className="card1">
              <div className="card1_image">
              <span className="note1">Don't miss🔥</span>
                
                <img src="https://img.freepik.com/free-vector/isometric-characters-illustration-human-resources-doing-interview_1284-24421.jpg?size=626&ext=jpg&ga=GA1.2.136392163.1683044531&semt=ais" />
              </div>
              <div className="card1_content">
                <h2 className="card1_title">
                  Interview Success Navigator: Empowering You with a
                  Comprehensive Interview Preparation Guide Internship
                </h2>
                <div className="card1_text">
                <p>
                    <strong>Launch Date: Coming Soon</strong>
                  </p>
                  <p>
                    Introducing the Most Awaited Interview Guidance Internship:
                    Unlock Your Potential and Ace Your Next Interview!
                  </p>
                  <hr />
                  <p>
                    Are you ready to conquer your interview fears, impress
                    recruiters, and land your dream job? Get ready, because the
                    moment you've been waiting for is just around the corner! We
                    are thrilled to announce the upcoming launch of the most
                    awaited internship on interview guidance. This is your
                    golden opportunity to immerse yourself in the world of
                    interview preparation, master essential techniques, and gain
                    the confidence to excel in any interview scenario.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CardSlider;
