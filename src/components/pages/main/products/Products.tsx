"use client";

import { Container } from "@/components/shared/container";
import {ProductCard} from "@/components/pages/main/ProductCard";

export const Products = () => {
    const products = [
        {
            title: "Kaspi Gold",
            description: "Переводы, платежи, снятия без комиссий",
            href: "#",
            cta: "Открыть Kaspi Gold онлайн",
            logoSrc: "/kaspi/gold.svg",
            logoBg: "#E2B861",
        },
        {
            title: "Kaspi Red",
            description: "Покупки в рассрочку 0% в магазинах Вашего города",
            href: "#",
            cta: "Открыть Kaspi Red онлайн",
            logoSrc: "/kaspi/red.svg",
            logoBg: "#EB3C31",
        },
        {
            title: "Kaspi Gold для ребенка",
            description: "Деньги на карманные расходы и контроль трат",
            href: "#",
            cta: "Открыть Kaspi Gold для ребенка",
            logoSrc: "/kaspi/gold.svg",
            logoBg: "#E2B861",
        },
        {
            title: "Кредит на Покупки",
            description: "Кредит или рассрочка 0%. Одобрение за 1 минуту.",
            href: "#",
            cta: "Оформить Кредит на Покупки",
            logoSrc: "/kaspi/kredit.svg",
            logoBg: "#EB3C31",
        },
    ] as const;

    return (
        <section className="bg-gray-50 py-16">
            <Container>
                <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-900">
                    Продукты Kaspi.kz
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {products.map((p, i) => (
                        <ProductCard key={i} {...p} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
