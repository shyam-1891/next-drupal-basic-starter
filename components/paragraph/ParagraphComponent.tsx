import { fixImageUrls } from "@/lib/utils"
import ParagraphAccordion from "./ParagraphAccordion"
import ParagraphImageWithText from "./ParagraphCallToAction"
import type { DrupalNode } from "next-drupal"
import ParagraphRichText from "./ParagraphRichText"
import ParagraphImageBesideText from "./ParagraphImageBesideText"
import ParagraphCallToAction from "./ParagraphCallToAction"
import ParagraphImageWithCaption from "./ParagraphImageWithCaption"
import ParagraphTestimonial from "./ParagraphTestimonial"

interface ParagraphProps {
  paragraph: DrupalNode
}

export default function ParagraphComponent({ paragraph }: ParagraphProps) {
  // console.log(paragraph.type)
  switch (paragraph.type) {
    case "paragraph--rich_text":
      return <ParagraphRichText paragraph={paragraph} />
    case "paragraph--image_beside_text":
      return <ParagraphImageBesideText paragraph={paragraph} />
    case "paragraph--call_to_action_cta_banner":
      return <ParagraphCallToAction paragraph={paragraph} />
    case "paragraph--accordion":
      return <ParagraphAccordion paragraph={paragraph} />
    case "paragraph--image_with_caption":
      return <ParagraphImageWithCaption paragraph={paragraph} />
    case "paragraph--testimonial":
      return <ParagraphTestimonial paragraph={paragraph} />
    // Add more cases for different Paragraph types
    default:
      return null
  }
}
