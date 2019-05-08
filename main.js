const input = document.querySelector("input.input-add");
const submit = document.querySelector("button");
const remove = document.querySelector("li::after")

submit.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = input.value;
    let ul = document.getElementsByTagName("ul")[0];
    ul.appendChild(li);
    input.value = "";
});

remove.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerHTML = "<button>delete</button>"
    let ul = document.getElementsByTagName("ul")[0];
    ul.removeChild(li);
});

