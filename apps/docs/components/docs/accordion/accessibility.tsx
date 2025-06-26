'use client'

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "@faiz-ui/react"

export default function AccordionAccessibility() {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
          ♿ Accessibility Features
        </h3>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• <strong>ARIA Support:</strong> Full ARIA attributes for screen readers</li>
          <li>• <strong>Keyboard Navigation:</strong> Tab, Enter, and Space key support</li>
          <li>• <strong>Focus Management:</strong> Proper focus indicators and flow</li>
          <li>• <strong>Screen Reader:</strong> Announces state changes and content</li>
        </ul>
      </div>
      
      <Accordion defaultValue="aria-1">
        <AccordionItem value="aria-1">
          <AccordionHeader value="aria-1">
            🔍 ARIA Attributes Demo
          </AccordionHeader>
          <AccordionContent value="aria-1">
            <div className="space-y-3">
              <p>This accordion includes the following ARIA attributes:</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><code>aria-expanded</code>: Indicates if the panel is expanded</li>
                <li><code>aria-controls</code>: Links header to its content panel</li>
                <li><code>aria-labelledby</code>: Links content to its header</li>
                <li><code>role="region"</code>: Identifies content as a landmark</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="keyboard-1">
          <AccordionHeader value="keyboard-1">
            ⌨️ Keyboard Navigation
          </AccordionHeader>
          <AccordionContent value="keyboard-1">
            <div className="space-y-3">
              <p>Try these keyboard interactions:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <strong>Tab:</strong> Move between headers
                </div>
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <strong>Enter:</strong> Toggle panel
                </div>
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <strong>Space:</strong> Toggle panel
                </div>
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <strong>Shift+Tab:</strong> Move backwards
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
