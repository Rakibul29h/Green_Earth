// categories section
const categories =  () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res=>res.json())
    .then(data=>displayCatagories(data.categories))
};

const displayCatagories = (catas) => {
  const catagoriesContainer = document.getElementById("catagoriesContainer");
  catagoriesContainer.innerHTML = "";
  for (const cata of catas) {
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
        <button class="rounded-sm hover:text-white hover:bg-[#13c052] w-[90%] mx-auto md:w-full text-center md:text-left py-1 px-2 cata my-1" id="cata-${cata.id}" onclick="loadCategoriTree(${cata.id})">${cata.category_name}</button>
        `;
    catagoriesContainer.appendChild(createDiv);
}
};

categories();

const loader=(value)=>
{
  const loader=document.getElementById("loader");
  const treeSection=document.getElementById("treeSection");
  if(value==true)
  {
    loader.classList.remove("hidden")
    treeSection.classList.add("hidden")
  }else{
    loader.classList.add("hidden")
    treeSection.classList.remove("hidden");
  }
}


// Load all tree
const loadAllTree=async ()=>{
  loader(true)
  const res= await fetch("https://openapi.programming-hero.com/api/plants")
 const data=await res.json()
 displayAllTree(data.plants)
 loader(false)
 const x=document.getElementById("x")
 x.classList.add("active")

}

// Display all tree function section

const displayAllTree=(trees)=>{
  
  const treeContainer=document.getElementById("cardContainer");
  treeContainer.innerHTML="";
  for(const tree of trees)
  {
    const createDiv=document.createElement("div");
    createDiv.innerHTML=`
               <div class="bg-white rounded-xl   p-4 space-y-4 h-[560px] shadow-sm">
                <img class="rounded-lg w-full h-[300px] object-cover" src="${tree.image}" alt="" >
                <div class="space-y-3">
                  <p class="font-semibold" onclick="details(${tree.id})">${tree.name}</p>
                  <p class="line-clamp-3 ">${tree.description}</p>
                  <div class="flex justify-between">
                    <p class="bg-[#DCFCE7] text-[#15803D] px-4 py-1 rounded-full">${tree.category}</p>
                    <p class="font-semibold">৳${tree.price}</p>
                  </div>
                 <button class= "rounded-full text-white bg-[#15803d] w-full text-center py-3 " onclick="addCart('${tree.name}',${tree.price})">Add to Cart</button>
                </div>
              </div>
    `
    treeContainer.appendChild(createDiv);
  }
  
}

const cartsData=[]
// add to cart section
const addCart=(name,price)=>{
 let cartData={
  name:name,
  price:price
 }
 cartsData.push(cartData)
 alert(`${name} has been added to the cart`)
 showCarts();
  totalPrice();
}
// show carts section
const showCarts=()=>{
   let cartsContainer=document.getElementById("cartsContainer")
 cartsContainer.innerHTML="";
 let id=1;
 for(const singleCart of cartsData)
 {
    const createDiv=document.createElement("div");
    createDiv.innerHTML=`
    <div class="bg-[#F0FDF4] rounded-sm my-1 p-3 flex items-center justify-between" id="${id}">
                  <div>
                    <p class="font-bold">${singleCart.name}</p>
                    <p class="">৳${singleCart.price}</p>
                  </div>
                  <div>
                    <i onclick="removeCart(${id})" class="fa-solid fa-xmark"></i>
                  </div>
                </div>
    `
    id++;
    cartsContainer.appendChild(createDiv);
  }
}
// total Price
const totalPrice=()=>{
  let sum=0;
  for(const cart of cartsData)
  {
    sum+=cart.price;
  }
  let cartsContainer=document.getElementById("cartsContainer")
  if(sum==0)
  {
    cartsContainer.innerHTML="";
  }else{
      const divContent=document.createElement("div");
     divContent.innerHTML=`     
     <div class="mt-2 text-right border-t-2 border-gray-300">
                <p>total: ${sum}</p>
              </div>`
    cartsContainer.appendChild(divContent);
  }

}

// remove from cart
const removeCart=(id)=>{
  cartsData.splice(id-1,1);
  showCarts();
  totalPrice();
}


// details all section

const details=(id)=>{
  let url=`https://openapi.programming-hero.com/api/plant/${id}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>showDetails(data.plants));
}
// showDetails
const showDetails=(details)=>
{
  const modal=document.getElementById("modalId")
  const modalContent=document.getElementById("modalContent");
  modalContent.innerHTML=`
      <h2 class="font-bold text-2xl">${details.name}</h2>
    <img src="${details.image}" alt="" class="rounded-lg w-full h-[250px] object-cover " >
    <p class="text-lg"><span class="font-semibold">Category:</span>${details.category}</p>
    <p class="text-lg"><span class="font-semibold">Price:</span>৳${details.price}</p>
    <p class="text-lg"><span class="font-semibold">Description:</span>${details.description}</p>

    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  `;
  modal.showModal();
}
loadAllTree();
// load categoriTree function section

const loadCategoriTree= async (id)=>{
  loader(true);
  const url=`https://openapi.programming-hero.com/api/category/${id}`
  const res=await fetch(url)
  const data=await res.json();
  displayAllTree(data.plants)
  removeActive();
  loader(false)
  const x=document.getElementById(`cata-${id}`)
  x.classList.add("active");

}

// remove active style

const removeActive=()=>{
  const selectCategories=document.querySelectorAll(".cata")
  for(const element of selectCategories)
  {
    element.classList.remove("active")

    
  }
}

const active=()=>{
   const selectCategories=document.querySelectorAll(".cata")
   selectCategories.addEventListener("click",(e)=>{
    e.target.classList.add("active");
   })
}


const catagorySm=()=>{
  const catagory=document.getElementById("mainCata");
  const cart=document.getElementById("yourCart");
  cart.classList.add("hidden");
  catagory.classList.toggle("hidden");

}
const cartSm=()=>{
  const catagory=document.getElementById("mainCata");
  const cart=document.getElementById("yourCart");
  catagory.classList.add("hidden");
  cart.classList.toggle("hidden");

}