"use strict";
let fishes = [...document.getElementsByClassName("fish")];
const modal = document.getElementById("modal-back");

//ランダムな動きを付与
let fishIndex = 0;
for (let fish of fishes) {
  let randomTop = Math.random() * (document.body.clientHeight - 100);
  // let randomLeft = Math.random() * document.body.clientWidth;
  let randomSpeed = Math.random() * 50 + 50;
  fish.style.position = "absolute";
  fish.style.top = randomTop.toString() + "px";
  // fish.style.left = randomLeft.toString() + "px";
  fish.style["animation-duration"] = randomSpeed.toString() + "s";

  fishIndex += 1;
}

// グラフを描画
let ctx = document.getElementById("charts");
const chart = new Chart(ctx, {
  type: "line",
  data: fishInfo["maajione"].chartData,
  options: {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          // scaleLabel: {
          //   display: true,
          //   labelString: "年",
          // },
          gridLines: {
            color: false,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "トン",
          },
        },
      ],
    },
  },
});

//マウスが要素上に入った時
for (let fish of fishes) {
  fish.addEventListener("click", () => {
    modal.style.display = "flex";
    let fishName = fish.dataset.name;
    document.getElementById("fish-name").textContent = fishInfo[fishName].name;
    document.getElementById("habitat").textContent = fishInfo[fishName].habitat;
    document.getElementById("subinfo").getElementsByTagName("img")[0].src =
      fishInfo[fishName].level;
    document.getElementById("fish-image").getElementsByTagName("img")[0].src =
      fishInfo[fishName].imagePath;
    chart.data = fishInfo[fishName].chartData;
    chart.update();
  });
}

//マウスカーソル
let cursor = $(".cursor"),
  follower = $(".follower"),
  cWidth = 8,
  fWidth = 40,
  delay = 5,
  mouseX = 0,
  mouseY = 0,
  posX = 0,
  posY = 0;

TweenMax.to({}, 0.001, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / delay;
    posY += (mouseY - posY) / delay;

    TweenMax.set(follower, {
      css: {
        left: posX - (5 * fWidth) / 2,
        top: posY - (5 * fWidth) / 2,
      },
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX - cWidth / 2,
        top: mouseY - cWidth / 2,
      },
    });
  },
});

$(document).on("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

$("a").on({
  mouseenter: function () {
    cursor.addClass("is-active");
    follower.addClass("is-active");
  },
  mouseleave: function () {
    cursor.removeClass("is-active");
    follower.removeClass("is-active");
  },
});

//modal
const buttonClose = document.getElementsByClassName("modalClose")[0];

buttonClose.addEventListener("click", closeModal);
function closeModal() {
  modal.style.display = "none";
}

addEventListener("click", closeModalFromOutside);
function closeModalFromOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
