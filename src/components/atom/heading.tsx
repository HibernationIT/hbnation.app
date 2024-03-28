"use client";

import { Block as BlockType, Headings } from "@/type/notion";
import RichText from "./richText";
import { useState } from "react";
import Block from "./block";

export default function Heading({ value }: { value: Headings }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`n2c_${value.type} n2c_${value[value.type].color}`}>
      <div className="n2c_heading">
        {value[value.type].is_toggleable && (
          <button onClick={() => setOpen((state) => !state)}>
            <div>
              <svg
                viewBox="0 0 100 100"
                style={{
                  width: "0.6875em",
                  height: "0.6875em",
                  display: "block",
                  flexShrink: 0,
                  transition: "transform 200ms ease-out 0s",
                  transform: `rotateZ(${open ? 180 : 90}deg)`,
                  opacity: 1,
                }}
              >
                <polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon>
              </svg>
            </div>
          </button>
        )}
        <div>
          {value.type === "heading_1" ? (
            <h2>
              <RichText value={value[value.type].rich_text} />
            </h2>
          ) : value.type === "heading_2" ? (
            <h3>
              <RichText value={value[value.type].rich_text} />
            </h3>
          ) : (
            <h4>
              <RichText value={value[value.type].rich_text} />
            </h4>
          )}
          {value.has_children &&
            open &&
            value[value.type].children.map((child: BlockType) => (
              <Block value={child} />
            ))}
        </div>
      </div>
    </div>
  );
}
