/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { useDatas } from "@hooks";

const withDatasets = (Component) => (
  forwardRef(({ data = {}, ...props }, ref) => {
    const datas = useDatas(data);

    return (
      <Component
        ref={ref}
        datas={datas}
        {...props}
      />
    );
  })
);

export default withDatasets;
