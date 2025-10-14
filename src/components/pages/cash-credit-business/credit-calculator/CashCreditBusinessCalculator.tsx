"use client";

import {CreditCalculator} from "@/components/shared/credit-calculator";

const TERMS: number[] = [3, 6, 9, 12, 18, 24, 36, 48];
const RATES: Record<number, number> = {
    3: 0.10, 6: 0.16, 9: 0.20, 12: 0.24,
    18: 0.30, 24: 0.36, 36: 0.42, 48: 0.48,
};

export const CashCreditBusinessCalculator = () => {
    return (
        <section className="bg-[#F6F6F6] py-8 sm:py-10">
            <div className="mx-auto max-w-6xl px-4">
                <CreditCalculator
                    title="Укажите сумму кредита"
                    ctaLabel="Получить Кредит для ИП"
                    currency="₸"
                    minAmount={20_000}
                    maxAmount={100_000_000}
                    terms={TERMS}
                    initialTerm={12}
                    rate={RATES}                       // можно передать и функцию
                    monthlyDays={30}
                    showDailyFromSales={true}
                    onSubmit={(p) => console.log("apply credit:", p)}
                />
            </div>
        </section>
    );
}
