const form = document.querySelector('form');
form.addEventListener('submit', function(i) {
  i.preventDefault();
  
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if (!height || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please provide a valid height';
    showresult(result);
  } else if (!weight || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please provide a valid weight';
    showresult(result);
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `Your BMI is <span>${bmi}</span> and you are underweight`;
      showresult(result);
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `Your BMI is <span>${bmi}</span> and you are normal weight`;
      showresult(result);
    } else if (bmi > 24.9) {
      result.innerHTML = `Your BMI is <span>${bmi}</span> and you are overweight`;
      showresult(result);
    }
  }
});

function showresult(element) {
  // Set initial style for sliding effect
  element.style.display = 'block';
  element.style.border = '2px solid #000'; // Add border
  element.style.padding = '10px'; // Add padding
  element.style.marginTop = '10px';
  element.style.opacity = '0';
  element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  element.style.transform = 'translateY(-20px)';

  // Trigger the sliding effect
  setTimeout(() => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, 10);
}
