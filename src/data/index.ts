import { v4 as uuid } from "uuid";
import { IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "2022 Genesis GV70: Nominee",
    description:
      "As luxury brands go, South Korea's Genesis is still in its infancy, having sold its first cars as an independent Hyundai subsidiary.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WWBP28473TM1-Black-5_1370x.jpg?v=1730282353",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FFE631"],
    category: {
      name: "Cars",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WWBP28473TM1-Black-5_1370x.jpg?v=1730282353",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark: 995cc Petrol",
    description:
      "The Chevrolet Spark brings urban style, fuel efficiency, and a surprising amount of space.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WWBP28467TM1-Silver-6_1370x.jpg?v=1730282372",
    price: "15000",
    colors: ["#FFFFFF", "#FF5733", "#900C3F"],
    category: {
      name: "Compact Cars",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WWBP28467TM1-Silver-6_1370x.jpg?v=1730282372",
    },
  },
  {
    id: uuid(),
    title: "Tesla Model S",
    description:
      "The Tesla Model S is a high-performance electric car offering unparalleled range and luxury.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WWBP28029TM1-Petrol-6_1370x.jpg?v=1730282387",
    price: "79999",
    colors: ["#000000", "#F5F5F5", "#FF0000"],
    category: {
      name: "Electric Cars",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WWBP28029TM1-Petrol-6_1370x.jpg?v=1730282387",
    },
  },
  {
    id: uuid(),
    title: "Ford Mustang GT",
    description:
      "The Ford Mustang GT combines classic muscle car design with modern performance.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WWBP28026TM1-Black-6_1370x.jpg?v=1730282877",
    price: "55000",
    colors: ["#FFD700", "#FF4500", "#1E90FF"],
    category: {
      name: "Sports Cars",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WWBP28026TM1-Black-6_1370x.jpg?v=1730282877",
    },
  },
  {
    id: uuid(),
    title: "BMW 3 Series",
    description:
      "The BMW 3 Series offers a luxurious ride with precision handling and modern tech.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WWBP28027TM1-Camel-4_1370x.jpg?v=1730282391",
    price: "43000",
    colors: ["#2C3E50", "#8E44AD", "#BDC3C7"],
    category: {
      name: "Luxury Cars",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WWBP28027TM1-Camel-4_1370x.jpg?v=1730282391",
    },
  },
  {
    id: uuid(),
    title: "Lamborghini Aventador",
    description:
      "A masterpiece of engineering and design, the Aventador is built for speed and style.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WWBP28009TM1-Beige-2_1370x.jpg?v=1730283017",
    price: "393695",
    colors: ["#FFA500", "#FF0000", "#008000"],
    category: {
      name: "Supercars",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WWBP28009TM1-Beige-2_1370x.jpg?v=1730283017",
    },
  },
  {
    id: uuid(),
    title: "Toyota Prius Hybrid",
    description:
      "The Toyota Prius Hybrid offers outstanding fuel efficiency and environmentally friendly driving.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WHPP28453TM1-NVY-BRN-2_1370x.jpg?v=1730989681",
    price: "25000",
    colors: ["#32CD32", "#FFD700", "#0000FF"],
    category: {
      name: "Hybrid Cars",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WHPP28453TM1-NVY-BRN-2_1370x.jpg?v=1730989681",
    },
  },
  {
    id: uuid(),
    title: "Mercedes-Benz G-Class",
    description:
      "The G-Class offers rugged off-road capabilities and unmatched luxury.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WchBP19120TM1-Charcoal-2_1370x.jpg?v=1730283095",
    price: "130000",
    colors: ["#FFFFFF", "#000000", "#8B0000"],
    category: {
      name: "SUVs",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WchBP19120TM1-Charcoal-2_1370x.jpg?v=1730283095",
    },
  },
  {
    id: uuid(),
    title: "Jeep Wrangler",
    description:
      "The Jeep Wrangler is the ultimate adventure vehicle, built for rugged terrain.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC25WchBH19124TM1-BLK-WHT-2_1370x.jpg?v=1730283095",
    price: "45000",
    colors: ["#FFD700", "#4B0082", "#228B22"],
    category: {
      name: "Off-Road Vehicles",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC25WchBH19124TM1-BLK-WHT-2_1370x.jpg?v=1730283095",
    },
  },
  {
    id: uuid(),
    title: "Ferrari LaFerrari",
    description:
      "The Ferrari LaFerrari redefines speed and luxury with hybrid technology.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC24WWBP28415TM1_Black-2_1370x.jpg?v=1705497272",
    price: "1500000",
    colors: ["#FF0000", "#FFFF00", "#000000"],
    category: {
      name: "Exotics",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC24WWBP28415TM1_Black-2_1370x.jpg?v=1705497272",
    },
  },
  {
    id: uuid(),
    title: "Audi R8",
    description:
      "The Audi R8 is a sleek supercar offering a perfect mix of performance and design.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC24WWBP28464TM1_Beige-2_ee0926af-9679-4947-8260-ab8460c3050f_1370x.jpg?v=1706191049",
    price: "142700",
    colors: ["#000000", "#FF4500", "#2E8B57"],
    category: {
      name: "Sports Cars",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC24WWBP28464TM1_Beige-2_ee0926af-9679-4947-8260-ab8460c3050f_1370x.jpg?v=1706191049",
    },
  },
  {
    id: uuid(),
    title: "Porsche 911 Carrera",
    description:
      "The Porsche 911 Carrera remains a timeless icon of speed and sophistication.",
    imageURL:
      "https://townteam.com/cdn/shop/files/JAC24WFWP28376TM1-Olive-6_bb1d409f-e066-4373-8f0c-c37d01fcc3f1_1370x.jpg?v=1730363347",
    price: "101000",
    colors: ["#808080", "#FFFFFF", "#000000"],
    category: {
      name: "Luxury Sports",
      imageURL:
        "https://townteam.com/cdn/shop/files/JAC24WFWP28376TM1-Olive-6_bb1d409f-e066-4373-8f0c-c37d01fcc3f1_1370x.jpg?v=1730363347",
    },
  },
];
