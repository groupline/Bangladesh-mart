let span = document.getElementsByClassName("span");
let product = document.getElementsByClassName("product");
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  movePer = 50.36;
  maxMove = 504;
}

let right_mover = () => {
  l = l + movePer;
  if (product == 1) {
    l = 0;
  }
  for (const i of product) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
  }
};
let left_mover = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of product) {
    if (product_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};
span[1].onclick = () => {
  right_mover();
};
span[0].onclick = () => {
  left_mover();
};

let hide_btn = (x) => {
  x.style.display = "none";
  x.nextElementSibling.style.display = "block";
};
var data = 1;
function increment(y) {
  data = data + 1;

  let sibling = y.parentNode.childNodes[2];
  sibling.innerText = data;
  console.log(sibling);
}
decrement = (z) => {
  if (data === 1) {
    z.parentNode.parentNode.firstChild.style.display = "block";
    z.parentNode.style.display = "none";
  } else {
    data = data - 1;

    let sibling = z.nextElementSibling;
    sibling.innerText = data;
    console.log(sibling);
  }
};
