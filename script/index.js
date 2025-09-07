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
        <button class="rounded-sm hover:text-white hover:bg-[#15803d] w-full text-left py-1 px-2 cata my-1" id="cata-${cata.id}" onclick="loadCategoriTree(${cata.id})">${cata.category_name}</button>
        `;
    catagoriesContainer.appendChild(createDiv);
}

};

categories();


// Load all tree
const loadAllTree=()=>{
  fetch("https://openapi.programming-hero.com/api/plants")
  .then(res=>res.json())
  .then(data=>displayAllTree(data.plants))
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
               <div class="bg-white rounded-xl   p-4 space-y-4 h-full shadow-sm">
                <img class="rounded-lg w-full h-[300px] object-cover" src="${tree.image}" alt="" >
                <div class="space-y-3">
                  <p class="font-semibold">${tree.name}</p>
                  <p class="h-[70px] text-ellipsis overflow-hidden ">${tree.description}</p>
                  <div class="flex justify-between">
                    <p class="bg-[#DCFCE7] text-[#15803D] px-4 py-1 rounded-full">${tree.category}</p>
                    <p class="font-semibold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price}</p>
                  </div>
                 <button class= "rounded-full text-white bg-[#15803d] w-full text-center py-3 ">Add to Cart</button>
                </div>
              </div>
    `
    treeContainer.appendChild(createDiv);
  }
}

loadAllTree();
// load categoriTree function section

const loadCategoriTree=(id)=>{
  const url=`https://openapi.programming-hero.com/api/category/${id}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayAllTree(data.plants));
  removeActive();
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
