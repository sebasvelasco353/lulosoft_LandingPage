// Cambiar el color d ela barra cuando hacen scroll
$(function () {
    $(document).scroll(function () {
        $(".navbar").toggleClass('scrolled', $(this).scrollTop() > $(".navbar").height());
    });
});