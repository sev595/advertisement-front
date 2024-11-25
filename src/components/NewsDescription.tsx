import { newsDescriptionFormatter } from "../helpers/newsDescriptionFormatter";
import { INewsDescription } from "../types/news";
import ImageType from "./contantTypes/ImageType";
import TextType from "./contantTypes/TextType";

interface NewsDescriptionProps {
  newsDescription: INewsDescription[]
}

const NewsDescription = ({ newsDescription }: NewsDescriptionProps) => {
  const formatedData = newsDescriptionFormatter(newsDescription)

  return (
    <>
    {
      formatedData.map((item: INewsDescription) => {
        switch (item.type) {
          case "link":
            return <ImageType item={item} />
            break;
          case "text":
            return <TextType item={item} />
            break;
          default:
        }
      })
    }
    </>
  )
}

export default NewsDescription