import {FixedActionBar} from "@/components/shared/fixed-action-bar";
import {CashCreditBusinessMainScreen} from "@/components/pages/cash-credit-business/main-screen";
import {CashCreditBusinessBenefits} from "@/components/pages/cash-credit-business/benefits";
import {CashCreditBusinessStepper} from "@/components/pages/cash-credit-business/stepper";
import {CashCreditBusinessCalculator} from "@/components/pages/cash-credit-business/credit-calculator";
import {CashCreditBusinessQR} from "@/components/pages/cash-credit-business/qr";

export default function CashCreditBusinessPage() {
    return (
        <>
            <main>
                <CashCreditBusinessMainScreen/>
                <CashCreditBusinessBenefits/>
                <CashCreditBusinessStepper/>
                <CashCreditBusinessCalculator/>
                <CashCreditBusinessQR/>
            </main>
            <FixedActionBar
                label="Открыть Kaspi Gold"
            />
        </>
    );
}
