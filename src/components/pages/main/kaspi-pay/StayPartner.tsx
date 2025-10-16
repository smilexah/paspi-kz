"use client";

import { Container } from "@/components/shared/container";
import {PartnerCtaCard} from "@/components/pages/main/PartnerCtaCard";

export function StayPartner() {
    return (
        <section className="bg-gray-50 py-16">
            <Container>
                <div className="rounded-3xl bg-white p-8 md:p-12 ring-1 ring-gray-200 shadow-sm">
                    <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-900">
                        Стать Партнером
                    </h2>

                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <PartnerCtaCard
                            title="Продавать в Интернет-магазине на Kaspi.kz"
                            description={
                                "Более 14 млн покупателей,\nдоставка товаров по всему Казахстану,\nвозможность продавать в кредит и рассрочку."
                            }
                            href="#"
                            linkText="Начать продавать в Интернет-магазине"
                            iconSrc="/partner/cart.svg"
                            iconBg="#0EA5E9" // синий, как на скрине
                        />

                        <PartnerCtaCard
                            title="Продавать с Kaspi Pay"
                            description={
                                "Принимайте оплату с Kaspi Gold, Red и Kredit.\nОткройте счет онлайн бесплатно\nи получите мобильный POS за 5 минут."
                            }
                            href="#"
                            linkText="Начать продавать с Kaspi Pay"
                            iconSrc="/partner/kaspi-icon.svg"
                            iconBg="#4B5563" // темно-серый значок
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
