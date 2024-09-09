export const formatDateWithoutDot = (date: any): string => {
  const dateObject = new Date(date);

  const options: any = {
    month: "short",
    day: "numeric",
  };
  const formattedDate = dateObject.toLocaleDateString("no-NO", options);
  const formattedDateWithoutDot = formattedDate.replace(/\./g, "");
  return formattedDateWithoutDot;
};
