let form = document.getElementById('sign_up_form');
let Name = document.getElementById('signup_name');
let number = document.getElementById('signup_number');
let password = document.getElementById('signup_password');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (Name.value === '' || number.value === '' || password.value === '') {
        alert('Please fill all boxes!');
    } else {
            let obj = {
                Name: Name.value,
                number: number.value,
                password: password.value
            };

            localStorage.setItem('userdetails', JSON.stringify(obj));
            localStorage.setItem('istrue', JSON.stringify('authenticated'));
            
            Name.value = '';
            number.value = '';
            password.value = '';
            window.location.href = 'index.html';
        }
    
});
