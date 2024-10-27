let showContent = true;

const toggleContent = () => {
  showContent = !showContent;
  if (showContent) {
    $("p.hidden").show();
  } else {
    $("p.hidden").hide();
  }
};

const pickRandomSample = () => {
  $(".card").css("background-color", "cream");

  let randomIndex = Math.floor(Math.random() * 10) + 1;
  $("#card" + randomIndex).css("background-color", "yellow");

  let randomCode = Math.floor(Math.random() * 50) + 1;
  alert(`Your random code is: ${randomCode}. Show it to the cashier for a free sample!`);
};
