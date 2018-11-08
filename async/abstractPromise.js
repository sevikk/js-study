// If you cannot handle properly your promise errors in the function catch this error in the hight level

const deleteCat = (catId) => {
  return database.delete(catId);
};

const deleteCatByClick = (e) => {
  const catId = e.target.data['cat-id'];
  deleteCat(catId)
    .then((data) => doSomethingGood(data))
    .catch((err) => doSomethingBad(err));
};