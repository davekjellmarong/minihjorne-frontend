// import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
// import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
// import Checkbox from "@mui/material/Checkbox";

import { CaretDown, CaretRight } from "@phosphor-icons/react";

// import Typography from "@mui/material/Typography";
interface NodeProps {
  node?: any;
  style?: any;
  dragHandle?: any;
  tree?: any;
}

export const Node = ({ node, style, dragHandle, tree }: NodeProps) => {
  return (
    <div style={style}>
      <div
        className="node-content"
        style={{
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => node.isInternal && node.toggle()}
      >
        {node.isLeaf ? (
          <span style={{ height: 42, width: 42 }}>
            <input type="checkbox" />
          </span>
        ) : (
          <>
            <span style={{ height: 42, width: 42 }}>
              {node.isOpen ? <CaretDown size={22} /> : <CaretRight size={22} />}
            </span>
          </>
        )}
        <span className="node-text">
          <p>{node.data.name}</p>
        </span>
      </div>
    </div>
  );
};
