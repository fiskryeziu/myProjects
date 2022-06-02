let elementPanel = document.getElementById("wrapper");
let input = document.getElementById("input");
let productData = [];

input.addEventListener("input", (e) => {
  let inputSearch = e.target.value.toLowerCase();

  let filterSearch = productData.filter((product) => {
    return product.title.toLowerCase().includes(inputSearch);
  });
  displayProducts(filterSearch);
  // console.log(filterSearch);
});

let loadData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  productData =  data.products;
  // console.log(data.products[1].thumbnail);
  displayProducts(productData);
};

loadData();

const displayProducts = (data) => {
  let htmlData = data
    .map((product) => {
      return `
     <div class="card col-lg-3 m-1" style="width: 16rem;">
     <img src="${product.thumbnail}" class="card-img-top img-fluid" style="height: 12rem; object-fit:cover;" alt="...">
     <div class="card-body d-flex justify-content-between">
       <h6 class="card-title">${product.title}</h6>
       <h6 class="card-title">${product.price}$</h6>
     </div>
   </div>
     `;
    })
    .join("");
  elementPanel.innerHTML = htmlData;
};
