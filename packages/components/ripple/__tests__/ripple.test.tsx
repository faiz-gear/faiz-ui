import * as React from "react";
import {render} from "@testing-library/react";

import { Ripple } from "../src";

describe("Ripple", () => {
  it("should render correctly", () => {
   const wrapper = render(<Ripple />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Ripple ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
