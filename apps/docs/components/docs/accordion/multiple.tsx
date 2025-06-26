'use client'

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "@faiz-ui/react"

export default function AccordionMultiple() {
  return (
    <Accordion allowMultiple defaultValue={["feature-1", "feature-3"]}>
      <AccordionItem value="feature-1">
        <AccordionHeader value="feature-1">Feature 1: Hand-drawn Design</AccordionHeader>
        <AccordionContent value="feature-1">
          <div className="space-y-2">
            <p>Our unique hand-drawn aesthetic sets us apart from typical flat design.</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Slight rotations for organic feel</li>
              <li>Custom shadows and borders</li>
              <li>Handwritten font family</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="feature-2">
        <AccordionHeader value="feature-2">Feature 2: Accessibility</AccordionHeader>
        <AccordionContent value="feature-2">
          <div className="space-y-2">
            <p>Built with accessibility as a first-class citizen.</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Full ARIA support</li>
              <li>Keyboard navigation</li>
              <li>Screen reader compatibility</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="feature-3">
        <AccordionHeader value="feature-3">Feature 3: Smooth Animations</AccordionHeader>
        <AccordionContent value="feature-3">
          <div className="space-y-2">
            <p>React Spring powered animations for smooth interactions.</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Height and opacity transitions</li>
              <li>Hardware acceleration</li>
              <li>Configurable timing</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
