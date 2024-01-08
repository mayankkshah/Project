const button = document.querySelector('#no');
button.addEventListener('mouseover', function () {
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});

$('#yes').on('click', function () {
    $('.finally').show();
    $('#container').hide();
})

