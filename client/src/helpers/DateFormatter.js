const DateFormatter = (date) => {
  const convertDate = new Date(date);
  return convertDate.toLocaleString("ko-KR");
};

export default DateFormatter;
