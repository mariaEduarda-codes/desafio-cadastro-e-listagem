const listOfItems = document.querySelector("#list-of-items");

fetch("http://localhost:8080/product")
  .then((response) => response.json())
  .then((data) => {
    listOfItems.innerHTML = "";

    data.forEach((item) => {
      const li = document.createElement("li");
      const liContent = document.createTextNode(`${item.name} - ${item.price}`);
      li.appendChild(liContent);
      listOfItems.appendChild(li);
    });
  })
  .catch((error) => console.error("Erro ao buscar produtos:", error));
