import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";
import { useSelector } from "react-redux";

type Props = { item: Item };

const CartItem: React.FC<Props> = ({ item }) => {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currenQuantity = useSelector(getCurrentQuantityById(pizzaId));

  // console.log(pizzaId);

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currenQuantity={currenQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
};

export default CartItem;
