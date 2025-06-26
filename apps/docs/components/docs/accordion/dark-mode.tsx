'use client'

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "@faiz-ui/react"

export default function AccordionDarkMode() {
  return (
    <div className="dark bg-gray-900 p-6 rounded-lg">
      <h3 className="text-white font-medium mb-4">Dark Mode Accordion Examples</h3>
      
      <div className="space-y-4">
        <Accordion color="primary" defaultValue="dark-1">
          <AccordionItem value="dark-1">
            <AccordionHeader value="dark-1">Primary in Dark Mode</AccordionHeader>
            <AccordionContent value="dark-1">
              The primary color adapts beautifully to dark backgrounds with proper contrast.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Accordion color="success" variant="outline" defaultValue="dark-2">
          <AccordionItem value="dark-2">
            <AccordionHeader value="dark-2">Success Outline Variant</AccordionHeader>
            <AccordionContent value="dark-2">
              Outline variants maintain their elegance in dark mode with adjusted borders.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Accordion color="warning" variant="ghost" defaultValue="dark-3">
          <AccordionItem value="dark-3">
            <AccordionHeader value="dark-3">Warning Ghost Variant</AccordionHeader>
            <AccordionContent value="dark-3">
              Ghost variants provide subtle styling that works perfectly in dark environments.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Accordion color="info" variant="sketchy" defaultValue="dark-4">
          <AccordionItem value="dark-4">
            <AccordionHeader value="dark-4">Info Sketchy Variant</AccordionHeader>
            <AccordionContent value="dark-4">
              The sketchy variant maintains its hand-drawn character with dark mode optimizations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
