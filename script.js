const inputPrice = document.getElementById("item-price-input");
const inputName = document.getElementById("item-name-input");
const inputQty = document.getElementById("item-qty-input");
const totalCell = document.getElementById("total");

const tableBody = document.getElementById("table-body");
const add = document.getElementById("add");

const createTableData = (name, qty, price) => {
  const row = document.createElement("tr");

  const tdName = document.createElement("td");
  const tdQty = document.createElement("td");
  const tdPrice = document.createElement("td");
  const tdTotal = document.createElement("td");

  const itemTotal = Number(qty) * Number(price);

  tdName.textContent = name;
  tdQty.textContent = qty;
  tdPrice.textContent = price;
  tdTotal.textContent = itemTotal;

  row.append(tdName, tdQty, tdPrice, tdTotal);

  // insert BEFORE grand total row
  tableBody.insertBefore(row, tableBody.lastElementChild);

  totalCell.textContent =
    Number(totalCell.textContent) + itemTotal;
};

const addDataInTable = () => {
  const name = inputName.value.trim();
  const qty = Number(inputQty.value);
  const price = Number(inputPrice.value);

  if (!name || qty <= 0 || price <= 0) return;

  createTableData(name, qty, price);

  inputName.value = "";
  inputQty.value = "";
  inputPrice.value = "";
};

add.addEventListener("click", addDataInTable);
