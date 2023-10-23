{
  const toggle = () => {
    const toggleButton = document.querySelector(".theme-toggle");
    const body = document.querySelector("body");

    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-theme");
    });
  };

  toggle();
}