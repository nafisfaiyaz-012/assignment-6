const categoryContainer = document.getElementById("category-container");
const cardContainer = document.getElementById("card-container");

const loadCategory = async () => {
  const url = "https://openapi.programming-hero.com/api/categories";

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayCategory(data.categories);
  } catch (error) {
    console.log(error);
  }
};

const displayCategory = (categories) => {
  categories.forEach((category) => {
    categoryContainer.innerHTML += `
    <button onclick="loadPlantByCategory(${category.id})" id="category-${category.id}" class="btn w-full bg-transparent mb-1 border-none justify-start font-normal hover:bg-[#15803D] hover:text-white category-btn">${category.category_name}</button>
    `;
  });
};

const loadPlantByCategory = async (categoryId) => {
  const url = `https://openapi.programming-hero.com/api/category/${categoryId}`;

  const response = await fetch(url);
  const data = await response.json();
  displayPlantsByCategory(data.plants);

  removeActiveClass();
  document.getElementById(`category-${categoryId}`).classList.add("active");
};

const displayPlantsByCategory = (plantsByCategory) => {
  cardContainer.innerHTML = "";
  plantsByCategory.forEach((plant) => {
    cardContainer.innerHTML += `
        <div class="rounded-xl bg-white overflow-hidden">
                        <div class="rounded-t-xl">
                            <img class="h-70 w-full object-cover" src="${plant.image}" alt="">
                        </div>
                        <div class="p-3 space-y-3">

                            <h1 class="font-semibold">${plant.name}</h1>
                            <p>${plant.description}</p>
                            <div class="flex justify-between">
                                <p class="px-3 rounded-2xl bg-[#DCFCE7] text-[#15803D]">${plant.category}</p>
                                <p>ট<span>${plant.price}</span></p>
                            </div>
                            <button class="btn w-full bg-[#15803D] rounded-3xl text-white font-normal">Add To
                                cart</button>
                        </div>
                    </div>
        `;
  });
};

const LoadAllTree = async () => {
  removeActiveClass();
  document.getElementById("all-tree").classList.add("active");
  const url = "https://openapi.programming-hero.com/api/plants";

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayAllPlants(data.plants);
  } catch (error) {
    console.log(error);
  }
};

const displayAllPlants = (Allplants) => {
  cardContainer.innerHTML = "";
  Allplants.forEach((plant) => {
    cardContainer.innerHTML += `
        <div class="rounded-xl bg-white overflow-hidden">
                        <div class="rounded-t-xl">
                            <img class="h-70 w-full object-cover" src="${plant.image}" alt="">
                        </div>
                        <div class="p-3 space-y-3">

                            <h1 class="font-semibold">${plant.name}</h1>
                            <p>${plant.description}</p>
                            <div class="flex justify-between">
                                <p class="px-3 rounded-2xl bg-[#DCFCE7] text-[#15803D]">${plant.category}</p>
                                <p>ট<span>${plant.price}</span></p>
                            </div>
                            <button class="btn w-full bg-[#15803D] rounded-3xl text-white font-normal">Add To
                                cart</button>
                        </div>
                    </div>
        `;
  });
};

const removeActiveClass = () => {
  const allCategoryBtn = document.querySelectorAll(".category-btn");
  allCategoryBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
};

loadCategory();
LoadAllTree();
