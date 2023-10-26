import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map((color) => {
    return <ColorItem key={color} color={color} />;
  });

}

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
       <ColorList/>
      </ol>
    </div>
  );


export default ColorList;
