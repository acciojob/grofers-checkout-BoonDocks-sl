const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	  const prices = table.querySelectorAll(".price");
      let totalPrice = 0;
  
      prices.forEach(price => {
        totalPrice += parseInt(price.textContent);
      });
  
      const totalRow = document.createElement("tr");
      const totalCell = document.createElement("td");
      totalCell.setAttribute("colspan", "2");
      totalCell.textContent = "Total Price: " + totalPrice;
  
      totalRow.appendChild(totalCell);
      table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

