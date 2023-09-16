const submitButton = document.getElementById("submitBtn");
const inputs = document.getElementsByTagName("input");

const onClickSubmitBtn = () => {
  for (let i = 0; i < 5; i++) {
    const input = inputs.item(i);
    if (input.value) {
      // get data from College Navigator, Niche, US News
    }
  }
};

submitButton.addEventListener("click", onClickSubmitBtn);
