const quill = new Quill("#editor-container", {
  theme: "snow",
  placeholder: "Écris ici avec la police ColeCarreira...",
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["link", "image"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  },
});
