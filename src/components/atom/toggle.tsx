"use client";

import { Toggle as Type } from "@/type/notion";
import RichText from "./richText";
import { useState } from "react";
import Blocks from "./blocks";

export default function Toggle({ value }: { value: Type }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`n2c_toggle ${"n2c_" + value.toggle.color}`}>
      <div>
        <div>
          <button onClick={() => setOpen((state) => !state)}>
            <svg
              viewBox="0 0 100 100"
              style={{
                transform: `rotateZ(${open ? 180 : 90}deg)`,
              }}
            >
              <polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon>
            </svg>
          </button>
        </div>
        <div>
          <RichText value={value.toggle.rich_text} />
          {open && value.has_children && (
            <Blocks value={value.toggle.children} />
          )}
        </div>
      </div>
    </div>
  );
}
