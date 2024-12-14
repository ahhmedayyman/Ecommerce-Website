
import { IProduct } from "../interfaces";
import Button from "./ui/Button";
import Image from "./ui/Image";

interface IProps {
 product: IProduct
}

const ProductCard = ({product}: IProps) => {
  const {title, imageURL, description, price} = product
  return (
    <div className="border rounded-xl p-2 flex flex-col w-full md:w-mdwidth lg:w-lgwidth bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <div className="w-full h-[350px] overflow-hidden rounded-lg mb-4 group">
        <Image imageURL={imageURL} alt={title} className="w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-500" />
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-lg mb-1">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-row items-center space-x-2 mb-2">
          <span className="w-5 h-5 bg-indigo-500 rounded-full border cursor-pointer" />
          <span className="w-5 h-5 bg-yellow-500 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer" />
        </div>

        <div className="mb-4 flex justify-between items-center">
          <span className="text-lg font-semibold text-indigo-500">
            {price}
          </span>
          <Image imageURL={imageURL} alt={title} className="w-10 h-10 rounded-full object-cover object-left-top" />
        </div>

        <div className="flex justify-between gap-2">
          <Button className="bg-indigo-500">Edit</Button>
          <Button className="bg-red-500">Destroy</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
