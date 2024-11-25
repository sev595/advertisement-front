import { INewsDescription } from "../../types/news";

interface ImageTypeProps {
  item: INewsDescription
}

const ImageType = ({ item }: ImageTypeProps) => {
  return (
    <img width="100%" src={item.url} alt="test" />
  )
}

export default ImageType