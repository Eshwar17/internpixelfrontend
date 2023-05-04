import React from 'react'
import './Faq.css';

const Faq = () => {
    const questions = document.querySelectorAll(".faq__question");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    let answer = question.nextElementSibling;
    if (answer.style.display === "block") {
      hideAnswer(question);
    } else {
      questions.forEach((question) => {
        hideAnswer(question);
      });
      displayAnswer(question);
    }
  });
});

function displayAnswer(target) {
  let answer = target.nextElementSibling;
  let arrowIcon = target.firstElementChild;
  answer.style.display = "block";
  arrowIcon.style.transform = "rotate(180deg)";
  target.style.fontWeight = "700";
}

function hideAnswer(target) {
  let answer = target.nextElementSibling;
  let arrowIcon = target.firstElementChild;
  answer.style.display = "none";
  arrowIcon.style.transform = "rotate(0deg)";
  target.style.fontWeight = "400";
}
  return (
    <main>
  <article class="faq-card">

    <div class="faq__content">
      <h1 class="faq__title">FAQ</h1>
      <div class="faq__item">
        <h2 class="faq__question">How many team members can I invite? <img class="arrow-icon" src="images/icon-arrow-down.svg" alt=""/></h2>
        <p class="faq__answer">You can invite up to 2 additional users on the Free plan. There is no limit on
          team members for the Premium plan.</p>
      </div>
      <div class="faq__item">
        <h2 class="faq__question">What is the maximum file upload size?<img class="arrow-icon" src="images/icon-arrow-down.svg" alt=""/></h2>
        <p class="faq__answer">No more than 2GB. All files in your account must fit your allotted storage space.</p>
      </div>
      <div class="faq__item">
        <h2 class="faq__question">How do I reset my password?<img class="arrow-icon" src="images/icon-arrow-down.svg" alt=""/></h2>
        <p class="faq__answer">Click “Forgot password” from the login page or “Change password” from your profile
          page.
          A reset link will be emailed to you.</p>
      </div>
      <div class="faq__item">
        <h2 class="faq__question">Can I cancel my subscription?<img class="arrow-icon" src="images/icon-arrow-down.svg" alt=""/></h2>
        <p class="faq__answer">Yes! Send us a message and we’ll process your request no questions asked.</p>
      </div>
      <div class="faq__item">
        <h2 class="faq__question">Do you provide additional support?<img class="arrow-icon" src="images/icon-arrow-down.svg" alt=""/></h2>
        <p class="faq__answer">Chat and email support is available 24/7. Phone lines are open during normal business
          hours.
        </p>
      </div>
  </div>

    <div class="imgs__container">
      <picture>
        <source media="(min-width:900px)" srcset="https://kellychi22.github.io/frontend-mentor-solutions/09-faq-accordion-card/images/bg-pattern-desktop.svg"/>
        <source media="(min-width:0px)" srcset="https://kellychi22.github.io/frontend-mentor-solutions/09-faq-accordion-card/images/bg-pattern-mobile.svg"/>
        <img class="img-bg" src="" alt=""/>
      </picture>
      <picture>
        <source media="(min-width:900px)" srcset="https://kellychi22.github.io/frontend-mentor-solutions/09-faq-accordion-card/images/illustration-woman-online-desktop.svg"/>
        <source media="(min-width:0px)" srcset="https://kellychi22.github.io/frontend-mentor-solutions/09-faq-accordion-card/images/illustration-woman-online-mobile.svg"/>
        <img class="img-woman" src="" alt=""/></picture>
    <picture>
      <source media="(min-width:900px)" srcset="https://kellychi22.github.io/frontend-mentor-solutions/09-faq-accordion-card/images/illustration-box-desktop.svg"/>
      <img class="img-box" src="" alt=""/>
    </picture>
</div>
  </article>

</main>
  )
}

export default Faq;