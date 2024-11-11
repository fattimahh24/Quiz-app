function submitQuiz() {
    const form = document.getElementById('form');
    const resultDiv = document.getElementById('result');

    let score = 0;
    const totalQuestions = 5;

    // Check answers
    if (form.q1.value === "blue") score++;
    if (form.q2.value === "8") score++;
    if (form.q3.value === "paris") score++;
    if (form.q4.value === "strawberry") score++;
    if (form.q5.value === "East") score++;

    // Display result
    resultDiv.textContent = `YOU SCORED ${score} OUT OF ${totalQuestions}`;
}
console.log();