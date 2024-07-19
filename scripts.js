document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('multi-step-form');
  const nextButtons = form.querySelectorAll('.btn-next');
  const prevButtons = form.querySelectorAll('.btn-prev');
  const steps = form.querySelectorAll('.form-step');

  let currentStep = 0;

  function showStep(step) {
    steps.forEach((stepElement, index) => {
      stepElement.classList.toggle('form-step-active', index === step);
    });
  }

  nextButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentStep++;
      if (currentStep >= steps.length) {
        currentStep = steps.length - 1;
      }
      showStep(currentStep);
    });
  });

  prevButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentStep--;
      if (currentStep < 0) {
        currentStep = 0;
      }
      showStep(currentStep);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted!');
    // Add form submission logic here
  });

  showStep(currentStep);
});

