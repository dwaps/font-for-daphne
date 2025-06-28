const quill = new Quill(".editor-container", {
  theme: "snow",
  placeholder: "Écris ce que tu veux 😘",
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["link", "image"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      [{ color: [] }],
      ["clean"],
    ],
  },
});

quill.format("align", "center");

const editor = document.querySelector(".ql-editor");
const selector = document.getElementById("fontSelector");

selector.addEventListener("change", () => {
  editor.style.fontFamily = selector.value;
});
