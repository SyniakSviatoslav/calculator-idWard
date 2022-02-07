const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.getElementById('signup');
const perfomanceWeight1 = form.elements['perfomanceWeight-1'];
const  perfomanceScore1 = form.elements['perfomanceScore-1'];





form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();
     console.log(perfomanceWeight1.value, perfomanceScore1.value)
});
