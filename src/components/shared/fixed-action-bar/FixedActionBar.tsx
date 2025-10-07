"use client";

import {useRouter} from "next/navigation";
import React, {useEffect, useMemo, useState} from "react";

interface FixedActionBarProps {
    label: string;
    className?: string;
    targetId?: string;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FixedActionBar = ({
                                   label,
                                   className = "",
                                   targetId = "hero-button",
                                   href,
                                   onClick,
                               }: FixedActionBarProps) => {
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    const opts = useMemo<IntersectionObserverInit>(() => ({
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -1px 0px",
    }), []);

    useEffect(() => {
        const el = document.getElementById(targetId);
        if (!el) {
            setVisible(true);
            return;
        }
        const io = new IntersectionObserver(([entry]) => {
            setVisible(!entry.isIntersecting);
        }, opts);
        io.observe(el);
        return () => io.disconnect();
    }, [targetId, opts]);

    if (!visible) return null;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(e);
            return;
        }

        if (href) router.push(href);
    };

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-4 transition-transform duration-300 ease-in-out">
            <div className="max-w-[345px] mx-auto">
                <button
                    type="button"
                    onClick={handleClick}
                    className={`w-full h-[50px] rounded-[10px] bg-[#0089D0] text-white font-medium text-sm leading-[19px] hover:bg-[#0077b8] transition-colors duration-200 ${className}`}
                >
                    {label}
                </button>
            </div>
        </div>
    );
}
