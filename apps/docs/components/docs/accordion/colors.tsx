'use client'

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "@faiz-ui/react"

export default function AccordionColors() {
  return (
    <div className="space-y-4">
      <Accordion color="primary" defaultValue="primary-1">
        <AccordionItem value="primary-1">
          <AccordionHeader value="primary-1">Primary Color</AccordionHeader>
          <AccordionContent value="primary-1">
            The primary color theme for main content sections.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Accordion color="secondary" defaultValue="secondary-1">
        <AccordionItem value="secondary-1">
          <AccordionHeader value="secondary-1">Secondary Color</AccordionHeader>
          <AccordionContent value="secondary-1">
            The secondary color theme for supporting content.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Accordion color="success" defaultValue="success-1">
        <AccordionItem value="success-1">
          <AccordionHeader value="success-1">Success Color</AccordionHeader>
          <AccordionContent value="success-1">
            Perfect for positive information and confirmations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Accordion color="warning" defaultValue="warning-1">
        <AccordionItem value="warning-1">
          <AccordionHeader value="warning-1">Warning Color</AccordionHeader>
          <AccordionContent value="warning-1">
            Use for important notices and cautionary information.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Accordion color="danger" defaultValue="danger-1">
        <AccordionItem value="danger-1">
          <AccordionHeader value="danger-1">Danger Color</AccordionHeader>
          <AccordionContent value="danger-1">
            For critical information and error states.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Accordion color="info" defaultValue="info-1">
        <AccordionItem value="info-1">
          <AccordionHeader value="info-1">Info Color</AccordionHeader>
          <AccordionContent value="info-1">
            Ideal for informational content and help sections.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
