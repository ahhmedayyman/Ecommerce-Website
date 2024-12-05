// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

interface IProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard = ({
  title = "Slim Fit Fine-knit Turtleneck Sweater",
  description = "Button-up shirt sleeves and a relaxed silhouette. It's tailored with drapey.",
  price = 89.99,
  imageUrl = "https://townteam.com/cdn/shop/files/UND25GSCR33333TM1-White_1370x.jpg?v=1724572052",
}: IProps) => {
  return (
    <div className="border rounded-xl p-2 flex flex-col w-full md:w-mdwidth lg:w-lgwidth bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <div className="w-full h-[350px] overflow-hidden rounded-lg mb-4 group">
        <img
          className="w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-500"
          src={imageUrl}
          alt={title}
        />
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-lg mb-1">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <div className="flex flex-row items-center space-x-2 mb-2">
          <span className="w-5 h-5 bg-indigo-500 rounded-full border cursor-pointer" />
          <span className="w-5 h-5 bg-yellow-500 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer" />
        </div>

        <div className="mb-2">
          <span className="text-lg text-indigo-500">
            ${price.toFixed(2)}
          </span>
        </div>

        <div className="w-full flex justify-between gap-2 text-white">
          <button className="w-1/2 p-2 rounded bg-indigo-500">Edit</button>
          <button className="w-1/2 p-2 rounded bg-red-500">Destroy</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
