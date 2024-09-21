export const emptyString = (data) => {
  let returnVal = false;
  switch (typeof data) {
    case "object":
      Object.values(data).map((item: any) => {
        if (item.length < 1) {
          returnVal = true;
        }
      });
      return returnVal;
    default:
      if (data.length < 1) returnVal = true;
      return returnVal;
  }
};
