let login_content = document.getElementById('login_content');
let login_content2 = document.getElementById('login_content2');
let change_content_afterLogIn = document.getElementById('change_content_afterLogIn');
let nonSignIn = document.querySelector('.signup');
let signinshow = document.querySelector('.show_after_login');
let logo = document.querySelector('.logo');
let cart= document.getElementById('cart')
let slidebarNabbar= document.getElementById('slidebarNabbar')


let getuserdetails = JSON.parse(localStorage.getItem('userdetails'));

// Retrieve istrue from local storage or default to true
let istrue=JSON.parse(localStorage.getItem('istrue'))||'false'


logo.style.cursor = 'pointer';
logo.addEventListener('click', () => {
    window.location.href = 'index.html';
});


let shortName = '';
if (getuserdetails) {
    let splitName = getuserdetails.Name.split(' ');
    for (let first of splitName) {
        let firstchar = first.charAt(0).toUpperCase() + '.';
        shortName += firstchar;
    }
}
// if sigup or login then change the content of elements ------------------
if (istrue==='authenticated') {
        login_content.innerHTML = shortName;
        nonSignIn.style.display = 'none';
        signinshow.style.display = 'block';
        login_content2.innerHTML = getuserdetails.Name;
    
}
// for mibile width logout --------------------------------------
slidebarNabbar.addEventListener('click',()=>{
        login_content.innerHTML = 'log in';
        login_content2.innerHTML = 'log in';
        signinshow.style.display = 'none';
        nonSignIn.style.display = 'block';
        window.location.href = 'index.html';
        localStorage.setItem('istrue', JSON.stringify('false'));
    
})

// for laptop width logout--------------------------------------------------------------------
change_content_afterLogIn.addEventListener('click', () => {
    login_content.innerHTML = 'log in';
    login_content2.innerHTML = 'log in';
    signinshow.style.display = 'none';
    nonSignIn.style.display = 'block';
    window.location.href = 'index.html';
    localStorage.setItem('istrue', JSON.stringify('false'));
});

