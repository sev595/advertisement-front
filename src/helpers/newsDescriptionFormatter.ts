import { INewsDescription } from "../types/news";

export const newsDescriptionFormatter = (data: INewsDescription[]): INewsDescription[] => {
  const result: INewsDescription[] = [];

  const traverse = (nodes: INewsDescription[]): void => {
    nodes.forEach(node => {
      if (node.children && Array.isArray(node.children)) {
        result.push(...node.children);
      }
    });
  };

  traverse(data);
  return result;
};
