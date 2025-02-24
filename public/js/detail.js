const cartIn = (id) => {
  axios({
    method: "post",
    url: `/cart/set/${id}`,
  })
    .then((res) => {
      alert("담김");
      console.log("성공!");
    })
    .catch((e) => {
      console.log(e, "dsa");
    });
};
const moveMain = () => {
  window.location.href = "/";
};

const moveCart = () => {
  window.location.href = "/cart/all";
};
const ready = () => {
  Swal.fire("준비중입니다!", "", "warning");
};
