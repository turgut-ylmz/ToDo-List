const container = document.querySelector(".container");
const input = document.querySelector(".input-value");
const listGroup = document.querySelector(".list-group");
container.addEventListener("click", (e) => {
  const inputValue = input.value;
  if (e.target.classList.contains("btn-warning")) {
    listGroup.innerHTML += `
      <li class="list-group-item d-flex flex-direction-row">
      <input
        class="form-check-input me-1"
        type="checkbox"
        value=""
        aria-label="..."
      />
      <p>${inputValue}</p>
      <span class="badge rounded-pill text-bg-danger">X</span>
    </li>
      `;
  } else if (e.target.classList.contains("badge")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("form-check-input")) {
    if (!e.target.nextElementSibling.innerHTML.includes("<del>")) {
      e.target.nextElementSibling.innerHTML = `<del>${inputValue}</del>`;
    } else {
      e.target.nextElementSibling.innerHTML = `<p>${inputValue}</p>`;
    }
  } else if (e.target.classList.contains("btn-danger")) {
    listGroup.innerHTML = "";
  }
});
