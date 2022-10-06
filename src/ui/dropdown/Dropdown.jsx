import { useState } from "react";

/**
 * 接受两个孩子结点，一个是标题，另一个是可以展开的菜单列表
 */
export default function DropDown({ children }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div className="dropend">
      <div
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}>
        {children[0]}
      </div>
      <div
        className={`dropdown-menu ${isMouseOver ? "d-block" : ""}`}
        onMouseOut={() => setIsMouseOver(false)}>
        {children[1]}
      </div>
    </div>
  );
}
