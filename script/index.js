// categories section
const categories =  () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res=>res.json())
    .then(data=>displayCatagories(data.categories))
};

const displayCatagories = (catas) => {
  const catagoriesContainer = document.getElementById("catagoriesContainer");
  catagoriesContainer.innerHTML = ` <div>
                                      <button class= "rounded-sm hover:text-white hover:bg-[#15803d] w-full text-left py-1 px-2 cata" onclick="loadAllTree()">All Trees</button>
                                    </div>`;
  for (const cata of catas) {
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
        <button class="rounded-sm hover:text-white hover:bg-[#15803d] w-full text-left py-1 px-2 cata" onclick="loadCategoriTree(${cata.id})">${cata.category_name}</button>
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
  const url=``
}

