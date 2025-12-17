let products=document.getElementById('tv_ele_products')
let brandName=document.getElementById('tv_ele_companyNames')
let ele_category=document.getElementById('ele_category')
const lowToHighLabel = document.getElementById('lowToHigh');
const highToLowLabel = document.getElementById('highToLow');



function TV_EleData(data){
    products.innerHTML=''
    data.forEach(ele => {
     
        let div=document.createElement('div')
        let pic=document.createElement('img')
        let name=document.createElement('p')
        let price=document.createElement('p')
   


pic.src=ele.img;
name.textContent=ele.name;
price.textContent=ele.price;


div.append(pic,name,price)
products.appendChild(div)
    });
}



ele_category.addEventListener('change',()=>{
    fetch('./db.json')
.then((res)=>res.json())
.then((data)=>{
    let Filter=data.electronics.filter((ele)=>(ele_category.value===""||ele.subcategory===ele_category.value))
    TV_EleData(Filter)
})
.catch((err)=>console.log(err))
})

fetch('./db.json')
.then((res)=>res.json())
.then((data)=>{
    TV_EleData(data.electronics)
})
.catch((err)=>console.log(err))