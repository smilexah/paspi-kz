"use client";

import {Features} from "@/components/features";
import {Feature} from "@/components/features/Features";

const color = "#E4573D";

const ArrowSwapIcon: Feature["Icon"] = (props) => (
    <svg viewBox="0 0 64 64" {...props}>
        <circle cx="32" cy="32" r="22" fill="none" stroke={color} strokeWidth="3"/>
        <path
            d="M18 26h20m0 0-4-4m4 4-4 4"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M46 38H26m0 0 4 4m-4-4 4-4"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const TIcon: Feature["Icon"] = (props) => (
    <svg viewBox="0 0 64 64" {...props}>
        <circle cx="32" cy="32" r="22" fill="none" stroke={color} strokeWidth="3"/>
        <path
            d="M22 26h20M32 26v16"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
        />
    </svg>
);

const CartIcon: Feature["Icon"] = (props) => (
    <svg viewBox="0 0 64 64" {...props}>
        <circle cx="32" cy="32" r="22" fill="none" stroke={color} strokeWidth="3"/>
        <path
            d="M22 28h20l-2 10H24l-2-10Z"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinejoin="round"
        />
        <circle
            cx="26"
            cy="42"
            r="2.5"
            fill="none"
            stroke={color}
            strokeWidth="3"
        />
        <circle
            cx="40"
            cy="42"
            r="2.5"
            fill="none"
            stroke={color}
            strokeWidth="3"
        />
    </svg>
);

const ITEMS: Feature[] = [
    {title: "Без комиссий", Icon: ArrowSwapIcon},
    {title: "Более 10 000 услуг", Icon: TIcon},
    {title: "Не выходя из дома", Icon: CartIcon},
];

export const Benefits = () => {
    return (
        <Features
            title={
                <>
                    Преимущества Kaspi Travel
                </>
            }
            items={ITEMS}
        />
    )
}