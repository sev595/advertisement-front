import { INewsDescription } from "../../types/news";

interface TextTypeProps {
  item: INewsDescription;
}

function splitTextBySentence(text:string):string[] {
  const sentences = text.match(/[^.!?]+[.!?]+/g); // Match sentences with their ending punctuation
  if (!sentences) return [text, ""]; // If no sentence boundaries are found, return the whole text as the first part

  let part1 = "";
  let part2 = "";
  for (let i = 0; i < sentences.length; i++) {
      if (part1.length + sentences[i].length <= text.length / 2) {
          part1 += sentences[i]; // Add to part1 while staying in the first half
      } else {
          part2 += sentences[i]; // Add remaining sentences to part2
      }
  }
  return [part1.trim(), part2.trim()];
}


const TextType = ({ item }: TextTypeProps) => {
  if (item?.code && item?.text) {
    // const firstText = 
    // const [part1, part2] = splitTextBySentence(item.text);
    console.log("Gev",item.text);
    
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
