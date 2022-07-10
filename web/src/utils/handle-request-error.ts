import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface INestError {
  error: string;
  message: string[] | string;
  statusCode: number;
}

export const handleRequestErrorMessage = (error: AxiosError<INestError>) => {
  const { message } = error.response!.data;

  if (typeof message === "string") {
    return toast.error(message);
  }

  return message.map((msg: string) => {
    return toast.error(msg);
  });
};
