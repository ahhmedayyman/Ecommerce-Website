// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// interface IProps {
//   title: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// }

// const ProductCard = ({
//   title = "Slim Fit Fine-knit Turtleneck Sweater",
//   description = "Button-up shirt sleeves and a relaxed silhouette. It's tailored with drapey.",
//   price = 89.99,
//   imageUrl = "https://townteam.com/cdn/shop/files/UND25GSCR33333TM1-White_1370x.jpg?v=1724572052",
// }: IProps) => {
//   return (
//     <div className="border rounded-xl p-2 flex flex-col w-full md:w-mdwidth lg:w-lgwidth bg-white shadow-sm hover:shadow-md transition-all duration-300">
//       <div className="w-full h-[350px] overflow-hidden rounded-lg mb-4 group">
//         <img 
//           className="w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-500" 
//           src={imageUrl} 
//           alt={title} 
//         />
//       </div>
      
//       <div className="flex-1 flex flex-col">
//         <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
//           {title}
//         </h3>
        
//         <p className="text-sm text-gray-600 line-clamp-3 mb-2">
//           {description}
//         </p>
//           <div className="mb-4">
//             <span className="text-primary-foreground text-lg">
//               ${price.toFixed(2)}
//             </span>
//           </div>
//           <div className="w-full flex justify-between gap-2">
//             <button className="w-1/2 p-2 rounded bg-slate-300">Edit</button>
//             <button className="w-1/2 p-2 rounded bg-slate-300">Destroy</button>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default ProductCard;