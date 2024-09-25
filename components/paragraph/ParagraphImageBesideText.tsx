import type { DrupalNode } from "next-drupal"
import Image from "next/image"
import Link from "next/link"

interface ParagraphProps {
  paragraph: DrupalNode
}

function ParagraphImageBesideText({ paragraph }: ParagraphProps) {
  const layoutClass = paragraph.field_layout
  return (
    <>
      <div
        className={`paragraph text_image_component_wrapper check_component_type_below paragraph--type--image-beside-text paragraph--view-mode--default ${layoutClass} similar_component_type_below`}
        data-once="check_component_type_below"
      >
        <div className="component__wrapper">
          <div className="text_image_wrapper">
            <div className="left_content_wrapper">
              <div className="text_eyebrow">{paragraph.field_eyebrow}</div>
              <h2>{paragraph.field_heading}</h2>
              <div
                className="text_content richtext"
                dangerouslySetInnerHTML={{
                  __html: paragraph.field_description?.processed,
                }}
              ></div>
              <div className="cta cta_btn">
                <Link
                  className="link-arrow-btn link-arrow-btn--default"
                  href={paragraph.field_cta_link.full_url}
                >
                  {paragraph.field_cta_link.title}
                </Link>
              </div>
            </div>
            <div className="right_content_wrapper">
              <div className="image_content">
                {/* <img alt="Card title - Uniquely generate clicks-and-mortar infrastructures" loading="lazy" src="/sites/default/files/styles/image_beside_text/public/2024-09/image-9_0.jpg.webp?itok=eZeFjoad" width="848" height="482"> */}
                <Image
                  src={
                    paragraph.field_image.field_media_image.links
                      .image_beside_text.href
                  }
                  alt={`Image of - ${paragraph.field_heading}`}
                  width={
                    paragraph.field_image.field_media_image.links
                      .image_beside_text.meta.width
                  }
                  height={
                    paragraph.field_image.field_media_image.links
                      .image_beside_text.meta.height
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ParagraphImageBesideText
