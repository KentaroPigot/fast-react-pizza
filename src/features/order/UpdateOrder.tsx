import { ActionFunctionArgs, useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

// type Props = { order: Order };

const UpdateOrder: React.FC = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>;
    </fetcher.Form>
  );
};

export default UpdateOrder;

type MyParams = { orderId: string };

export async function action(args: ActionFunctionArgs<MyParams>) {
  const data = { priority: true };
  await updateOrder(args.params.orderId as string, data);

  return null;
}
