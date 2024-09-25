import type { DrupalNode } from "next-drupal"
import { fixImageUrls } from "@/lib/utils"

interface ParagraphProps {
  paragraph: DrupalNode
}

function ParagraphRichText({ paragraph }: ParagraphProps) {
  const fixedContent = fixImageUrls(paragraph.field_text?.processed)

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: paragraph.field_rich_text?.processed,
        }}
        className="content-body paragraph--type--rich-text container-small component__wrapper check_next_component similar_component_type_below_reduce_space"
      />
    </>
  )
}

export default ParagraphRichText
