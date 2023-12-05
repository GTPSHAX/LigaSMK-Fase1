const tombolNavMain = document.querySelectorAll('.btn-sec-header')
const btnHead = document.getElementById('btn-header')


// Tombol header main
function active1(index) {
    tombolNavMain.forEach(tombol => {
        tombol.classList.remove('active1')
    })
    tombolNavMain[index].classList.add('active1')
}
btnHead.addEventListener('click', btn => {
    btn.preventDefault()
    document.getElementById('pembelajaran').scrollIntoView({
        behavior: 'smooth'
    })
})