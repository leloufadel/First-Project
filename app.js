fetch('https://fakestoreapi.com/products').then((data)=>{
return data.json();

}).then((c)=>{
 let mydata="";
 c.map((values)=>{
    mydata+=`<div class="card">
    <h1 class="Title">${values.title}</h1>
    <img src="${values.image}" alt="img" class="images">
    <p>${values.description}</p>
    <p class="Catagory">${values.category}</p>
    <p class="Price">${values.price}</p>
</div>`;
 });
 document.getElementById("cards").innerHTML=mydata;
}).catch((err)=>{ 
    console.log(err);
});
 
