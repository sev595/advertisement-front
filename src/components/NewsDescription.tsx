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
        formatedData.map((item: INewsDescription, index: number) => {

          if (index === 2 ) return (
            <>
              <div data-type="_mgwidget" data-widget-id="1716823" style={{minHeight: "300px"}}>
              </div>
             {
              (function(w,q){w[q] = w[q] || [];w[q].push(["_mgc.load"])})(window,"_mgq")
             }
            </>

          )
          if (index === 7 ) return (
            <>
              <div data-type="_mgwidget" data-widget-id="1716876" style={{minHeight: "300px"}}>
              </div>
             {
              (function(w,q){w[q] = w[q] || [];w[q].push(["_mgc.load"])})(window,"_mgq")
             }
            </>

          )
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