import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifyError = (message) =>
  toast.error(message, {
    position: "top-center",
    theme: "dark",
    draggable: true,
    closeOnClick: true,
    pauseOnHover: true,
  });

export const notifySuccess = (message) =>
  toast.success(message, {
    position: "top-center",
    theme: "dark",
    draggable: true,
    closeOnClick: true,
    pauseOnHover: true,
  });

export const notifyInfo = (message) =>
  toast.info(message, {
    position: "top-center",
    theme: "dark",
    draggable: true,
    closeOnClick: true,
    pauseOnHover: true,
  });