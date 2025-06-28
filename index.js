const quill = new Quill("#editor-container", {
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
