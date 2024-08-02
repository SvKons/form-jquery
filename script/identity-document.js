'use strict';

$(document).ready(function () {
    $('#document-type')
        .change(function () {
            if ($(this).val() === 'passport') {
                $('#series-required').show();
            } else {
                $('#series-required').hide();
            }
        })
        .change();
});
