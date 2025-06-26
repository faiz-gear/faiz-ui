import * as React from "react";
import {HTMLFaizUIProps} from "@faiz-ui/system";
import {accordion, type AccordionVariantProps} from "@faiz-ui/theme";
import {ReactRef} from "@faiz-ui/react-utils";

export type AccordionValue = string | string[];

export interface UseAccordionProps extends HTMLFaizUIProps<"div">, AccordionVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * The value of the expanded accordion item(s).
   * For controlled mode.
   */
  value?: AccordionValue;
  /**
   * The default value of the expanded accordion item(s).
   * For uncontrolled mode.
   */
  defaultValue?: AccordionValue;
  /**
   * Callback fired when the accordion value changes.
   */
  onValueChange?: (value: AccordionValue) => void;
  /**
   * Whether multiple accordion items can be expanded at the same time.
   * @default false
   */
  allowMultiple?: boolean;
  /**
   * Whether the accordion is disabled.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Custom styles for the accordion
   */
  customStyles?: string;
}

export interface UseAccordionItemProps extends HTMLFaizUIProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * The unique value of the accordion item.
   */
  value: string;
  /**
   * Whether the accordion item is disabled.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Custom styles for the accordion item
   */
  customStyles?: string;
}

export interface UseAccordionHeaderProps extends HTMLFaizUIProps<"button"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * The unique value of the accordion item.
   */
  value: string;
  /**
   * Custom styles for the accordion header
   */
  customStyles?: string;
}

export interface UseAccordionContentProps extends HTMLFaizUIProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * The unique value of the accordion item.
   */
  value: string;
  /**
   * Custom styles for the accordion content
   */
  customStyles?: string;
}

// Context for accordion state management
interface AccordionContextValue {
  expandedItems: Set<string>;
  toggleItem: (value: string) => void;
  isItemExpanded: (value: string) => boolean;
  isDisabled: boolean;
  allowMultiple: boolean;
  styles: ReturnType<typeof accordion>;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

export const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordionContext must be used within an Accordion component");
  }
  return context;
};

export function useAccordion(props: UseAccordionProps): {
  Component: React.ElementType;
  domRef: React.RefObject<HTMLDivElement>;
  contextValue: AccordionContextValue;
  styles: ReturnType<typeof accordion>;
  children: React.ReactNode;
  [key: string]: any;
} {
  const {
    ref,
    as,
    value: controlledValue,
    defaultValue,
    onValueChange,
    allowMultiple = false,
    isDisabled = false,
    color,
    size,
    variant,
    className,
    customStyles,
    ...otherProps
  } = props;

  const domRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => domRef.current);

  // Normalize values to always work with arrays internally
  const normalizeValue = React.useCallback((val: AccordionValue | undefined): string[] => {
    if (val === undefined) return [];
    return Array.isArray(val) ? val : [val];
  }, []);

  // Initialize internal state
  const [internalExpandedItems, setInternalExpandedItems] = React.useState<Set<string>>(() => {
    const initial = controlledValue !== undefined ? controlledValue : defaultValue;
    return new Set(normalizeValue(initial));
  });

  // Determine if we're in controlled mode
  const isControlled = controlledValue !== undefined;
  const expandedItems = isControlled
    ? new Set(normalizeValue(controlledValue))
    : internalExpandedItems;

  // Generate styles
  const styles = React.useMemo(
    () =>
      accordion({
        color,
        size,
        variant,
        className: [customStyles, className].filter(Boolean).join(" "),
      }),
    [color, size, variant, customStyles, className],
  );

  // Toggle accordion item
  const toggleItem = React.useCallback(
    (itemValue: string) => {
      if (isDisabled) return;

      const newExpandedItems = new Set(expandedItems);

      if (newExpandedItems.has(itemValue)) {
        newExpandedItems.delete(itemValue);
      } else {
        if (!allowMultiple) {
          newExpandedItems.clear();
        }
        newExpandedItems.add(itemValue);
      }

      const newValue = allowMultiple
        ? Array.from(newExpandedItems)
        : Array.from(newExpandedItems)[0] || "";

      if (!isControlled) {
        setInternalExpandedItems(newExpandedItems);
      }

      onValueChange?.(newValue);
    },
    [expandedItems, isDisabled, allowMultiple, isControlled, onValueChange],
  );

  // Check if item is expanded
  const isItemExpanded = React.useCallback(
    (itemValue: string) => {
      return expandedItems.has(itemValue);
    },
    [expandedItems],
  );

  const contextValue = React.useMemo<AccordionContextValue>(
    () => ({
      expandedItems,
      toggleItem,
      isItemExpanded,
      isDisabled,
      allowMultiple,
      styles,
    }),
    [expandedItems, toggleItem, isItemExpanded, isDisabled, allowMultiple, styles],
  );

  const Component = as || "div";

  return {
    Component,
    domRef,
    contextValue,
    styles,
    children: props.children,
    ...otherProps,
  };
}

export function useAccordionItem(props: UseAccordionItemProps) {
  const {
    ref,
    as,
    value,
    isDisabled: itemDisabled = false,
    className,
    customStyles,
    children,
    ...otherProps
  } = props as UseAccordionItemProps & {
    as?: any;
    className?: string;
    children?: React.ReactNode;
  };

  const context = useAccordionContext();
  const domRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => domRef.current);

  const isExpanded = context.isItemExpanded(value);
  const isDisabled = context.isDisabled || itemDisabled;

  const styles = React.useMemo(() => {
    return context.styles.item({
      isExpanded,
      isDisabled,
      className: [customStyles, className].filter(Boolean).join(" "),
    });
  }, [context.styles, isExpanded, isDisabled, customStyles, className]);

  const Component = as || "div";

  return {
    Component,
    domRef,
    styles,
    isExpanded,
    isDisabled,
    value,
    children,
    ...otherProps,
  };
}

export function useAccordionHeader(props: UseAccordionHeaderProps) {
  const {ref, as, value, className, customStyles, onClick, onKeyDown, children, ...otherProps} =
    props as UseAccordionHeaderProps & {
      as?: any;
      className?: string;
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
      onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
      children?: React.ReactNode;
    };

  const context = useAccordionContext();
  const domRef = React.useRef<HTMLButtonElement>(null);
  React.useImperativeHandle(ref, () => domRef.current);

  const isExpanded = context.isItemExpanded(value);
  const isDisabled = context.isDisabled;

  const styles = React.useMemo(() => {
    return context.styles.header({
      isExpanded,
      isDisabled,
      className: [customStyles, className].filter(Boolean).join(" "),
    });
  }, [context.styles, isExpanded, isDisabled, customStyles, className]);

  const triggerStyles = React.useMemo(() => {
    return context.styles.trigger({
      isExpanded,
      isDisabled,
    });
  }, [context.styles, isExpanded, isDisabled]);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) return;
      context.toggleItem(value);
      onClick?.(event);
    },
    [isDisabled, context, value, onClick],
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (isDisabled) return;

      // Handle Enter and Space keys
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        context.toggleItem(value);
      }

      onKeyDown?.(event);
    },
    [isDisabled, context, value, onKeyDown],
  );

  const Component = as || "button";

  return {
    Component,
    domRef,
    styles,
    triggerStyles,
    isExpanded,
    isDisabled,
    value,
    handleClick,
    handleKeyDown,
    children,
    ...otherProps,
  };
}

export function useAccordionContent(props: UseAccordionContentProps) {
  const {ref, as, value, className, customStyles, children, ...otherProps} =
    props as UseAccordionContentProps & {
      as?: any;
      className?: string;
      children?: React.ReactNode;
    };

  const context = useAccordionContext();
  const domRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => domRef.current);

  const isExpanded = context.isItemExpanded(value);

  const styles = React.useMemo(() => {
    return context.styles.content({
      className: [customStyles, className].filter(Boolean).join(" "),
    });
  }, [context.styles, customStyles, className]);

  const contentInnerStyles = React.useMemo(() => {
    return context.styles.contentInner();
  }, [context.styles]);

  const Component = as || "div";

  return {
    Component,
    domRef,
    styles,
    contentInnerStyles,
    isExpanded,
    value,
    children,
    ...otherProps,
  };
}

export type UseAccordionReturn = ReturnType<typeof useAccordion>;
export type UseAccordionItemReturn = ReturnType<typeof useAccordionItem>;
export type UseAccordionHeaderReturn = ReturnType<typeof useAccordionHeader>;
export type UseAccordionContentReturn = ReturnType<typeof useAccordionContent>;

// Export the context and provider for advanced usage
export {AccordionContext};
