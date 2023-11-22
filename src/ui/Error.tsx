import {
  // isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";
import LinkButton from "./LinkButton";

const ErrorElem: React.FC = () => {
  const error: unknown = useRouteError();
  // let errorMessage: string;

  // if (isRouteErrorResponse(error)) {
  //   // error is type `ErrorResponse`
  //   errorMessage = error.data?.message || error.statusText;
  // } else if (error instanceof Error) {
  //   console.log(error);
  //   errorMessage = error.data;
  // } else if (typeof error === "string") {
  //   errorMessage = error;
  // } else {
  //   console.error(error);
  //   errorMessage = "Unknown error";
  // }

  // console.log(errorMessage);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>
        {(error as Error)?.message ||
          (error as { statusText?: string })?.statusText}
      </p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
};

export default ErrorElem;
