let arrForCartData = [];
const categoryContainer = document.getElementById("category-container");
const cardContainer = document.getElementById("card-container");
const addToCartContainer = document.getElementById("cart-item-container");
const cartContainer = document.getElementById("cart-container");
const totalAmount = document.getElementById("total-amount");
const spinner = document.getElementById("spinner");
cartContainer.addEventListener("click", (event) => {
  if (event.target.localName === "button") {
    let deletedItemTitle =
      event.target.parentNode.children[0].children[0].innerText;
    const deletedItemPrice = parseInt(
      event.target.parentNode.children[0].children[1].children[0].innerText
    );

    let newArrayForCartItemsData = arrForCartData.filter((element) => {
      return element.title !== deletedItemTitle;
    });
    arrForCartData = newArrayForCartItemsData;

    addToCartContainer.innerHTML = "";
    arrForCartData.forEach((item) => {
      addToCartContainer.innerHTML += `
        <div class="p-3 rounded-xl bg-[#f0fdf4] mb-2 space-y-2 flex justify-between items-center">
        <div>
            <p class="font-semibold">${item.title}</p>
            <p class="text-gray-400">৳<span>${item.price}</span> x 1</p>
        </div>
        <button class="text-gray-400 cursor-pointer">X</button>
    </div>
        `;
    });
    let totalAmountValue = parseInt(
      totalAmount.children[1].children[0].innerText
    );
    totalAmountValue = totalAmountValue - deletedItemPrice;
    totalAmount.children[1].children[0].innerText = totalAmountValue;

    if (arrForCartData.length === 0) {
      totalAmount.classList.add("hidden");
    }
  }
});

cardContainer.addEventListener("click", (event) => {
  //event condition for button
  if (event.target.localName === "button") {
    const title = event.target.parentNode.children[0].innerText;
    const plantPrice = parseInt(
      event.target.parentNode.children[2].children[1].children[0].innerText
    );

    addToCartContainer.innerHTML += `
    <div class="p-3 rounded-xl bg-[#f0fdf4] mb-2 space-y-2 flex justify-between items-center">
        <div>
            <p class="font-semibold">${title}</p>
            <p class="text-gray-400">৳<span>${plantPrice}</span> x 1</p>
        </div>
        <button class="text-gray-400 cursor-pointer">X</button>
    </div>
    `;

    totalAmount.classList.remove("hidden");
    let totalAmountValue = parseInt(
      totalAmount.children[1].children[0].innerText
    );
    totalAmountValue = totalAmountValue + plantPrice;
    totalAmount.children[1].children[0].innerText = totalAmountValue;

    arrForCartData.push({
      title: title,
      price: plantPrice,
    });
  }

  //event condition for h1 tag for title
  if (event.target.localName === "h1") {
    loadModalDataByPlantId(event.target.parentNode.parentNode.id);
  }
});

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
  cardContainer.innerHTML = "";
  handleSpinner(true);
  const url = `https://openapi.programming-hero.com/api/category/${categoryId}`;

  const response = await fetch(url);
  const data = await response.json();
  displayPlantsByCategory(data.plants);

  removeActiveClass();
  document.getElementById(`category-${categoryId}`).classList.add("active");
};

const displayPlantsByCategory = (plantsByCategory) => {
  plantsByCategory.forEach((plant) => {
    cardContainer.innerHTML += `
        <div id="${plant.id}" class="rounded-xl bg-white overflow-hidden">
                        <div class="rounded-t-xl">
                            <img class="h-70 w-full object-cover" src="${plant.image}" alt="">
                        </div>
                        <div class="p-3 space-y-3">

                            <h1 class="font-semibold cursor-pointer hover:border-b-2  w-fit">${plant.name}</h1>
                            <p>${plant.description}</p>
                            <div class="flex justify-between">
                                <p class="px-3 rounded-2xl bg-[#DCFCE7] text-[#15803D]">${plant.category}</p>
                                <p>৳<span>${plant.price}</span></p>
                            </div>
                            <button class="btn w-full bg-[#15803D] rounded-3xl text-white font-normal">Add To
                                cart</button>
                        </div>
                    </div>
        `;
  });
  handleSpinner(false);
};

const LoadAllTree = async () => {
  cardContainer.innerHTML = "";
  handleSpinner(true);
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

const displayAllPlants = (allPlants) => {
  handleSpinner(true);
  allPlants.forEach((plant) => {
    cardContainer.innerHTML += `
        <div id="${plant.id}" class="rounded-xl bg-white overflow-hidden">
                        <div class="rounded-t-xl">
                            <img class="h-70 w-full object-cover" src="${plant.image}" alt="">
                        </div>
                        <div class="p-3 space-y-3">

                            <h1 class="font-semibold cursor-pointer hover:border-b-2 w-fit">${plant.name}</h1>
                            <p>${plant.description}</p>
                            <div class="flex justify-between">
                                <p class="px-3 rounded-2xl bg-[#DCFCE7] text-[#15803D]">${plant.category}</p>
                                <p>৳<span>${plant.price}</span></p>
                            </div>
                            <button class="btn w-full bg-[#15803D] rounded-3xl text-white font-normal">Add To
                                cart</button>
                        </div>
                    </div>
        `;
  });
  handleSpinner(false);
};

const removeActiveClass = () => {
  const allCategoryBtn = document.querySelectorAll(".category-btn");
  allCategoryBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const handleSpinner = (status) => {
  if (status === true) {
    spinner.classList.remove("hidden");
  } else {
    spinner.classList.add("hidden");
  }
};

const loadModalDataByPlantId = async (plantId) => {
  const url = `https://openapi.programming-hero.com/api/plant/${plantId}`;

  /* fetch(url)
  .then(response => response.json())
  .then(data => console.log(data)
  ) */
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayPlantsDataOnModal(data.plants);
  } catch (error) {
    console.log(error);
  }
};

displayPlantsDataOnModal = (plant) => {
  const plantModal = document.getElementById('my_modal');
  plantModal.innerHTML = '';
  plantModal.innerHTML = `
  <div class="modal-box">
            <div class="space-y-3">
                <h1 class="text-lg font-bold">${plant.name}</h1>
                <img src="${plant.image}" class="h-60 w-full object-cover rounded-xl" alt="">
                <p><span class="text-lg font-semibold">Category:</span> ${plant.category}</p>
                <p><span class="text-lg font-semibold">Price:</span> ${plant.price}</p>
                <p><span class="text-lg font-semibold">Description:</span> ${plant.description}</p>
            </div>

            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
            </div>
        </div>
  `
  plantModal.showModal();
  console.log(plant);
};

loadCategory();
LoadAllTree();
