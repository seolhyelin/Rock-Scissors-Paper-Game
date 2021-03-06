function game() {
  const startBtn = document.querySelector(".start-btn");
  const shuffle = document.querySelector(".shuffle");
  const btnList = document.querySelector(".button-list");
  let slideImg = document.querySelector(".slideImg");

  let timer = null;
  let prevName = "scissors";
  let imgArr = [
    {
      shape: "βπΌ",
      name: "scissors",
    },
    {
      shape: "βπΌ",
      name: "rock",
    },
    {
      shape: "βπΌ",
      name: "paper",
    },
  ];

  const start = () => {
    timer = setInterval(() => {
      const img = imgArr[Math.floor(Math.random() * 3)];
      slideImg.innerHTML = img.shape;
      slideImg.classList.replace(prevName, img.name);
      prevName = img.name;
    }, 100);
  };

  const compare = (me) => {
    clearInterval(timer);
    timer = null;

    const op = slideImg.classList[0];
    console.log(op);

    if (me === op) {
      alert("λΉκ²Όμ΅λλ€");
      return;
    }

    if (me === "scissors") {
      if (op === "rock") {
        alert("μ‘μ΅λλ€");
      } else {
        alert("μ΄κ²Όμ΅λλ€");
      }
    }

    if (me === "rock") {
      if (op === "paper") {
        alert("μ‘μ΅λλ€");
      } else {
        alert("μ΄κ²Όμ΅λλ€");
      }
    }
    if (me === "paper") {
      if (op === "scissors") {
        alert("μ‘μ΅λλ€");
      } else {
        alert("μ΄κ²Όμ΅λλ€");
      }
    }
  };

  startBtn.addEventListener("click", (e) => {
    start();
  });

  btnList.addEventListener("click", (e) => {
    compare(e.target.classList[0]);
  });
}
game();
