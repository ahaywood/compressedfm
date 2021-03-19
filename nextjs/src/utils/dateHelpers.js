import { format } from "date-fns";

const formatShortDate = (date) => {
  return format(new Date(date), 'MM.dd.yy')
}

const formatLongDate = (date) => {
  return format(new Date(date), 'MMMM d, yyyy');
}

export { formatShortDate, formatLongDate };