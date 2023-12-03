let left=document.getElementsByClassName('bi-caret-left-fill')[0]
let right=document.getElementsByClassName('bi-caret-right-fill')[0]
let cards=document.getElementsByClassName('cards')[0];

left.addEventListener('click', ()=>{
    cards.scrollLeft -=140;
})
right.addEventListener('click', ()=>{
    cards.scrollLeft +=140;
})


let poster=document.getElementById('poster');
let title=document.getElementById('title');
let price_count=document.getElementById('price_count');

Array.from(document.getElementsByClassName('card')).forEach((ele,i)=>{
//    console.log(ele)  
ele.addEventListener('click', ()=>{
    poster.src=ele.getElementsByTagName('img')[0].src;
    title.innerText=ele.getElementsByTagName('h5')[0].innerText
    price_count.innerText=ele.getElementsByTagName('h4')[0].innerText
})
})


function search (){
    const searchbox= document.getElementById('search-item').value.toUpperCase();
    const storeitems =document.getElementById('product_list');
    const product=document.querySelectorAll('.card')
    const productname=document.getElementsByTagName('h5')

    for(var i=0;i<productname.size();i++){
        let match = product[i].getElementsByTagName('h5')[0];

        if (match) {
            let textvalue=match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display ="";
            }
            else{
                product[i].style.display ="none";
            }
        }
    }
}