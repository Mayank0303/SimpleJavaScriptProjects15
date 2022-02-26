let count = 0;
const btns = document.querySelectorAll(".btn");
const value = document.querySelector(".value");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("dec")) {
      count--;
    }else if(styles.contains("inc")){
        count++;
    }else if(styles.contains("res")){
        count = 0;
    }
    value.textContent = count;
  });
});
