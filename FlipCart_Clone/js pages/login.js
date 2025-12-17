let form = document.getElementById('login_form');
let Name = document.getElementById('signup_name');
let password = document.getElementById('signup_password');

let userdetailforlogin = JSON.parse(localStorage.getItem('userdetails')) || {};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (Name.value === '' || password.value === '') {
        alert('Please fill all boxes!');
    } else {
        if (Name.value.toLowerCase().trim() === userdetailforlogin.Name.toLowerCase().trim() && password.value.toLowerCase().trim() === userdetailforlogin.password.toLowerCase().trim()) {
            // login_content.innerHTML = userdetailforlogin.Name;

            // Update the flag in local storage
            localStorage.setItem('istrue', JSON.stringify('authenticated'));
            window.location.href = 'index.html';
        }else{
            alert('please fill correct details')
        }
    }
});


