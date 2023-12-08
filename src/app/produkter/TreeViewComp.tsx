import React, { cloneElement, useState } from "react";
import { Tree } from "react-arborist";
import { Node } from "./Node";

interface TreeViewCompProps {
  setFilters: (value: string[]) => void;
  filters: string[];
}
const TreeViewComp = ({ setFilters, filters }: TreeViewCompProps) => {
  const [search, setSearch] = useState("");

  const data = [
    { id: "1", name: "Jord" },
    { id: "2", name: "Threads" },
    {
      id: "3",
      name: "Chat Rooms",
      children: [
        { id: "c1", name: "General" },
        { id: "c2", name: "Random" },
        { id: "c3", name: "Open Source Projects" },
      ],
    },
    {
      id: "4",
      name: "Direct Messages",
      children: [
        { id: "d1", name: "Alice" },
        { id: "d2", name: "Bob" },
        { id: "d3", name: "Charlie" },
      ],
    },
  ];
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="pr-10"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Tree
        initialData={data}
        searchTerm={search}
        searchMatch={(node, term) =>
          node.data.name.toLowerCase().includes(term.toLowerCase())
        }
        rowHeight={30}
        onSelect={(e) => {
          const node = e[0]?.data.name;
          setFilters([...filters, node]);
        }}
      >
        {Node}
      </Tree>
    </>
  );
};

export default TreeViewComp;
