"use client"
import { fixImageUrls } from "@/lib/utils"
import type { DrupalNode } from "next-drupal"
import { useState } from "react"

interface ParagraphProps {
  paragraph: DrupalNode
  index: number
}

function ParagraphAccordionItem({ paragraph, index }: ParagraphProps) {
  // console.log(paragraph)
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleSection = (index: any) => {
    // console.log(index)
    setActiveIndex(activeIndex === index ? null : index) // Close if open, otherwise open it
  }

  // const fixedContent = fixImageUrls(
  //   paragraph.field_accordion_item_des?.processed
  // )

  return (
    <>
      <div className="field__item">
        {" "}
        <div
          className={`paragraph paragraph--type--accordion-item paragraph--view-mode--default ${activeIndex === index ? "open" : ""}`}
        >
          <h3 onClick={() => toggleSection(index)}>
            <button aria-expanded="false" className="accordion-trigger">
              <span className="field field--name-field-heading field--type-string field--label-hidden field__item accordion-title">
                {paragraph.field_heading}
              </span>
            </button>
          </h3>

          <div
            className={`accordion-description ${activeIndex === index ? "active" : ""}`}
            style={{
              display: activeIndex === index ? "block" : "none",
            }}
          >
            <div
              className="field field--name-field-description field--type-text-long field--label-hidden field__item richtext"
              dangerouslySetInnerHTML={{
                __html: paragraph.field_description?.processed,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ParagraphAccordionItem
