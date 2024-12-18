import { INewsDescription } from "../../types/news";

interface TextTypeProps {
  item: INewsDescription;
}

const TextType = ({ item }: TextTypeProps) => {
  if (item?.code && item?.text) {
    return (
      <div
        style={{
          display: "block",
          width: "100%",
          aspectRatio: "16 / 9",
          overflow: "hidden",
        }}
        dangerouslySetInnerHTML={{ __html: item.text }}
      />
    );
  }
  return <div>{item.text}</div>;
};

export default TextType;
