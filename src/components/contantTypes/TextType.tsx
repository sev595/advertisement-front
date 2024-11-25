import { INewsDescription } from "../../types/news"

interface TextTypeProps {
  item: INewsDescription
}

const TextType = ({ item }: TextTypeProps) => {

  if (item?.code && item?.text) return <div dangerouslySetInnerHTML={{ __html: item.text }} />
  return (
    <div>{item.text}</div>
  )
}

export default TextType