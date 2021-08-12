const btn = document.querySelector('#btn');
const div = document.getElementById('container')

btn.addEventListener('click', () => {
    div.classList.toggle('show')
})