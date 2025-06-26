'use client'

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "@faiz-ui/react"

export default function AccordionAnimations() {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-medium text-green-900 dark:text-green-100 mb-2">
          🎬 Animation Features
        </h3>
        <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
          <li>• <strong>Height Transitions:</strong> Smooth expand/collapse with measured heights</li>
          <li>• <strong>Opacity Fading:</strong> Content fades in and out gracefully</li>
          <li>• <strong>Transform Effects:</strong> Subtle scale and translate animations</li>
          <li>• <strong>Hardware Acceleration:</strong> GPU-optimized for smooth performance</li>
        </ul>
      </div>
      
      <Accordion>
        <AccordionItem value="animation-1">
          <AccordionHeader value="animation-1">
            ✨ Animation Demo - Click to See Magic
          </AccordionHeader>
          <AccordionContent value="animation-1">
            <div className="space-y-4">
              <p>Watch how smoothly this content appears and disappears!</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <h4 className="font-medium mb-2">Height Animation</h4>
                  <p className="text-sm">The container smoothly animates from 0 to the actual content height.</p>
                </div>
                
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                  <h4 className="font-medium mb-2">Opacity Transition</h4>
                  <p className="text-sm">Content fades in and out with perfect timing.</p>
                </div>
              </div>
              
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                <h4 className="font-medium mb-2">Transform Effects</h4>
                <p className="text-sm">
                  Subtle scale and translate transforms add depth and character to the animation.
                  Try expanding and collapsing multiple times to see the smooth transitions!
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
