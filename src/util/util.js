
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
  }
}

export default Util;
