import { useEffect } from "../lib/router";

const category = (category1, { click }) => {
  useEffect(() => {
    const btn = document.querySelectorAll(".btnli");
    for (const iterator of btn) {
      iterator.addEventListener("click", function () {
        const id = this.dataset.id;
        click(id);
      });
    }
    console.log(btn);
  });
  return `
  ${category1.map((e) => `<li class="btnli" data-id="${e.id}">${e.name}</li>`)}
  `;
};

export default category;
