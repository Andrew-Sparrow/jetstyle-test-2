import nanoid from 'nanoid';

const Util = {

  formatDate (dateString) {
    const DATE_OPTIONS = {year: 'numeric', month: 'short'};

    return (new Date(dateString)).toLocaleDateString('en-US', DATE_OPTIONS);
  },

  generateIdKeys(listLength) {
    const list = new Array(listLength).fill('');
    const generatedIdList = list.map(() => nanoid(10));
    return generatedIdList;
  },

  getUpdatedBooks(id, books, favorite) {
    const newBooks = [...books];
    const index = newBooks.findIndex((book) => book.id === id);
    newBooks[index].favorite = favorite;
    return newBooks;
  },

  deleteItem(id, items) {
    const newBooks = [...items];
    return newBooks.filter((item) => item.id !== id);
  }
}

export default Util;
