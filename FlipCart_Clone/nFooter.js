let footer = document.getElementById('footer')

fetch('/nFooter.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data;
})