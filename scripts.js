$(document).ready(function () {
    $('#bootstrapForm').submit(function (event) {
        event.preventDefault();
        var extraData = {};
        $('#bootstrapForm').ajaxSubmit({
            data: extraData,
            dataType: 'jsonp',
            error: function () {
                alert('Form Submitted. Thanks.');
                // Optionally redirect the user to a thank-you page
                // window.location = 'http://www.mydomain.com/thankyoupage.html';
            }
        });
    });
});

