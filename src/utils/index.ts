export const fieldOrFirstElement = <T>(field: T | T[]): T => {
  if (Array.isArray(field)) {
    return field[0];
  }
  return field;
};

export const arrayOrToArray = <T>(field: T | T[]): T[] => {
  if (Array.isArray(field)) {
    return field;
  }
  return [field];
};

export const stringOrJoinStrings = (str: string | string[]): string => {
  if (Array.isArray(str)) {
    return str.join(", ");
  }
  return str;
};

export const sleep = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
