// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  newElement = document.body.appendChild(clonedBtn)
})
clonedBtn.textContent = "Я изменю тебя";
clonedBtn.style.backgroundColor = "#a78b71";
clonedBtn.style.color = "white";
clonedBtn.style.border = "2px solid black";

clonedBtn.addEventListener("click", ()=>{
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black"; 
})
// здесь можете создать EventListener для второй кнопки