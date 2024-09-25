import type { DrupalNode } from "next-drupal"
import Image from "next/image"
import { absoluteUrl } from "@/lib/utils"
import ParagraphAccordionItem from "./ParagraphAccordionItem"

interface ParagraphProps {
  paragraph: DrupalNode
}

function ParagraphAccordion({ paragraph }: ParagraphProps) {
  return (
    <>
      <div className="container-small component__wrapper paragraph paragraph--type--accordion paragraph--view-mode--default">
        <div className="field field--name-field-heading-text field--type-string field--label-hidden field__item">
          {paragraph.field_heading_text}
        </div>

        <div className="field field--name-field-accordion-items field--type-entity-reference-revisions field--label-hidden field__items">
          {paragraph.field_accordion_items.map(
            (paragraph: any, index: number) => (
              <ParagraphAccordionItem
                key={paragraph.id}
                paragraph={paragraph}
                index={index}
              />
            )
          )}
        </div>
      </div>
    </>
  )
}

export default ParagraphAccordion
