"use client";

import { Container } from "@/components/shared/container";
import {PaymentMethodCard} from "@/components/pages/main/PaymentMethodCard";

export function Terminal() {
    const items = [
        {
            title: "Smart POS",
            imageSrc: "/business/smart-pos.png",
            href: "#",
        },
        {
            title: "Мобильный POS",
            imageSrc: "/business/mobile-pos.png",
            href: "#",
        },
        {
            title: "QR Дисплей",
            imageSrc: "/business/qr-display.png",
            href: "#",
        },
    ] as const;

    return (
        <section className="bg-gray-50 py-14">
            <Container>
                <div className="rounded-3xl bg-white p-8 md:p-12 ring-1 ring-gray-200 shadow-sm">
                    <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-900">
                        Принимайте оплату с Kaspi Pay
                    </h2>

                    <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 place-items-center">
                        {items.map((it, i) => (
                            <PaymentMethodCard key={i} {...it} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
