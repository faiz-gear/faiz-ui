"use client";

import {useState} from "react";
import {Accordion, AccordionItem, AccordionHeader, AccordionContent} from "@faiz-ui/react";

export default function AccordionControlled() {
  const [value, setValue] = useState<string>("");

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setValue("item-1")}
          className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
        >
          Open First
        </button>
        <button
          onClick={() => setValue("item-2")}
          className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
        >
          Open Second
        </button>
        <button
          onClick={() => setValue("")}
          className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
        >
          Close All
        </button>
      </div>

      <p className="text-sm text-gray-600">Current state: {value || "none"}</p>

      <Accordion value={value} onValueChange={(value) => setValue(value as string)}>
        <AccordionItem value="item-1">
          <AccordionHeader value="item-1">Controlled Item 1</AccordionHeader>
          <AccordionContent value="item-1">
            This accordion is controlled by external state. You can open it using the buttons above.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionHeader value="item-2">Controlled Item 2</AccordionHeader>
          <AccordionContent value="item-2">
            The state is managed externally, allowing for programmatic control.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
