import { v4 as uuid } from "uuid";
import { IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Premium Leather Jacket",
    description:
      "A stylish leather jacket made from high-quality genuine leather for a sleek and warm look.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WWBP28473TM1-Black-5_1370x.jpg?v=1730282353",
    price: "99.99$",
    colors: ["#FF0032", "#2563eb", "#FFE631"],
    category: {
      name: "Jackets",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WWBP28473TM1-Black-5_1370x.jpg?v=1730282353",
    },
  },
  {
    id: uuid(),
    title: "Casual Summer Jacket",
    description:
      "A lightweight casual jacket, perfect for mild weather, featuring a modern design and comfortable materials.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WWBP28467TM1-Silver-6_1370x.jpg?v=1730282372",
    price: "99.99$",
    colors: ["#FFFFFF", "#FF5733", "#900C3F"],
    category: {
      name: "Jackets",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WWBP28467TM1-Silver-6_1370x.jpg?v=1730282372",
    },
  },
  {
    id: uuid(),
    title: "Winter Puffer Jacket",
    description:
      "A warm and cozy puffer jacket, designed to keep you comfortable during the coldest days.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WWBP28029TM1-Petrol-6_1370x.jpg?v=1730282387",
    price: "99.99$",
    colors: ["#000000", "#F5F5F5", "#FF0000"],
    category: {
      name: "Jackets",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WWBP28029TM1-Petrol-6_1370x.jpg?v=1730282387",
    },
  },
  {
    id: uuid(),
    title: "Classic Denim Jacket",
    description:
      "A timeless denim jacket with a perfect fit, suitable for any casual occasion.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WWBP28026TM1-Black-6_1370x.jpg?v=1730282877",
    price: "99.99$",
    colors: ["#FFD700", "#FF4500", "#1E90FF"],
    category: {
      name: "Jackets",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WWBP28026TM1-Black-6_1370x.jpg?v=1730282877",
    },
  },
  {
    id: uuid(),
    title: "Luxury Wool Coat",
    description:
      "A luxurious wool coat, perfect for formal events and cold evenings, with a sleek design.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WWBP28027TM1-Camel-4_1370x.jpg?v=1730282391",
    price: "99.99$",
    colors: ["#2C3E50", "#8E44AD", "#BDC3C7"],
    category: {
      name: "Jackets",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WWBP28027TM1-Camel-4_1370x.jpg?v=1730282391",
    },
  },
  {
    id: uuid(),
    title: "Slim Fit Blazer",
    description:
      "A modern slim-fit blazer, ideal for professional and semi-formal occasions.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WWBP28009TM1-Beige-2_1370x.jpg?v=1730283017",
    price: "99.99$",
    colors: ["#FFA500", "#FF0000", "#008000"],
    category: {
      name: "Jackets",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WWBP28009TM1-Beige-2_1370x.jpg?v=1730283017",
    },
  },
  {
    id: uuid(),
    title: "Hooded Winter Coat",
    description:
      "A hooded winter coat designed for maximum warmth and protection from harsh weather.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WHPP28453TM1-NVY-BRN-2_1370x.jpg?v=1730989681",
    price: "99.99$",
    colors: ["#32CD32", "#FFD700", "#0000FF"],
    category: {
      name: "Jackets",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WHPP28453TM1-NVY-BRN-2_1370x.jpg?v=1730989681",
    },
  },
  {
    id: uuid(),
    title: "Military Style Jacket",
    description:
      "A rugged military-inspired jacket with a durable design and classic style.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WchBP19120TM1-Charcoal-2_1370x.jpg?v=1730283095",
    price: "99.99$",
    colors: ["#FFFFFF", "#000000", "#8B0000"],
    category: {
      name: "Jackets",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WchBP19120TM1-Charcoal-2_1370x.jpg?v=1730283095",
    },
  },
  {
    id: uuid(),
    title: "Adventure Parka Jacket",
    description:
      "A durable parka jacket designed for outdoor adventures and extreme weather conditions.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WchBH19124TM1-BLK-WHT-2_1370x.jpg?v=1730283095",
    price: "99.99$",
    colors: ["#FFD700", "#4B0082", "#228B22"],
    category: {
      name: "Jackets",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WchBH19124TM1-BLK-WHT-2_1370x.jpg?v=1730283095",
    },
  },
  {
    id: uuid(),
    title: "Elegant Trench Coat",
    description:
      "An elegant trench coat with a tailored fit, perfect for layering over your formal attire.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC24WWBP28415TM1_Black-2_1370x.jpg?v=1705497272",
    price: "99.99$",
    colors: ["#FF0000", "#FFFF00", "#000000"],
    category: {
      name: "Jackets",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC24WWBP28415TM1_Black-2_1370x.jpg?v=1705497272",
    },
  },
  {
    id: uuid(),
    title: "Sports Windbreaker",
    description:
      "A lightweight windbreaker designed for sports and active lifestyles.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC24WWBP28464TM1_Beige-2_ee0926af-9679-4947-8260-ab8460c3050f_1370x.jpg?v=1706191049",
    price: "99.99$",
    colors: ["#000000", "#FF4500", "#2E8B57"],
    category: {
      name: "Jackets",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC24WWBP28464TM1_Beige-2_ee0926af-9679-4947-8260-ab8460c3050f_1370x.jpg?v=1706191049",
    },
  },
  {
    id: uuid(),
    title: "Vintage Bomber Jacket",
    description:
      "A retro-style bomber jacket, combining a classic look with modern comfort.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC24WFWP28376TM1-Olive-6_bb1d409f-e066-4373-8f0c-c37d01fcc3f1_1370x.jpg?v=1730363347",
    price: "99.99$",
    colors: ["#808080", "#FFFFFF", "#000000"],
    category: {
      name: "Jackets",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC24WFWP28376TM1-Olive-6_bb1d409f-e066-4373-8f0c-c37d01fcc3f1_1370x.jpg?v=1730363347",
    },
  },
];
