
const Util = {
  deleteItem(id, items) {
    const newBooks = [...items];
    return newBooks.filter((item) => item.id !== id);
  }
}

export default Util;
