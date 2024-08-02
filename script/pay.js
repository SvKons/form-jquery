'use strict';

$(document).ready(function () {
    const radioButtons = $('input[name="payment-option"]');
    const organizationBlock = $('.form__block__number');
    const detailsBlock = $('.form__details-info');

    radioButtons.change(function () {
        if ($(this).val() === 'option1') {
            organizationBlock.addClass('active');
            detailsBlock.removeClass('active');
        } else if ($(this).val() === 'option2') {
            detailsBlock.addClass('active');
            organizationBlock.removeClass('active');
        }
    });
});
