import { useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useMessage = () => {
  return useCallback((text, type = "info") => {
    if (type === "success") {
      toast.success(text);
    } else if (type === "error") {
      toast.error(text);
    } else {
      toast.info(text);
    }
  }, []);
};
