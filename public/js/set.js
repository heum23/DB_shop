const editor = new toastui.Editor({
  el: document.querySelector("#editor"), // 에디터를 적용할 요소 (컨테이너)
  height: "500px", // 에디터 영역의 높이 값 (OOOpx || auto)
  initialEditType: "wysiwyg", // 최초로 보여줄 에디터 타입 (markdown || wysiwyg)
  initialValue: "내용을 입력해 주세요.", // 내용의 초기 값으로, 반드시 마크다운 문자열 형태여야 함
});

const setData = (event) => {
  event.preventDefault();

  const formData = new FormData();
  const form = document.forms["formData"];
  formData.append("img", form["img"].files[0]); // 파일을 formData에 추가
  formData.append("userId", form["userId"].value);
  formData.append("name", form["name"].value);
  formData.append("price", form["price"].value);

  const editorContent = editor.getMarkdown(); // 마크다운 형식으로 가져오기
  // const editorContent = editor.getHTML(); // HTML 형식으로 저장하고 싶으면 이걸 사용
  formData.append("detail", editorContent);

  console.log(...formData.entries());

  // axios로 데이터 전송
  axios
    .post("/shop/upload", formData) // formData를 직접 전달
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
};

//수정
const writeMove = (id) => {
  event.preventDefault();

  window.location.href = `/shop/write/${id}`;
};
//삭제
const delData = (id) => {
  axios({
    method: "delete",
    url: `/shop/delete/${id}`,
  })
    .then((res) => {
      alert("삭제 완료");
      window.location.reload();
    })
    .catch((e) => {
      console.log("error", e);
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
