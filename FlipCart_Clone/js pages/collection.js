let collection = document.getElementById('collections')
let singleSlideBar=document.getElementById('single_slider_top')
let leftbtn=document.getElementById('leftbtn')
let rightbtn=document.getElementById('rightbtn')


let arr = [
    {
        pic: "	https://rukminim1.flixcart.com/fk-p-flap/72/72/image/38a459d6d1fc930a.png?q=100",
        Name: "mobiles & tablets",
        link: '/mobile_teb.html'
    },
    {
        pic: "	https://rukminim1.flixcart.com/fk-p-flap/72/72/image/629b0a6f61037ae6.png?q=100",
        Name: 'TV & electronics',
        link: '/tv_ele.html'
    },
    {
        pic: "	https://rukminim1.flixcart.com/fk-p-flap/72/72/image/f2802fac96dffea9.png?q=100",
        Name: "appliances",
        link: '/appliances.html'
    },
    {
        pic: "	https://rukminim1.flixcart.com/fk-p-flap/72/72/image/74f0eb6cc10e2743.png?q=100",
        Name: "fashion",
        link: '/fashion.html'
    },
    {
        pic: "https://rukminim1.flixcart.com/fk-p-flap/72/72/image/f925cfe5ecdf6acf.png?q=100",
        Name: "beauty",
        link: '/beauty.html'
    },
    {
        pic: "https://rukminim1.flixcart.com/fk-p-flap/72/72/image/38d4fbb64c70a3ff.png?q=100",
        Name: "home & kitchen",
        link: '/home_kitchen.html'
    },
    {
        pic: "https://rukminim1.flixcart.com/fk-p-flap/72/72/image/fef14e08ec83a6d7.png?q=100",
        Name: "furniture",
        link: '/furniture.html'
    },
    {
        pic: "https://rukminim1.flixcart.com/fk-p-flap/72/72/image/83de409bda2f3834.png?q=100",
        Name: "flights",
        link: 'flights.html'
    },
    {
        pic: "https://rukminim1.flixcart.com/fk-p-flap/72/72/image/711174cfe1d2fa75.png?q=100",
        Name: 'grocery',
        link: '/grocery.html'
    },
]




arr.forEach(ele => {

    let collectionbox = document.createElement('div')
    collectionbox.id = 'collectionbox'
    let linkElement = document.createElement('a');
    linkElement.href = ele.link;
    let pic = document.createElement('img')
    pic.src = ele.pic;
    let name = document.createElement('p')
    name.textContent = ele.Name;
    linkElement.append(pic, name);
    collectionbox.append(linkElement)
    collection.appendChild(collectionbox)

})

let slideBar=[
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/909a32737b6d03e0.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/cf48be669a897c51.jpeg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8c21b4c93944a503.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/eb64347ca9e81b7e.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/adc9ea24e2234359.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/c2813f01506900c5.jpeg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9b951710edcb4f87.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6cd4f58ce14ba48d.jpg?q=20",
]


let count=0;
let tt;
singleSlideBar.src=slideBar[count]

function Main(){
    singleSlideBar.src=slideBar[count%(slideBar.length)]
    count++
}

 tt=setInterval(()=>{
Main()
},1700)

rightbtn.addEventListener('click',()=>{
    count++
    singleSlideBar.src=slideBar[count%(slideBar.length)]
})
leftbtn.addEventListener('click',()=>{
    count--;
    singleSlideBar.src=slideBar[(count+slideBar.length)%(slideBar.length)]
})