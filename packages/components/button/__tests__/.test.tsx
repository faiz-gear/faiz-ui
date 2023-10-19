import * as React from "react";
import {render} from "@testing-library/react";

import { Button } from "../src";

describe("Button", () => {
  it("should render correctly", () => {
   const wrapper = render(<Button />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Button ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
