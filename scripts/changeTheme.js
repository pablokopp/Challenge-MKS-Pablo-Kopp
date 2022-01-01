const themeSwitcher = document.querySelector("#switch");
const bodyOdy = document.body;

const changeTheme = () => {
  bodyOdy.classList.toggle("body-darktheme");
  bodyOdy.classList.toggle("body-lighttheme");
};
themeSwitcher.addEventListener("click", changeTheme);
