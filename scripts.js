function nextStep() {
    if ($('#multiStepForm').find('.carousel-item.active').index() === 2) {
        generatePreview();
    }
    $('#multiStepForm').carousel('next');
}

function prevStep() {
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
