import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor]= useState("#FFF")
  
  function handleChangeColor(newChildrenColor){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor)
    setChildrenColor(newChildrenColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child  color={childrenColor} onChangeColor={handleChangeColor}/>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
    {/* for info to flow parents pass down props to children*/}
    </div>

  );
}

export default Parent;
