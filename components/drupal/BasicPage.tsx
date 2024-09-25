import type { DrupalNode, DrupalParagraph } from "next-drupal"
import ParagraphComponent from "../paragraph/ParagraphComponent"
import ParagraphHeroInnerBanner from "../paragraph/ParagraphHeroInnerBanner"
// import { fixImageUrls } from "@/lib/utils"

interface BasicPageProps {
  node: DrupalNode
}

export function BasicPage({ node, ...props }: BasicPageProps) {
  // console.log(node.field_hero.field_image.field_media_image)

  const components: DrupalParagraph[] = node.field_components
  return (
    <article {...props}>
      <ParagraphHeroInnerBanner
        title={node.title}
        paragraph={node.field_hero}
      />
      <div className="content-body paragraph--type--rich-text container-small component__wrapper check_next_component ">
        {node.body?.processed && (
          <div
            dangerouslySetInnerHTML={{
              __html: node.body?.processed,
            }}
            className=""
          />
        )}
      </div>

      {/* Render Paragraphs */}
      {node.field_components.map((paragraph: any) => (
        <ParagraphComponent key={paragraph.id} paragraph={paragraph} />
      ))}
    </article>
  )
}
