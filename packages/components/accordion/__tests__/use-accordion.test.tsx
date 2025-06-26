import * as React from "react";
import { renderHook, act } from "@testing-library/react";

import { useAccordion, AccordionContext } from "../src/use-accordion";

describe("useAccordion", () => {
  describe("Basic Functionality", () => {
    it("should initialize with default values", () => {
      const { result } = renderHook(() => useAccordion({}));
      
      expect(result.current.Component).toBe("div");
      expect(result.current.domRef.current).toBeNull();
      expect(result.current.contextValue).toBeDefined();
      expect(result.current.styles).toBeDefined();
    });

    it("should use custom component when 'as' prop is provided", () => {
      const { result } = renderHook(() => useAccordion({ as: "section" }));
      
      expect(result.current.Component).toBe("section");
    });

    it("should apply custom styles", () => {
      const { result } = renderHook(() => 
        useAccordion({ 
          color: "secondary", 
          size: "lg", 
          variant: "outline",
          customStyles: "custom-class"
        })
      );
      
      expect(result.current.styles.base()).toContain("custom-class");
    });
  });

  describe("Uncontrolled Mode", () => {
    it("should initialize with defaultValue", () => {
      const { result } = renderHook(() => 
        useAccordion({ defaultValue: "item-1" })
      );
      
      expect(result.current.contextValue.isItemExpanded("item-1")).toBe(true);
      expect(result.current.contextValue.isItemExpanded("item-2")).toBe(false);
    });

    it("should handle array defaultValue for multiple selection", () => {
      const { result } = renderHook(() => 
        useAccordion({ 
          defaultValue: ["item-1", "item-2"], 
          allowMultiple: true 
        })
      );
      
      expect(result.current.contextValue.isItemExpanded("item-1")).toBe(true);
      expect(result.current.contextValue.isItemExpanded("item-2")).toBe(true);
      expect(result.current.contextValue.isItemExpanded("item-3")).toBe(false);
    });

    it("should toggle items correctly", () => {
      const { result } = renderHook(() => useAccordion({}));
      
      act(() => {
        result.current.contextValue.toggleItem("item-1");
      });
      
      expect(result.current.contextValue.isItemExpanded("item-1")).toBe(true);
      
      act(() => {
        result.current.contextValue.toggleItem("item-1");
      });
      
      expect(result.current.contextValue.isItemExpanded("item-1")).toBe(false);
    });

    it("should only allow one item expanded when allowMultiple is false", () => {
      const { result } = renderHook(() => useAccordion({ allowMultiple: false }));
      
      act(() => {
        result.current.contextValue.toggleItem("item-1");
      });
      
      expect(result.current.contextValue.isItemExpanded("item-1")).toBe(true);
      
      act(() => {
        result.current.contextValue.toggleItem("item-2");
      });
      
      expect(result.current.contextValue.isItemExpanded("item-1")).toBe(false);
      expect(result.current.contextValue.isItemExpanded("item-2")).toBe(true);
    });

    it("should allow multiple items expanded when allowMultiple is true", () => {
      const { result } = renderHook(() => useAccordion({ allowMultiple: true }));
      
      act(() => {
        result.current.contextValue.toggleItem("item-1");
      });
      
      expect(result.current.contextValue.isItemExpanded("item-1")).toBe(true);
      
      act(() => {
        result.current.contextValue.toggleItem("item-2");
      });
      
      expect(result.current.contextValue.isItemExpanded("item-1")).toBe(true);
      expect(result.current.contextValue.isItemExpanded("item-2")).toBe(true);
    });
  });

  describe("Controlled Mode", () => {
    it("should respect controlled value", () => {
      const { result } = renderHook(() => 
        useAccordion({ value: "item-2" })
      );
      
      expect(result.current.contextValue.isItemExpanded("item-1")).toBe(false);
      expect(result.current.contextValue.isItemExpanded("item-2")).toBe(true);
    });

    it("should call onValueChange when item is toggled", () => {
      const onValueChange = jest.fn();
      const { result } = renderHook(() => 
        useAccordion({ value: "", onValueChange })
      );
      
      act(() => {
        result.current.contextValue.toggleItem("item-1");
      });
      
      expect(onValueChange).toHaveBeenCalledWith("item-1");
    });

    it("should handle array values in controlled mode", () => {
      const onValueChange = jest.fn();
      const { result } = renderHook(() => 
        useAccordion({ 
          value: ["item-1"], 
          allowMultiple: true, 
          onValueChange 
        })
      );
      
      act(() => {
        result.current.contextValue.toggleItem("item-2");
      });
      
      expect(onValueChange).toHaveBeenCalledWith(["item-1", "item-2"]);
    });

    it("should not update internal state in controlled mode", () => {
      const { result, rerender } = renderHook(
        ({ value }) => useAccordion({ value }),
        { initialProps: { value: "" } }
      );
      
      act(() => {
        result.current.contextValue.toggleItem("item-1");
      });
      
      // Should still be false because we didn't update the controlled value
      expect(result.current.contextValue.isItemExpanded("item-1")).toBe(false);
      
      // Update the controlled value
      rerender({ value: "item-1" });
      
      expect(result.current.contextValue.isItemExpanded("item-1")).toBe(true);
    });
  });

  describe("Disabled State", () => {
    it("should not toggle items when disabled", () => {
      const { result } = renderHook(() => 
        useAccordion({ isDisabled: true })
      );
      
      act(() => {
        result.current.contextValue.toggleItem("item-1");
      });
      
      expect(result.current.contextValue.isItemExpanded("item-1")).toBe(false);
    });

    it("should not call onValueChange when disabled", () => {
      const onValueChange = jest.fn();
      const { result } = renderHook(() => 
        useAccordion({ isDisabled: true, onValueChange })
      );
      
      act(() => {
        result.current.contextValue.toggleItem("item-1");
      });
      
      expect(onValueChange).not.toHaveBeenCalled();
    });
  });
});
