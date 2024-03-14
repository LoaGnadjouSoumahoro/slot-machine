import React from "react";

export const Machine = (props) => {
  const { s1, s2, s3 } = props;

  return (
    <div>
      <p>
        {s1} {s2}
        {s3}
      </p>
      <p>{s1 === s2 && s2 === s3 ? "winner" : "slot"} </p>
    </div>
  );
};
