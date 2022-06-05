
const Util = {
  deleteItem(id, items) {
    const newBooks = [...items];
    return newBooks.filter((item) => item.id !== id);
  },

  editItem(editedBookItem, items) {
    const newBooks = [...items];
    const index = newBooks.findIndex((item) => item.id === editedBookItem.id);
    newBooks[index] = editedBookItem;
    return newBooks;
  },

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        resolve(reader.result)
      };
      reader.onerror = error => reject(error);
    });
  },

  isFileImage(file) {
    const acceptedImageTypes = ['image/jpg', 'image/jpeg', 'image/png'];

    return file && acceptedImageTypes.includes(file['type']);
  }
}

export default Util;
