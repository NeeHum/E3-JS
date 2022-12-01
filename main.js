const pizzas = [
  {
    id: 1, 
    nombre: "muzzarella",
    ingredientes: "salsa y muzzarella",
    precio: 500
  },

  {
    id: 2, 
    nombre: "fugazetta",
    ingredientes: "cebolla y muzzarella",
    precio: 550
  },

  {
    id: 3, 
    nombre: "jamon y queso",
    ingredientes: "salsa, muzzarella y jamon",
    precio: 1000
  },

  {
    id: 4, 
    nombre: "canchera",
    ingredientes: "salsa y verdeo",
    precio: 400
  },

  {
    id: 5, 
    nombre: "la cochina",
    ingredientes: "salsa, cheddar, panceta y papas fritas",
    precio: 1500
  },

  {
    id: 6, 
    nombre: "jamon y morrones",
    ingredientes: "salsa, muzzarella, jamon y morrones",
    precio: 1000
  }
];

const resultContainer = document.getElementById("ResultContainer")
const form = document.getElementById("Form")
const input = document.getElementById("Input")

const searchPizza = (value) => pizzas.find(pizzas => pizzas.id === value)

const showEmptyError = () => {
  resultContainer.innerHTML = `
  <div class="MsjErrorVacio">
        <h2>⚠️ Debes introducir un numero para buscar la Pizza ⚠️</h2>
    </div>
  `;
};

const renderResult = (pizzas) => {
  if (!pizzas) {
    resultContainer.innerHTML = `
    <div class="MsjErrorInvalido">
        <h2>⚠️ El ID ingresado no es valido, vuelve a intentarlo! ⚠️</h2>
    </div>
    `;
  }else{
    resultContainer.innerHTML = `
    <div class="cards">
        <h2>${pizzas.nombre.toUpperCase()}</h2>
        <h3>Ingredientes: ${pizzas.ingredientes}</h3>
        <img src="./Files/muzzarella.jpg" alt="MUZZARELLA">
        <h4>Precio: $${pizzas.precio}</h4>
    </div>
    `;
  }

};

const submitSearch = (e) => {
  e.preventDefault();
  const searchedValue = input.value;
  if (!searchedValue) {
    showEmptyError();
    return;
  }
  const searchedPizza = searchPizza(Number(searchedValue))
  renderResult(searchedPizza)
  form.reset();
};

const init = () => {
  form.addEventListener("submit",submitSearch)

};

init();


