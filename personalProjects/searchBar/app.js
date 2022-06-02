let inputText = document.getElementById("inputvalue");
let div = document.getElementById("div");

let searchInput = async (searchText) => {
  let response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );
  let data = await response.json();

  let searchC = inputText.value.toLowerCase();

  let matchedData = data.filter((value) => {
    return value.name.toLowerCase().includes(searchC);
  });

  if (searchC.length === 0) {
    matchedData = [];
    div.innerHTML = ``;
  }
  showResult(matchedData);
};

function showResult(matchedData) {
  let showValues = matchedData
    .map((value) => {
      return (value = `<div class="d-flex flex-row card card-body mt-5 px-5">
		<h5 class="text-capitalize col-8">${value.name}</h5>
		<h3 class="text-primary col-4">${value.price}</h3>
	</div>`);
    })
    .join("");
  div.innerHTML = showValues;
}

inputText.addEventListener("input", searchInput);
