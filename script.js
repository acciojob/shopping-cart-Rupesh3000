const inputPrice = document.getElementById("item-price-input");
const inputName = document.getElementById("item-name-input");
const total = document.getElementById("total");
const inputQty = document.getElementById("item-qty-input");

const tableBody = document.getElementById("table-body");
const add = document.getElementById("add");

const createTableData = (name, qty, price) => {
  const row = document.createElement("tr");

  const tdName = document.createElement("td");
  const tdQty = document.createElement("td");
  const tdPrice = document.createElement("td");

  tdName.textContent = name;
  tdQty.textContent = qty;
  tdPrice.textContent = price;

  row.append(tdName, tdQty, tdPrice);
  tableBody.appendChild(row);

  const currentTotal = Number(total.textContent);
  const itemTotal = Number(qty) * Number(price);

  total.textContent = currentTotal + itemTotal;
};

const addDataInTable = () => {
  let inputNameValue = inputName.value;
  let inputPriceValue = inputPrice.value;
  let inputQtyValue = inputQty.value;

  createTableData(inputNameValue, inputQtyValue, inputPriceValue);

  inputName.value = "";
  inputPrice.value = "";
  inputQty.value = "";
};

add.addEventListener("click", addDataInTable);
