import type { DrupalNode } from "next-drupal"
import Image from "next/image"
import { absoluteUrl } from "@/lib/utils"
import Link from "next/link"

interface ParagraphProps {
  paragraph: DrupalNode
}

function ParagraphCallToAction({ paragraph }: ParagraphProps) {
  // console.log(paragraph.field_image_media)
  return (
    <>
      <div className="paragraph paragraph--type--call-to-action-cta-banner paragraph--view-mode--default">
        <div className="cta__banner_wraper component__wrapper ">
          <div className="cta-banner--with-image cta-banner--with-image">
            <div className="cta-banner--with-image__content">
              <h2 className="cta-banner--headline">
                {paragraph.field_cta_headline}
              </h2>
              <p className="cta-banner--description p24">
                {paragraph.field_cta_description}
              </p>
              <Link
                className="cta-banner--cta-link btn btn--white"
                href={paragraph.field_cta_link.full_url}
              >
                {paragraph.field_cta_link.title}
              </Link>
            </div>
            <div className="cta-banner--with-image__image">
              {/* <div className="field field--name-field-image field--type-entity-reference field--label-hidden field__item">  */}
              {/* <img loading="lazy" src="/sites/default/files/styles/image_cta_banner_3_2/public/2024-09/image-9_0.jpg.webp?itok=10JycZlG" width="708" height="472" alt="dfsdf"> */}
              <Image
                src={
                  paragraph.field_image?.field_media_image.links
                    .cta_banner_708x472.href
                }
                alt={`Image of - ${paragraph.field_heading}`}
                width={
                  paragraph.field_image?.field_media_image.links
                    .cta_banner_708x472.meta.width
                }
                height={
                  paragraph.field_image?.field_media_image.links
                    .cta_banner_708x472.meta.height
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ParagraphCallToAction
