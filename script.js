const questions = document.querySelectorAll('.question__wrapper');

// loop through each question and add an event listener
questions.forEach(question => {
  const questionArrow = question.querySelector('.arrow');
  const title = question.querySelector('.question');
  questionArrow.classList.toggle('rotate');

  // event listener for the questions
  title.addEventListener('click', () => {
    showAnswer();
  });

  function showAnswer() {
    questions.forEach(item => {
      if (item != question) {
        item.classList.remove('active');
      }
    });
    question.classList.toggle('active');
  }
});
