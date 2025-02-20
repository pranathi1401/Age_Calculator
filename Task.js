
  function calculateAge() {
  const dob = document.getElementById('dob').value;
  const resultElement = document.getElementById('result');

  if (!dob) {
    resultElement.textContent = "Please select a date of birth.";
    return;
  }

  const dobDate = new Date(dob);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - dobDate.getFullYear();
  const monthDifference = currentDate.getMonth() - dobDate.getMonth();
  const dayDifference = currentDate.getDate() - dobDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  resultElement.textContent = `Your age is: ${age} years old`;
}