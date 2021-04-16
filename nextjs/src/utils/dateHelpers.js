import { format } from 'date-fns';

const formatShortDate = (date) => format(new Date(date), 'MM.dd.yy');

const formatLongDate = (date) => format(new Date(date), 'MMMM d, yyyy');

export { formatShortDate, formatLongDate };
