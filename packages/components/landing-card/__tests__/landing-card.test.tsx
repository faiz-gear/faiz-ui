import * as React from "react";
import {render} from "@testing-library/react";

import { LandingCard } from "../src";

describe("LandingCard", () => {
  it("should render correctly", () => {
   const wrapper = render(<LandingCard />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<LandingCard ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
