"use client";

import {Container} from "@/components/shared/container";
import {BusinessHeroCard} from "@/components/pages/main/BusinessHeroCard";
import {ProductCard} from "@/components/pages/main/ProductCard";

export const Entrepreneurs = () => {
    return (
        <section className="bg-gray-50 py-16">
            <Container>
                <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-900">
                    Для Бизнеса
                </h2>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="lg:row-span-2">
                        <BusinessHeroCard
                            title="Kaspi Pay. Приложение для бизнеса"
                            description="Принимайте оплату с"
                            badges={[
                                { label: "GOLD", bg: "#D7B062" },
                                { label: "RED", bg: "#EB3C31" },
                                { label: "KREDIT", bg: "#EB3C31" },
                            ]}
                            ctaText="Подключиться"
                            ctaHref="#"
                            appIconSrc="/business/kaspi-icon.svg"
                            phoneMockSrc="/business/kaspi-pay-mock.png"
                        />
                    </div>

                    <ProductCard
                        title="Бизнес Кредит"
                        description="Без залога и документов. Онлайн за 1 минуту"
                        href="#"
                        cta="Подробнее"
                        logoSrc="/business/briefcase.svg"
                        logoBg="#A6E463"
                    />

                    <ProductCard
                        title="Акции Kaspi QR"
                        description="Участвуйте в акциях и увеличивайте свои продажи"
                        href="#"
                        cta="Принять участие"
                        logoSrc="/business/gift.svg"
                        logoBg="#F14A37"
                    />
                </div>
            </Container>
        </section>
    )
}