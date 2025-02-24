let bigDiv = document.querySelector(".bigDiv");
let databox = "";
let totalPage = 0;
const mainDiv = () => {
  axios({
    method: "get",
    url: "/shop/main",
  }).then((res) => {
    console.log(res.data);
    databox = res.data;
    totalPage = Math.ceil(databox.length / showItem);
    pageNumber();
    makeDiv1(1);
    // res.data.forEach((item) => {
    //   bigDiv.innerHTML += `<div class="box" onclick="moveDetail(${item.id})">
    // <div class="img"><img src = "/uploads/${item.img}"></div><br>
    // <div class="name"> ${item.name}</div>
    // <div class="price">${item.price.toLocaleString()} <span class="won">원</span></div><br>`;
    // });
  });
};
mainDiv();
console.log(databox);
const showItem = 10;

const pagenation = document.querySelector(".pagenation");
pagenation.innerHTML = `<div  onclick="prevData()" class="prev">이전</div>
<div class="page"></div>
<div onclick="nextData()" class="next">다음</div>`;

const pageDiv = document.querySelector(".page");
const pageNumber = () => {
  pageDiv.innerHTML = "";
  for (let i = 1; i <= totalPage; i++) {
    pageDiv.innerHTML += `<div onclick="makeDiv1(${i})" class="div${i} pagenumber">${i}</div>`;
  }
};

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let btn = 1;
const makeDiv1 = (id) => {
  pageNumber();
  bigDiv.innerHTML = "";
  btn = id;
  let dataset = databox.slice(id * 12 - 12, id * 12);
  if (dataset.length < 1) {
    //등록된 아이템 없을 시
    bigDiv.innerHTML = `<div>등록된 아이템이 없습니다!</div>`;
  } else {
    dataset.map((item) => {
      bigDiv.innerHTML += `<div class="box" onclick="moveDetail(${item.id})">  
    <div class="img"><img src = "/uploads/${item.img}"></div><br>
    <div class="name"> ${item.name}</div>
    <div class="price">${item.price.toLocaleString()} <span class="won">원</span></div><br>`;
    });
    window.scrollTo(0, 0);
  }
};

const prevData = () => {
  if (btn === 1) {
    alert("첫");
  } else {
    makeDiv1(btn - 1);
  }
};
const nextData = () => {
  if (btn === totalPage) {
    alert("끝");
  } else {
    makeDiv1(btn + 1);
  }
};
const moveMain = () => {
  window.location.href = "/";
};

const moveDetail = (id) => {
  window.location.href = `/shop/detail/${id}`;
};

const moveCart = () => {
  window.location.href = "cart/all";
};

const ready = () => {
  alert("준비중");
};
