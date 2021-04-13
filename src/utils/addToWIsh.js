export const addToWish = (cat) => {
  const wishList = JSON.parse(localStorage.getItem("wishList")) || [];

  let catInWish = false;

  wishList.map((wish) => {
    if (wish.id === cat.id) {
      catInWish = true;
    }
  });

  let wishCat = [];
  // if true
  //remove cat item from wishlist
  if (catInWish) {
    wishCat = wishList.filter((item) => item.id !== cat.id);
  }
  //if false
  // add cat item to wishlist
  else {
    wishCat = [...wishList, cat];
  }

  localStorage.setItem("wishList", JSON.stringify(wishCat));
};
