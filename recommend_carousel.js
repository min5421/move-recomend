const btnPre = document.querySelector(".recommend_prev_btn");
const btnNext = document.querySelector(".recommend_next_btn");
let current = 1;

function prevBtn() {
  let slide = document.querySelectorAll(`.slide0${current}`);
  for (let i = 0; i < slide.length; i++) {
    console.log(i);
    let item = slide.item(i);
    item.classList.remove("active");
  }
  current = current - 1 > 0 ? current - 1 : 4;

  slide = document.querySelectorAll(`.slide0${current}`);
  for (let i = 0; i < slide.length; i++) {
    let item = slide.item(i);
    item.classList.add("active");
  }
}

//next
function nextBtn() {
  let slide = document.querySelectorAll(`.slide0${current}`);
  for (let i = 0; i < slide.length; i++) {
    console.log(i);
    let item = slide.item(i);
    item.classList.remove("active");
  }
  current = current + 1 < 5 ? current + 1 : 1;

  slide = document.querySelectorAll(`.slide0${current}`);
  for (let i = 0; i < slide.length; i++) {
    let item = slide.item(i);
    item.classList.add("active");
  }
}

btnNext.addEventListener("click", nextBtn);
btnPre.addEventListener("click", prevBtn);
