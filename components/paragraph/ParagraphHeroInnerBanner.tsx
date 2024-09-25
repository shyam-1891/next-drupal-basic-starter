import type { DrupalNode } from "next-drupal"
import { fixImageUrls } from "@/lib/utils"
import Link from "next/link"

interface ParagraphProps {
  title?: string
  paragraph: DrupalNode
}
function ParagraphHeroInnerBanner({ title, paragraph }: ParagraphProps) {
  // console.log(
  //   paragraph.field_image.field_media_image.links.hero_banner_interior_pages.href
  // )
  const image_url =
    paragraph.field_image?.field_media_image.links.hero_banner_interior_pages
      .href

  return (
    <>
      <div className="paragraph paragraph--type--hero-interior-pages paragraph--view-mode--default">
        <div
          className={`hero_banner_wrapper ${image_url != undefined ? "imageexist" : "noimage"} `}
        >
          {image_url != undefined ? (
            <div
              className="hero_image"
              style={{
                backgroundImage: `url(
                ${image_url}
              )`,
              }}
            ></div>
          ) : (
            <div className="hero_no_image"></div>
          )}
          <div className="hero_banner_content">
            <h1>{paragraph.field_heading ? paragraph.field_heading : title}</h1>
            <div className="cta_group">
              {paragraph.field_hero_cta_buttons &&
                paragraph.field_hero_cta_buttons.map(
                  (cta: any, index: number) => {
                    return (
                      <>
                        {index == 0 ? (
                          <span className={`cta cta_btn_1`}>
                            <Link
                              className="btn btn--default"
                              href={cta.full_url}
                            >
                              {cta.title}
                            </Link>
                          </span>
                        ) : (
                          <span className={`cta cta_btn_2`}>
                            <Link
                              className="btn-transparent btn-transparent--default"
                              href={cta.full_url}
                            >
                              {cta.title}
                            </Link>
                          </span>
                        )}
                      </>
                    )
                  }
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ParagraphHeroInnerBanner
