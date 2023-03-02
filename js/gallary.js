let list = document.querySelector('.review-flex')

document.querySelector('#prev').onclick = function () {
    let left = window.getComputedStyle(list).left
    console.log('before ' + left)
    list.style.left = (parseInt(left) - 35) + 'px'
    left = window.getComputedStyle(list).left
    console.log('after ' + left)
}

document.querySelector('#next').onclick = function () {
    let left = window.getComputedStyle(list).left
    console.log('before ' + left)
    list.style.left = (parseInt(left) + 35) + 'px'
    left = window.getComputedStyle(list).left
    console.log('after ' + left)
}