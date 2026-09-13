// トップボタン設定
const fadeArea = document.getElementById("top");

const buttonTarget = document.getElementById("btn");

const option = {
  root: null,
  rootMargin: "-50%",
  threshold: 0,
};

const topButtonObserver = new IntersectionObserver(buttonCallback, option);
topButtonObserver.observe(fadeArea);

function buttonCallback(entries) {
  if (entries[0].isIntersecting) {
    buttonTarget.classList.add("active");
  } else {
    buttonTarget.classList.remove("active");
  }
}
// トップボタン設定ここまで

// スライドメニュー設定
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const menuPanel = document.querySelector("#menu-panel");
const menuItems = document.querySelectorAll("#menu-panel li");
const menuOptions = {
  duration: 1400,
  easing: "ease",
  fill: "forwards",
};

const main = document.querySelector(".main");

const footer = document.querySelector(".footer");

const header = document.querySelector(".header");

const maskClose = document.querySelector(".mask");

const spandelete = document.querySelector(".profile_like_title_area");

const menuselectCloses = document.querySelectorAll(".dog_born");

// 追加
const topBorder = document.querySelector(".top_border");
const middleBorder = document.querySelector(".middle_border");
const bottomBorder = document.querySelector(".bottom_border");

// メニューを開く
// menuOpen.addEventListener("click", () => {
//   menuPanel.animate({ translate: ["103vw", 0] }, menuOptions);

//   // リンクをひとつずつ順に表示
//   menuItems.forEach((menuItem, index) => {
//     //console.log(`${index}番目のリスト`);
//     menuItem.animate(
//       {
//         opacity: [0, 1],
//         translate: ["2rem", 0],
//       },
//       {
//         duration: 2400,
//         delay: 300 * index,
//         easing: "ease",
//         fill: "forwards",
//       },
//     );
//   });
// });

// メニューを閉じる
menuClose.addEventListener("click", () => {
  menuPanel.animate({ translate: [0, "103vw"] }, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({ opacity: [1, 0] }, menuOptions);
  });
});

/* ----- ↑↑ 追加 ↑↑ ----- */

menuselectCloses.forEach((menuselectClose) => {
  menuselectClose.addEventListener("click", () => {
    menuPanel.animate({ translate: [0, "103vw"] }, menuOptions);
    menuItems.forEach((menuItem) => {
      menuItem.animate({ opacity: [1, 0] }, menuOptions);
    });
  });
});

menuselectCloses.forEach((menuselectClose) => {
  menuselectClose.addEventListener("click", () => {
    main.classList.remove("mask");
    footer.classList.remove("mask");
  });
});

menuOpen.addEventListener("click", () => {
  main.classList.toggle("mask");
  footer.classList.togle("mask");
});

// 追加
menuOpen.addEventListener("click", () => {
  topBorder.classList.toggle("open");
  middleBorder.classList.toggle("open");
  bottomBorder.classList.toggle("open");
  menuPanel.classList.toggle("open");
  // footer.classList.add("mask");
});


// menuClose.addEventListener("click", () => {
//   topBorder.classList.remove("open");
//   // footer.classList.add("mask");
// });



menuClose.addEventListener("click", () => {
  main.classList.remove("mask");
  footer.classList.remove("mask");
});

menuOpen.addEventListener("click", () => {
  spandelete.classList.remove("profile_like_title_area");
});
menuClose.addEventListener("click", () => {
  spandelete.classList.add("profile_like_title_area");
});

// 『showtitle』という定義名に『querySelectorAll』（特定のクラス名全て）を設定する
const showtitle = document.querySelectorAll(".title_fade_in");

// 監視領域の設定
const setting = {
  root: null,
  rootMargin: "-25%",
  threshold: 0,
};

// 定義・foreachで複数ある中の1つを見る
const showtitleObserver = new IntersectionObserver(titleshowsee, setting);
showtitle.forEach((showTarget) => {
  showtitleObserver.observe(showTarget);
});
// 『entries』=複数／『entry』=1つ
function titleshowsee(entries) {
  entries.forEach((entry) => {
    const showtitle = entry.target;
    // もし監視領域に要素が現れたら
    if (entry.isIntersecting) {
      // 『title_fade_in』に『show』というクラス名を付ける
      showtitle.classList.add("show");
    }
  });
}

// 質問コードここまで

// ローディング画面
const loading = document.querySelector("#loading");

window.addEventListener("load", () => {
  loading.classList.add("loaded");
});
