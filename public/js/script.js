toggle = () => {
  const dis = document.getElementById("menu");
  if (dis.style.display == "block") {
    dis.style.display = "none";
  } else {
    dis.style.display = "block";
  }
};

scrolltoggle = () => {
  const dis = document.getElementById("scrollul");
  if (dis.style.display == "block") {
    dis.style.display = "none";
  } else {
    dis.style.display = "block";
  }
};

const realBtn = document.getElementById("realBtn");
const realBtnText = document.getElementById("realBtnText");
realBtn.onclick = () => {
  realBtnText.innerHTML = "Thanks";
  realBtn.classList.add("active");
};

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbar-example2",
});