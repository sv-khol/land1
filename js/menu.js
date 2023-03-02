document.querySelector('.burger').onclick = function () {
    console.log('qq')
    document.querySelector('.menu').classList.toggle('show')
    if (document.querySelector('.menu').classList.contains('show')) {
        document.querySelector('.burger img').src = 'img/close1.svg'
    } else {
        document.querySelector('.burger img').src = 'img/burger1.svg'
    }

}