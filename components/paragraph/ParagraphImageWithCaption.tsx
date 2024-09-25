import type { DrupalNode } from "next-drupal"
import Image from "next/image"
import { absoluteUrl } from "@/lib/utils"

interface ParagraphProps {
  paragraph: DrupalNode
}

function ParagraphImageWithCaption({ paragraph }: ParagraphProps) {
  return (
    <>
      <div
        className="paragraph container-small check_next_component component__wrapper paragraph--type--image-with-caption paragraph--view-mode--default"
        data-once="check_next_component"
      >
        <div className="image-with-caption">
          <div className="image-with-caption__image">
            <Image
              src={
                paragraph.field_image.field_media_image.links.image_with_caption
                  .href
              }
              alt={`Image of - ${paragraph.field_heading}`}
              width={
                paragraph.field_image.field_media_image.links.image_with_caption
                  .meta.width
              }
              height={
                paragraph.field_image.field_media_image.links.image_with_caption
                  .meta.height
              }
            />
          </div>
        </div>
        <div className="caption-text-wrapper">
          <div
            className="caption-text-innerwrapper richtext"
            dangerouslySetInnerHTML={{
              __html: paragraph.field_caption?.processed,
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default ParagraphImageWithCaption
