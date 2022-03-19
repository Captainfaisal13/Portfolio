var themes = document.querySelectorAll(".theme");
var root = document.querySelector(":root");
var pic = document.querySelector(".intro-image img");

for (var i of themes) {
  i.addEventListener("click", function () {
    var theme = this.getAttribute("id");

    switch (theme) {
      case "dark-blue":
        root.style.setProperty("--main-color", "#15202b");
        root.style.setProperty("--seconderyColor", "#192734");
        root.style.setProperty("--borderColor", "#164d56");
        root.style.setProperty("--mainText", "#fff");
        root.style.setProperty("--seconderyText", " #eeeeee");
        root.style.setProperty("--thameDotBorder", "#fff");
        root.style.setProperty("--previewBg", "rgb(25, 39, 52, 0.8)");
        root.style.setProperty("--previewShadow", "#111921");
        root.style.setProperty("--btnColor", "#17a2b8");
        pic.src = "image/blue-picture.png"
        break;
      case "white":
        root.style.setProperty("--main-color", "#eaeaea");
        root.style.setProperty("--seconderyColor", "#fff");
        root.style.setProperty("--borderColor", "#c1c1c1");
        root.style.setProperty("--mainText", "black");
        root.style.setProperty("--seconderyText", "#4b5156");
        root.style.setProperty("--thameDotBorder", "#24292e");
        root.style.setProperty("--previewBg", "rgba(207, 190, 137, 0.8)");
        root.style.setProperty("--previewShadow", "#f0ead6");
        root.style.setProperty("--btnColor", "#192734");
        pic.src = "image/white-picture.png"
        break;
      case "purple":
        root.style.setProperty("--main-color", "#46344e");
        root.style.setProperty("--seconderyColor", "#382a3f");
        root.style.setProperty("--borderColor", "#1d1520");
        root.style.setProperty("--mainText", "#fff");
        root.style.setProperty("--seconderyText", "#eeeeee");
        root.style.setProperty("--thameDotBorder", "#fff");
        root.style.setProperty("--previewBg", "rgb(29, 21, 32, 0.8)");
        root.style.setProperty("--previewShadow", "#2b202f");
        root.style.setProperty("--btnColor", "#8534a3");
        pic.src = "image/purple-picture.png"
        break;
      case "light-green":
        root.style.setProperty("--main-color", "#606b56");
        root.style.setProperty("--seconderyColor", "#515a48");
        root.style.setProperty("--borderColor", "#161914");
        root.style.setProperty("--mainText", "#fff");
        root.style.setProperty("--seconderyText", "#eeeeee");
        root.style.setProperty("--thameDotBorder", "#fff");
        root.style.setProperty("--previewBg", "rgb(81, 90, 72, 0.8)");
        root.style.setProperty("--previewShadow", "#2a2f25");
        root.style.setProperty("--btnColor", "#669966");
        pic.src = "image/green-picture.png"
        break;
    }
  });
}

// if (theme === "dark-blue") {
//   root.style.setProperty("--main-color", "#15202b");
//   root.style.setProperty("--seconderyColor", "#192734");
//   root.style.setProperty("--borderColor", "#164d56");
//   root.style.setProperty("--mainText", "#fff");
//   root.style.setProperty("--seconderyText", " #eeeeee");
//   root.style.setProperty("--thameDotBorder", "#fff");
//   root.style.setProperty("--previewBg", "rgb(25, 39, 52, 0.8)");
//   root.style.setProperty("--previewShadow", "#111921");
//   root.style.setProperty("--btnColor", "#17a2b8");
// } else if (theme === "white") {
//   root.style.setProperty("--main-color", "#eaeaea");
//   root.style.setProperty("--seconderyColor", "#fff");
//   root.style.setProperty("--borderColor", "#c1c1c1");
//   root.style.setProperty("--mainText", "black");
//   root.style.setProperty("--seconderyText", "#4b5156");
//   root.style.setProperty("--thameDotBorder", "#24292e");
//   root.style.setProperty("--previewBg", "rgba(207, 190, 137, 0.8)");
//   root.style.setProperty("--previewShadow", "#f0ead6");
//   root.style.setProperty("--btnColor", "#192734");
// } else if (theme === "purple") {
//   root.style.setProperty("--main-color", "#46344e");
//   root.style.setProperty("--seconderyColor", "#382a3f");
//   root.style.setProperty("--borderColor", "#1d1520");
//   root.style.setProperty("--mainText", "#fff");
//   root.style.setProperty("--seconderyText", "#eeeeee");
//   root.style.setProperty("--thameDotBorder", "#fff");
//   root.style.setProperty("--previewBg", "rgb(29, 21, 32, 0.8)");
//   root.style.setProperty("--previewShadow", "#2b202f");
//   root.style.setProperty("--btnColor", "#8534a3");
// } else if (theme === "light-green") {
//   root.style.setProperty("--main-color", "#606b56");
//   root.style.setProperty("--seconderyColor", "#515a48");
//   root.style.setProperty("--borderColor", "#161914");
//   root.style.setProperty("--mainText", "#fff");
//   root.style.setProperty("--seconderyText", "#eeeeee");
//   root.style.setProperty("--thameDotBorder", "#fff");
//   root.style.setProperty("--previewBg", "rgb(81, 90, 72, 0.8)");
//   root.style.setProperty("--previewShadow", "#2a2f25");
//   root.style.setProperty("--btnColor", "#669966");
// }