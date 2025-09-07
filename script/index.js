// categories section
const categories =  () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res=>res.json())
    .then(data=>displayCatagories(data.categories))
};

const displayCatagories = (catas) => {
  const catagoriesContainer = document.getElementById("catagoriesContainer");
  catagoriesContainer.innerHTML = ` <div>
                                      <button class= "rounded-sm hover:text-white hover:bg-[#15803d] w-full text-left py-1 px-2 cata">All Trees</button>
                                    </div>`;
  for (const cata of catas) {
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
        <button class="rounded-sm hover:text-white hover:bg-[#15803d] w-full text-left py-1 px-2 cata" onclick="loadTree(${cata.id})">${cata.category_name}</button>
        `;
    catagoriesContainer.appendChild(createDiv);
}

};

categories();


