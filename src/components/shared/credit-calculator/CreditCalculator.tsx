"use client";

import { useMemo, useState } from "react";

export type Term = number;

export type RateResolver =
    | number
    | Record<Term, number>
    | ((ctx: { term: Term; amount: number }) => number);

export type CreditCalculatorProps = {
    // UI
    title?: string;
    ctaLabel?: string;
    currency?: string;                  // "₸" по умолчанию
    className?: string;

    // Сумма
    minAmount?: number;                 // дефолт 20_000
    maxAmount?: number;                 // дефолт 100_000_000
    initialAmount?: number;             // опционально

    // Сроки/ставки
    terms: Term[];                      // например [3,6,9,12,18,24,36,48]
    initialTerm?: Term;                 // дефолт 12 или terms[0]
    rate: RateResolver;                 // число | мапа | функция

    // Вычисления
    monthlyDays?: number;               // для «ежедневно с продаж», дефолт 30
    showDailyFromSales?: boolean;       // показывать блок «ежедневно», дефолт true
    computeDailyFromMonthly?: (monthly: number) => number;

    // Лейблы
    labels?: Partial<{
        amountPlaceholder: string;
        minHint: string;
        monthlyPayment: string;
        dailyFromSales: string;
        overpayment: string;
        disclaimer: string;
    }>;

    // События
    onSubmit?: (payload: {
        amount: number;
        term: Term;
        annualRate: number;
        monthlyPayment: number;
        totalPaid: number;
        overpayment: number;
        dailyFromSales: number;
    }) => void;
};

// ===== helpers =====
const MAX_DIGITS = 20; // до 100 000 000

const defaultLabels = {
    amountPlaceholder: "0",
    minHint: "от",
    monthlyPayment: "Ежемесячный платёж",
    dailyFromSales: "Ежедневное погашение с продаж",
    overpayment: "Переплата по кредиту",
    disclaimer: "Данный расчёт предварительный",
};

function formatDigitsWithSpaces(digits: string) {
    // "123456789" -> "123 456 789"
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function numberFmt(n: number, currency = "₸") {
    return `${new Intl.NumberFormat("ru-RU").format(Math.max(0, Math.floor(n)))} ${currency}`;
}

function resolveRate(rate: RateResolver, term: Term, amount: number) {
    if (typeof rate === "number") return rate;
    if (typeof rate === "function") return rate({ term, amount });
    return rate[term] ?? 0;
}

export const CreditCalculator = ({
                                             title = "Укажите сумму кредита",
                                             ctaLabel = "Получить кредит",
                                             currency = "₸",
                                             className = "",

                                             minAmount = 20_000,
                                             maxAmount = 100_000_000,
                                             initialAmount,

                                             terms,
                                             initialTerm,
                                             rate,

                                             monthlyDays = 30,
                                             showDailyFromSales = true,
                                             computeDailyFromMonthly,

                                             labels = {},
                                             onSubmit,
                                         }: CreditCalculatorProps) => {
    const L = { ...defaultLabels, ...labels };

    // -------- amount as digits-only string --------
    const [amountDigits, setAmountDigits] = useState<string>(
        initialAmount ? String(Math.min(maxAmount, Math.max(0, Math.floor(initialAmount)))) : ""
    );

    // term
    const [term, setTerm] = useState<Term>(
        initialTerm ?? (terms.includes(12) ? 12 : terms[0])
    );

    const amount = useMemo(() => Number(amountDigits || "0"), [amountDigits]);
    const isEmpty  = amountDigits.length === 0;
    const isTooLow = !isEmpty && amount < minAmount;
    const isTooHigh = !isEmpty && amount > maxAmount;
    const isValid = !isEmpty && !isTooLow && !isTooHigh;

    // -------- rate & annuity ----------
    const annualRate = resolveRate(rate, term, amount);

    const monthlyPayment = useMemo(() => {
        if (!isValid) return 0;
        const i = annualRate / 12; // месячная ставка
        const n = term;
        if (i === 0) return amount / n;
        return (amount * i) / (1 - Math.pow(1 + i, -n));
    }, [amount, term, annualRate, isValid]);

    const totalPaid = monthlyPayment * term;
    const overpayment = Math.max(0, totalPaid - amount);
    const dailyFromSales = useMemo(
        () => (computeDailyFromMonthly ? computeDailyFromMonthly(monthlyPayment) : monthlyPayment / monthlyDays),
        [monthlyPayment, computeDailyFromMonthly, monthlyDays]
    );

    // -------- input handlers ----------
    const onAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const onlyDigits = e.target.value.replace(/\D/g, "");
        const limited = onlyDigits.slice(0, MAX_DIGITS);
        setAmountDigits(limited);
    };

    const onAmountPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const text = e.clipboardData.getData("text");
        const onlyDigits = text.replace(/\D/g, "").slice(0, MAX_DIGITS);
        e.preventDefault();
        if (onlyDigits) setAmountDigits(onlyDigits);
    };

    const onAmountKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Home", "End", "Tab"];
        if (allowed.includes(e.key)) return;
        if (!/^[0-9]$/.test(e.key)) { e.preventDefault(); return; }
        if (amountDigits.length >= MAX_DIGITS) e.preventDefault();
    };

    const handleSubmit = () => {
        if (!isValid) return;
        onSubmit?.({
            amount,
            term,
            annualRate,
            monthlyPayment,
            totalPaid,
            overpayment,
            dailyFromSales,
        });
    };

    return (
        <div className={`rounded-[28px] bg-white shadow-sm border border-gray-200 p-5 sm:p-8 ${className}`}>
            <div className="grid gap-8 lg:grid-cols-2">
                <div>
                    <h3 className="text-[28px] sm:text-[32px] font-bold mb-4">{title}</h3>

                    <div className="relative">
                        <input
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={formatDigitsWithSpaces(amountDigits)}
                            onChange={onAmountChange}
                            onKeyDown={onAmountKeyDown}
                            onPaste={onAmountPaste}
                            placeholder={`${L.amountPlaceholder} ${currency}`}
                            className={[
                                "w-full h-[64px] rounded-[14px] border px-5 pr-16 text-[18px] outline-none",
                                "bg-[#F7F7F7]",
                                isValid || isEmpty ? "border-gray-200 focus:border-gray-300 text-gray-900"
                                    : "border-red-300 text-red-600",
                            ].join(" ")}
                        />

                        <span
                            className={[
                                "pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 text-[18px]",
                                isValid || isEmpty ? "text-gray-900" : "text-red-600",
                            ].join(" ")}
                        >
              {currency}
            </span>

                        {amountDigits && (
                            <button
                                type="button"
                                onClick={() => setAmountDigits("")}
                                aria-label="Очистить"
                                className="absolute right-3 top-1/2 -translate-y-1/2 grid h-7 w-7 place-items-center rounded-full text-gray-400 hover:bg-gray-200/60"
                            >
                                ×
                            </button>
                        )}
                    </div>

                    <p className="mt-2 text-sm text-gray-500">
                        {L.minHint} {numberFmt(minAmount, currency)}
                    </p>

                    <div className="mt-5 grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-[560px]">
                        {terms.map((t) => {
                            const active = t === term;
                            const disabled = !isValid;
                            return (
                                <button
                                    key={t}
                                    type="button"
                                    disabled={disabled}
                                    onClick={() => setTerm(t)}
                                    className={[
                                        "h-12 rounded-[12px] border text-[15px] font-medium",
                                        disabled
                                            ? "bg-[#F1F1F1] border-gray-200 text-gray-400 cursor-not-allowed"
                                            : active
                                                ? "bg-[#E6F2FA] border-[#0089D0] text-[#0089D0]"
                                                : "bg-[#F7F7F7] border-gray-200 text-gray-600 hover:bg-gray-100",
                                    ].join(" ")}
                                >
                                    {t} мес
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <div className="rounded-[18px] border border-gray-200 shadow-sm bg-white p-5 sm:p-8">
                        <h4 className="text-center text-[22px] sm:text-[24px] font-semibold">
                            {L.monthlyPayment}
                        </h4>

                        <div className="mt-2 text-center text-[44px] sm:text-[56px] font-bold">
                            {numberFmt(monthlyPayment, currency)}
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-6">
                            {showDailyFromSales && (
                                <div className="border-r border-gray-200 pr-4">
                                    <div className="text-gray-500 text-sm">{L.dailyFromSales}</div>
                                    <div className="mt-2 text-[18px] font-semibold">
                                        {numberFmt(dailyFromSales, currency)}
                                    </div>
                                </div>
                            )}
                            <div className={showDailyFromSales ? "pl-4" : ""}>
                                <div className="text-gray-500 text-sm">{L.overpayment}</div>
                                <div className="mt-2 text-[18px] font-semibold">
                                    {numberFmt(overpayment, currency)}
                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            disabled={!isValid}
                            onClick={handleSubmit}
                            className={[
                                "mt-6 h-[52px] w-full rounded-[12px] text-white font-semibold",
                                isValid ? "bg-[#0089D0] hover:bg-[#0077b8] transition-colors"
                                    : "bg-[#BBD8E9] cursor-not-allowed",
                            ].join(" ")}
                        >
                            {ctaLabel}
                        </button>

                        <p className="mt-3 text-center text-xs text-gray-400">{L.disclaimer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
