export type ArrayGroupBy<T> = {
  title: string;
  data: Array<T>;
};

export const arrayGroupBy = <T = unknown>(
  objectArray: Array<T>,
  key: keyof T,
): Array<ArrayGroupBy<T>> => {
  return objectArray.reduce(
    (groupedArray: Array<ArrayGroupBy<T>>, currentObject: T) => {
      const title = currentObject[key] as unknown as string;
      const index = groupedArray.findIndex(
        (item: ArrayGroupBy<T>) => item.title === title,
      );

      if (index !== -1) {
        groupedArray[index].data.push(currentObject);
      } else {
        groupedArray.push({
          title,
          data: [currentObject],
        });
      }

      return groupedArray;
    },
    [],
  );
};
