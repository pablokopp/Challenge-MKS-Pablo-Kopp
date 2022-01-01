//FACEBOOK
const facebookCard = document.querySelector(
  ".container-bigcard--borderFacebook"
);
const facebookModal = document.querySelector("#modal-facebook");
const facebookCloseBtn = document.querySelector("#btn-close--facebook");
const facebookOnClick = () => {
  facebookModal.classList.add("modal-active");
};
const facebookClose = () => {
  facebookModal.classList.remove("modal-active");
};
facebookCard.addEventListener("click", facebookOnClick);
facebookCloseBtn.addEventListener("click", facebookClose);

//TWITTER
const twitterCard = document.querySelector(".container-bigcard--borderTwitter");
const twitterModal = document.querySelector("#modal-twitter");
const twitterCloseBtn = document.querySelector("#btn-close--twitter");
const twitterOnClick = () => {
  twitterModal.classList.add("modal-active");
};
const twitterClose = () => {
  twitterModal.classList.remove("modal-active");
};
twitterCard.addEventListener("click", twitterOnClick);
twitterCloseBtn.addEventListener("click", twitterClose);

//INSTAGRAM

const instagramCard = document.querySelector(
  ".container-bigcard--borderInstagram"
);
const instagramModal = document.querySelector("#modal-instagram");
const instagramCloseBtn = document.querySelector("#btn-close--instagram");
const instagramOnClick = () => {
  instagramModal.classList.add("modal-active");
};
const instagramClose = () => {
  instagramModal.classList.remove("modal-active");
};
instagramCard.addEventListener("click", instagramOnClick);
instagramCloseBtn.addEventListener("click", instagramClose);

//YOUTUBE

const youtubeCard = document.querySelector(".container-bigcard--borderYoutube");
const youtubeModal = document.querySelector("#modal-youtube");
const youtubeCloseBtn = document.querySelector("#btn-close--youtube");
const youtubeOnClick = () => {
  youtubeModal.classList.add("modal-active");
};
const youtubeClose = () => {
  youtubeModal.classList.remove("modal-active");
};
youtubeCard.addEventListener("click", youtubeOnClick);
youtubeCloseBtn.addEventListener("click", youtubeClose);
