document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const languageSwitcher = document.getElementById('language-switcher');
    const body = document.body;

    languageSwitcher.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;

        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = el.getAttribute(`data-${selectedLanguage}`);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeSwitch.checked = true;
    }

    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});
$("#bth_li").click(function () {
    $(".agent").slideToggle()
})
$("#bth_li1").click(function () {
    $(".agent1").slideToggle()
})
$("#bth_li2").click(function () {
    $(".agent2").slideToggle()
})
 $("#bth_li3").click(function () {
    $(".agent3").slideToggle()
})
 $("#bth_li4").click(function () {
    $(".agent4").slideToggle()
})
 $("#bth_li5").click(function () {
    $(".agent5").slideToggle()
})
 $("#bth_li6").click(function () {
    $(".agent6").slideToggle()
})
 $("#bth_li7").click(function () {
    $(".agent7").slideToggle()
})
 $("#bth_li8").click(function () {
    $(".agent8").slideToggle()
})
 $("#bth_li9").click(function () {
    $(".agent9").slideToggle()
})
$('#word_Ed').click (function (e) {
    e.preventDefault(); 

    $('.main').addClass('hide');
    $('.main_wordEditor').addClass('active').show();
});
$('#word_inst').click (function (e) {
    e.preventDefault(); 

    $('.main').removeClass('hide');
    $('.main_wordEditor').removeClass('active').hide();
});
