function nextStep() {
    const currentIndex = $('#multiStepForm').find('.carousel-item.active').index();
    if (currentIndex === 2) {
        generatePreview();
    }
    updateStepIndicator(currentIndex + 2);
    $('#multiStepForm').carousel('next');
}

function prevStep() {
    const currentIndex = $('#multiStepForm').find('.carousel-item.active').index();
    updateStepIndicator(currentIndex);
    $('#multiStepForm').carousel('prev');
}

function generatePreview() {
    const yourInfo = document.getElementById('yourInfo').value;
    const selectPlan = document.getElementById('selectPlan').value;
    const addOns = document.getElementById('addOns').value;

    document.getElementById('preview').innerHTML = `
        <h3>Preview</h3>
        <p><strong>Your Info:</strong> ${yourInfo}</p>
        <p><strong>Select Plan:</strong> ${selectPlan}</p>
        <p><strong>Add-ons:</strong> ${addOns}</p>
    `;
}

function submitForm() {
    const yourInfo = document.getElementById('yourInfo').value;
    const selectPlan = document.getElementById('selectPlan').value;
    const addOns = document.getElementById('addOns').value;
    const summary = document.getElementById('summary').value;

    alert(`Form submitted!\nYour Info: ${yourInfo}\nSelect Plan: ${selectPlan}\nAdd-ons: ${addOns}\nSummary: ${summary}`);
}

function updateStepIndicator(step) {
    document.querySelectorAll('.step').forEach((el, index) => {
        if (index + 1 === step) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

