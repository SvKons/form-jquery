'use strict';

$(document).ready(function () {
    const attachButton = $('#attachButton');
    const fileInput = $('#fileInput');

    attachButton.click(function (event) {
        event.preventDefault();
        fileInput.click();
    });
});
