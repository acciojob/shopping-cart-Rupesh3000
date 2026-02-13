const inputPrice = document.getElementById("item-price-input");
const inputName = document.getElementById("item-name-input");
const total = document.getElementById("total");

const tableBody = document.getElementById("table-body");
const add = document.getElementById("add");

const createTableData = (inputNameValue, inputPriceValue) => {
  const row = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdPrice = document.createElement("td");
  tdName.textContent = inputNameValue;
  tdPrice.textContent = inputPriceValue;
  row.appendChild(tdName);
  row.appendChild(tdPrice);
  tableBody.appendChild(row);
  let currentTotal = Number(total.textContent);
  let price = Number(inputPriceValue);
  total.textContent = currentTotal + price;
};

const addDataInTable = () => {
  let inputPriceValue = inputPrice.value;
  let inputNameValue = inputName.value;
  createTableData(inputNameValue, inputPriceValue);
  inputPrice.value = "";
  inputName.value = "";
};

add.addEventListener("click", addDataInTable);
