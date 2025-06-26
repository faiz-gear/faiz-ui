import * as React from "react";
import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {Accordion, AccordionItem, AccordionHeader, AccordionContent} from "../src";

// Test component with sample data
const TestAccordion = ({
  onValueChange,
  value,
  defaultValue,
  allowMultiple = false,
  isDisabled = false,
  ...props
}: any) => (
  <Accordion
    value={value}
    defaultValue={defaultValue}
    onValueChange={onValueChange}
    allowMultiple={allowMultiple}
    isDisabled={isDisabled}
    {...props}
  >
    <AccordionItem value="item-1">
      <AccordionHeader value="item-1">Header 1</AccordionHeader>
      <AccordionContent value="item-1">Content 1</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionHeader value="item-2">Header 2</AccordionHeader>
      <AccordionContent value="item-2">Content 2</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3" isDisabled>
      <AccordionHeader value="item-3">Header 3 (Disabled)</AccordionHeader>
      <AccordionContent value="item-3">Content 3</AccordionContent>
    </AccordionItem>
  </Accordion>
);

describe("Accordion", () => {
  const user = userEvent.setup();

  describe("Basic Rendering", () => {
    it("should render correctly", () => {
      const wrapper = render(<TestAccordion />);
      expect(() => wrapper.unmount()).not.toThrow();
    });

    it("should render all accordion items", () => {
      render(<TestAccordion />);

      expect(screen.getByText("Header 1")).toBeInTheDocument();
      expect(screen.getByText("Header 2")).toBeInTheDocument();
      expect(screen.getByText("Header 3 (Disabled)")).toBeInTheDocument();
    });

    it("should forward ref correctly", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<TestAccordion ref={ref} />);
      expect(ref.current).not.toBeNull();
    });

    it("should apply custom className", () => {
      const {container} = render(<TestAccordion className="custom-class" />);
      expect(container.firstChild).toHaveClass("custom-class");
    });
  });

  describe("Uncontrolled Mode", () => {
    it("should expand item when header is clicked", async () => {
      render(<TestAccordion />);

      const header1Button = screen.getByRole("button", {name: "Header 1"});
      await user.click(header1Button);

      expect(header1Button).toHaveAttribute("aria-expanded", "true");
    });

    it("should collapse expanded item when header is clicked again", async () => {
      render(<TestAccordion defaultValue="item-1" />);

      // Content should be visible initially
      expect(screen.getByText("Content 1")).toBeVisible();

      const header1 = screen.getByText("Header 1");
      await user.click(header1);

      // Content should be hidden after click
      await waitFor(() => {
        expect(screen.getByText("Content 1")).not.toBeVisible();
      });
    });

    it("should only allow one item expanded at a time by default", async () => {
      render(<TestAccordion defaultValue="item-1" />);

      expect(screen.getByText("Content 1")).toBeVisible();

      const header2 = screen.getByText("Header 2");
      await user.click(header2);

      await waitFor(() => {
        expect(screen.getByText("Content 1")).not.toBeVisible();
        expect(screen.getByText("Content 2")).toBeVisible();
      });
    });

    it("should allow multiple items expanded when allowMultiple is true", async () => {
      render(<TestAccordion allowMultiple defaultValue={["item-1"]} />);

      expect(screen.getByText("Content 1")).toBeVisible();

      const header2 = screen.getByText("Header 2");
      await user.click(header2);

      await waitFor(() => {
        expect(screen.getByText("Content 1")).toBeVisible();
        expect(screen.getByText("Content 2")).toBeVisible();
      });
    });
  });

  describe("Controlled Mode", () => {
    it("should respect controlled value prop", () => {
      render(<TestAccordion value="item-2" />);

      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 2")).toBeVisible();
    });

    it("should call onValueChange when item is clicked", async () => {
      const onValueChange = jest.fn();
      render(<TestAccordion value="" onValueChange={onValueChange} />);

      const header1 = screen.getByText("Header 1");
      await user.click(header1);

      expect(onValueChange).toHaveBeenCalledWith("item-1");
    });

    it("should handle multiple selection in controlled mode", async () => {
      const onValueChange = jest.fn();
      render(<TestAccordion allowMultiple value={["item-1"]} onValueChange={onValueChange} />);

      const header2 = screen.getByText("Header 2");
      await user.click(header2);

      expect(onValueChange).toHaveBeenCalledWith(["item-1", "item-2"]);
    });
  });

  describe("Disabled State", () => {
    it("should not respond to clicks when accordion is disabled", async () => {
      render(<TestAccordion isDisabled />);

      const header1 = screen.getByText("Header 1");
      await user.click(header1);

      expect(screen.getByText("Content 1")).not.toBeVisible();
    });

    it("should not respond to clicks when individual item is disabled", async () => {
      render(<TestAccordion />);

      const header3 = screen.getByText("Header 3 (Disabled)");
      await user.click(header3);

      expect(screen.getByText("Content 3")).not.toBeVisible();
    });

    it("should apply disabled styling", () => {
      render(<TestAccordion isDisabled />);

      const header1 = screen.getByText("Header 1");
      expect(header1.closest("button")).toBeDisabled();
    });
  });

  describe("Keyboard Navigation", () => {
    it("should expand/collapse on Enter key", async () => {
      render(<TestAccordion />);

      const header1Button = screen.getByRole("button", {name: "Header 1"});
      header1Button.focus();

      await user.keyboard("{Enter}");
      await waitFor(() => {
        expect(screen.getByText("Content 1")).toBeVisible();
      });

      await user.keyboard("{Enter}");
      await waitFor(() => {
        expect(screen.getByText("Content 1")).not.toBeVisible();
      });
    });

    it("should expand/collapse on Space key", async () => {
      render(<TestAccordion />);

      const header1Button = screen.getByRole("button", {name: "Header 1"});
      header1Button.focus();

      await user.keyboard(" ");
      await waitFor(() => {
        expect(screen.getByText("Content 1")).toBeVisible();
      });

      await user.keyboard(" ");
      await waitFor(() => {
        expect(screen.getByText("Content 1")).not.toBeVisible();
      });
    });

    it("should navigate between headers with Tab", async () => {
      render(<TestAccordion />);

      const header1Button = screen.getByRole("button", {name: "Header 1"});
      const header2Button = screen.getByRole("button", {name: "Header 2"});

      header1Button.focus();
      expect(document.activeElement).toBe(header1Button);

      await user.keyboard("{Tab}");
      expect(document.activeElement).toBe(header2Button);
    });
  });

  describe("Accessibility", () => {
    it("should have proper ARIA attributes", () => {
      render(<TestAccordion defaultValue="item-1" />);

      const header1Button = screen.getByRole("button", {name: "Header 1"});
      const content1 = screen.getByText("Content 1");

      expect(header1Button).toHaveAttribute("aria-expanded", "true");
      expect(header1Button).toHaveAttribute("aria-controls", "accordion-content-item-1");
      expect(header1Button).toHaveAttribute("id", "accordion-header-item-1");
      expect(content1.parentElement).toHaveAttribute("aria-labelledby", "accordion-header-item-1");
      expect(content1.parentElement).toHaveAttribute("id", "accordion-content-item-1");
      expect(content1.parentElement).toHaveAttribute("role", "region");
    });

    it("should update aria-expanded when state changes", async () => {
      render(<TestAccordion />);

      const header1Button = screen.getByRole("button", {name: "Header 1"});
      expect(header1Button).toHaveAttribute("aria-expanded", "false");

      await user.click(header1Button);
      expect(header1Button).toHaveAttribute("aria-expanded", "true");
    });

    it("should be focusable and have proper button role", () => {
      render(<TestAccordion />);

      const header1 = screen.getByText("Header 1");
      expect(header1.closest("button")).toHaveAttribute("type", "button");
      expect(header1.closest("button")).not.toBeDisabled();
    });
  });

  describe("Styling and Variants", () => {
    it("should apply color variants", () => {
      const {container} = render(<TestAccordion color="secondary" />);
      expect(container.querySelector('[class*="text-purple"]')).toBeInTheDocument();
    });

    it("should apply size variants", () => {
      const {container} = render(<TestAccordion size="lg" />);
      expect(container.querySelector('[class*="p-5"]')).toBeInTheDocument();
    });

    it("should apply variant styles", () => {
      const {container} = render(<TestAccordion variant="outline" />);
      expect(container.querySelector('[class*="bg-transparent"]')).toBeInTheDocument();
    });

    it("should apply custom styles", () => {
      const {container} = render(<TestAccordion customStyles="custom-accordion" />);
      expect(container.querySelector(".custom-accordion")).toBeInTheDocument();
    });
  });

  describe("Edge Cases", () => {
    it("should handle empty accordion", () => {
      const wrapper = render(<Accordion />);
      expect(() => wrapper.unmount()).not.toThrow();
    });

    it("should handle invalid defaultValue", () => {
      render(<TestAccordion defaultValue="non-existent" />);

      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 2")).not.toBeVisible();
    });

    it("should handle rapid clicks", async () => {
      render(<TestAccordion />);

      const header1 = screen.getByText("Header 1");

      // Rapid clicks
      await user.click(header1);
      await user.click(header1);
      await user.click(header1);

      // Should end up collapsed
      await waitFor(() => {
        expect(screen.getByText("Content 1")).not.toBeVisible();
      });
    });
  });
});
