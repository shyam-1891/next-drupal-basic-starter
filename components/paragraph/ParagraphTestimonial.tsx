import type { DrupalNode } from "next-drupal"
import Image from "next/image"
import { absoluteUrl } from "@/lib/utils"

interface ParagraphProps {
  paragraph: DrupalNode
}

function ParagraphTestimonial({ paragraph }: ParagraphProps) {
  const image_url =
    paragraph.field_image?.field_media_image.links.testimonial.href
  // const result = str.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
  return (
    <>
      <div className="paragraph component__wrapper paragraph--type--testimonial paragraph--view-mode--default">
        <div className="testimonial__wrapper component__wrapper testimonial--with-image">
          <div className="testimonial">
            {image_url && (
              <div
                className="testimonial--image"
                style={{
                  backgroundImage: `url(
                ${image_url}
              )`,
                }}
              ></div>
            )}

            <div className="testimonial--content">
              <h2
                className="testimonial--content__quote"
                dangerouslySetInnerHTML={{
                  __html: paragraph.field_caption?.processed.replace(
                    /(<p[^>]+?>|<p>|<\/p>)/gim,
                    ""
                  ),
                }}
              >
                {/* {paragraph.field_caption} */}
              </h2>
              <p className="testimonial--content__attribution">
                {paragraph.field_heading}
              </p>
              <a
                className="testimonial--content__link link-arrow-btn link-arrow-btn--white"
                href={paragraph.field_testimonial_link.full_url}
                target="_blank"
                title="Opens in a new window"
              >
                {paragraph.field_testimonial_link.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ParagraphTestimonial
