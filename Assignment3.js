document.addEventListener("DOMContentLoaded", function() {
    let isAuthenticated = false; // Initially, the user is not authenticated
  
    // Function to simulate authentication
    function authenticate() {
      // Simulate authentication process 
      isAuthenticated = true; // Set isAuthenticated to true if authentication is successful
    }
  
    // Function to start the quiz
    function startQuiz() {
      const quizForm = document.getElementById('quiz-form');
      const resultDiv = document.getElementById('result');
  
      quizForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        let score = 0;
  
        // Check answers
        const answers = {
          q1: 'rome', // Italy
          q2: 'paris', // France
          q3: 'tokyo', // Japan
          q4: 'canberra', // Australia
          q5: 'ottawa', // Canada
          // Add more answers for other countries
        };
  
        for (let i = 1; i <= Object.keys(answers).length; i++) {
          const selectedAnswer = document.querySelector(`input[name=q${i}]:checked`);
          if (selectedAnswer) {
            if (selectedAnswer.value === answers[`q${i}`]) {
              score++;
              selectedAnswer.parentElement.style.color = 'green'; // Provide immediate feedback
            } else {
              selectedAnswer.parentElement.style.color = 'red'; // Provide immediate feedback
            }
          }
        }
  
        // Display result
        resultDiv.innerHTML = `You scored ${score} out of ${Object.keys(answers).length}.`;
  

      });
    }
  
    // Check if user is authenticated before starting the quiz
    authenticate(); 
    if (isAuthenticated) {
      startQuiz();
    } else {
      const quizForm = document.getElementById('quiz-form');
      quizForm.innerHTML = '<p>Authentication failed. Please login to take the quiz.</p>';
    }
  });