"use client";

import {FixedButton} from "@/components/gold/fixed-button";
import {useEffect, useState} from "react";
import {Feature, Features} from "@/components/features/Features";
import {Stepper} from "@/components/stepper";
import {QR} from "@/components/QR";
import {Hero} from "@/components/hero";

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
    {title: "Переводить любому клиенту Kaspi без комиссии", Icon: ArrowSwapIcon},
    {title: "Оплачивать без комиссии более 10 000 услуг на Kaspi.kz", Icon: TIcon},
    {title: "Покупать в Интернет-магазине на Kaspi.kz", Icon: CartIcon},
];

const steps = [
    {number: 1, text: "Скачайте приложение Kaspi.kz"},
    {number: 2, text: "Откройте Kaspi Gold онлайн"},
];

export default function GoldPage() {
    const [showFixedButton, setShowFixedButton] = useState(false);

    useEffect(() => {
        const update = () => {
            const heading = document.getElementById("how-it-works");
            if (!heading) return;

            const rect = heading.getBoundingClientRect();
            // Кнопка видна, если мы "дошли" до заголовка и дальше:
            // когда верх заголовка выше нижней границы экрана
            setShowFixedButton(rect.top <= window.innerHeight);
        };

        update(); // первичный расчёт на монтировании
        // Дешёвый, но надёжный слушатель: scroll/resize + rAF троттлинг
        let ticking = false;
        const onScrollOrResize = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                update();
                ticking = false;
            });
        };

        window.addEventListener("scroll", onScrollOrResize, {passive: true});
        window.addEventListener("resize", onScrollOrResize);

        return () => {
            window.removeEventListener("scroll", onScrollOrResize);
            window.removeEventListener("resize", onScrollOrResize);
        };
    }, []);

    return (
        <>
            <main>
                <Hero
                    imageSrc="/gold/gold-main-v2.svg"
                    imageAlt="Main Logo v2"
                    title="Kaspi Gold"
                    description={
                        <>
                            Покупки, переводы, платежи, <br/> снятия без комиссий
                        </>
                    }
                    buttonText="Открыть Kaspi Gold"
                    onButtonClick={() => console.log("Kaspi Gold click")}
                />
                <Features
                    title={
                        <>
                            Откройте Kaspi Gold онлайн
                            <br/>и Вы сможете
                        </>
                    }
                    items={ITEMS}
                />
                <Stepper
                    title="Как это работает?"
                    steps={steps}
                    lineColor="#E4573D"
                />
                <QR
                    qrSrc="/QR/qr-link-gold-v2.svg"
                    alt="Kaspi.kz Gold QR Code"
                />
            </main>
            <FixedButton isVisible={showFixedButton}/>
        </>
    );
}
