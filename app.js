const share = document.querySelector(".share");
const shareCard = document.querySelector(".share_card");
const shareMobileCard = document.querySelector(".share_card_mobile");
const shareIcon = document.querySelector(".share_icon");
const shareIconMobile = document.querySelector(".icon_box");

share.addEventListener("click", function () {
  shareCard.classList.toggle("hide");
  shareMobileCard.classList.toggle("hide");
  share.classList.toggle("active");
  shareIcon.classList.toggle("active");
  shareIconMobile.classList.toggle("active");
});

shareIconMobile.addEventListener("click", function () {
  shareMobileCard.classList.toggle("active");
  shareMobileCard.classList.toggle("hide");
  shareIconMobile.classList.toggle("active");
});
