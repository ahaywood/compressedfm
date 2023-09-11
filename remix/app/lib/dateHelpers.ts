import { format } from 'date-fns';

const formatShortDate = (date: string) => format(new Date(date), 'MM.dd.yy');

const formatLongDate = (date: string) => format(new Date(date), 'MMMM d, yyyy');

const formatDashes = (date: string) => format(new Date(date), 'MM-dd-yy');

export { formatDashes, formatShortDate, formatLongDate };
