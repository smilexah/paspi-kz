"use client";

import {Benefits} from "@/components/payments/benefits/Benefits";
import {MainScreen} from "@/components/payments/main-screen";
import {Partners} from "@/components/payments/partners";
import {FixedActionBar} from "@/components/fixed-action-bar";
import {useEffect, useState} from "react";

export default function PaymentsPage() {
    const [showFixedButton, setShowFixedButton] = useState(false);

    useEffect(() => {
        const update = () => {
            const heading = document.getElementById("hero-button");
            if (!heading) return;

            const rect = heading.getBoundingClientRect();
            // Кнопка видна, если hero-button НЕ виден на экране:
            // когда верх заголовка выше верхней границы экрана (прокрутили мимо него)
            setShowFixedButton(rect.top < 0);
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
                <MainScreen/>
                <Benefits/>
                <Partners/>
            </main>

            <FixedActionBar
                isVisible={showFixedButton}
                label="Открыть Kaspi Gold"
                onClick={() => console.log("Kaspi Gold opened")}
            />
        </>
    );
}
