"use client";

import * as React from "react";

type BadgeProps = {
    children: React.ReactNode;
    bg?: string;
    className?: string;
};

export function Badge({children, bg = "#E5E7EB", className = ""}: BadgeProps) {
    return (
        <span
            className={[
                "inline-flex items-center rounded-lg px-3 py-1 text-sm font-semibold",
                "text-gray-900",
                className,
            ].join(" ")}
            style={{backgroundColor: bg}}
        >
      {children}
    </span>
    );
}
