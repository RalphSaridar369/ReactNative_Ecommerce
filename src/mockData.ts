export const products = [
  {
    id: 1,
    name: "Laptop Lenovo",
    price: 800,
    image: require("../assets/Products/product_1.png"),
    cat_id: 1,
    subcat_id: 1,
  },
  {
    id: 2,
    name: "Macbook Laptop",
    price: 1600,
    image: require("../assets/Products/product_2.png"),
    cat_id: 1,
    subcat_id: 2,
  },
  {
    id: 3,
    name: "Dell Laptop",
    price: 900,
    image: require("../assets/Products/product_3.png"),
    cat_id: 1,
    subcat_id: 3,
  },
  {
    id: 4,
    name: "Lenovo Thinkpad Laptop",
    price: 1000,
    image: require("../assets/Products/product_4.png"),
    cat_id: 1,
    subcat_id: 4,
  },
  {
    id: 5,
    name: "Asus Gaming Laptop",
    price: 1800,
    image: require("../assets/Products/product_5.png"),
    cat_id: 1,
    subcat_id: 1,
  },
  {
    id: 6,
    name: "Iphone 6s",
    price: 500,
    image: require("../assets/Products/product_6.png"),
    cat_id: 2,
    subcat_id: 5,
  },
  {
    id: 7,
    name: "Iphone x",
    price: 700,
    image: require("../assets/Products/product_7.png"),
    cat_id: 2,
    subcat_id: 5,
  },
  {
    id: 8,
    name: "Iphone 13 pro",
    price: 1200,
    image: require("../assets/Products/product_8.png"),
    cat_id: 2,
    subcat_id: 5,
  },
  {
    id: 9,
    name: "Samsung Galaxy Fold",
    price: 1300,
    image: require("../assets/Products/product_9.png"),
    cat_id: 2,
    subcat_id: 6,
  },
  {
    id: 10,
    name: "Samsung Galaxy s10",
    price: 900,
    image: require("../assets/Products/product_10.png"),
    cat_id: 2,
    subcat_id: 6,
  },
  {
    id: 11,
    name: "Xbox 360",
    price: 300,
    image: require("../assets/Products/product_11.png"),
    cat_id: 3,
    subcat_id: 7,
  },
  {
    id: 12,
    name: "Xbox One",
    price: 500,
    image: require("../assets/Products/product_12.png"),
    cat_id: 3,
    subcat_id: 7,
  },
  {
    id: 13,
    name: "Ps3",
    price: 300,
    image: require("../assets/Products/product_13.png"),
    cat_id: 3,
    subcat_id: 8,
  },
  {
    id: 14,
    name: "Ps4",
    price: 400,
    image: require("../assets/Products/product_14.png"),
    cat_id: 3,
    subcat_id: 8,
  },
  {
    id: 15,
    name: "Ps5",
    price: 800,
    image: require("../assets/Products/product_15.png"),
    cat_id: 3,
    subcat_id: 8,
  },
];

export const flatList1 = products.slice(0, 5);

export const flatList2 = products.slice(5, 10);

export const flatList3 = products.slice(10, 15);

export const categories = [
  { id: 1, name: "laptops" },
  { id: 2, name: "phones" },
  { id: 3, name: "consoles" },
];

export const brands = [
  { id: 1, name: "lenovo", cat_id: 1 },
  { id: 2, name: "Apple", cat_id: 1 },
  { id: 3, name: "Dell", cat_id: 1 },
  { id: 4, name: "Asus", cat_id: 1 },
  { id: 5, name: "Apple", cat_id: 2 },
  { id: 6, name: "Samsung", cat_id: 2 },
  { id: 7, name: "Microsoft", cat_id: 3 },
  { id: 8, name: "Sony", cat_id: 3 },
];

export const carouselData = [
  {
    id: 1,
    name: "Laptop Samsung",
    price: 800,
    image: require("../assets/Products/product_1.png"),
  },
  {
    id: 2,
    name: "Macbook Laptop",
    price: 1600,
    image: require("../assets/Products/product_2.png"),
  },
];
