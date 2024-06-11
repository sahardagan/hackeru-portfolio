$(document).ready(function () {
    animateHeaderTitle();
});

function animateHeaderTitle() {
    $('.header-title').animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500, function () {
            animateHeaderTitle();
        });
    });
}
