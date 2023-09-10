const chooseColor = document.querySelectorAll(".choose-color__btn");
const contentItem = document.querySelectorAll(".content-item");

const open = (e) => {
	const target = e.currentTarget;
	const color = target.dataset.button;

	chooseColor.forEach((color) => {
		color.classList.remove("choose-color__btn--active");
	});

	target.classList.add("choose-color__btn--active");

  contentItem.forEach((item) => {
		item.classList.remove("content-item--active");

		if (item.classList.contains(`${color}`)) {
			item.classList.add("content-item--active");
		}
	});
};

chooseColor.forEach((color) => {
	color.addEventListener("click", open);
});
