import { parseISO, format } from "date-fns";

export const formatDate = (dateStr) => {
  if (!dateStr) {
    return "";
  }
  const parsedDate = parseISO(dateStr);
  return format(new Date(parsedDate), "MMMM dd, yyyy");
};
