import {FixedActionBar} from "@/components/shared/fixed-action-bar";
import {BusinessCreditMainScreen} from "@/components/pages/business-credit/main-screen";
import {BusinessCreditBenefits} from "@/components/pages/business-credit/benefits";
import {BusinessCreditStepper} from "@/components/pages/business-credit/stepper";
import {BusinessCreditQR} from "@/components/pages/business-credit/qr";
import {BusinessCreditCalculator} from "@/components/pages/business-credit/credit-calculator";

export default function BusinessCreditPage() {
    return (
        <>
            <main>
                <BusinessCreditMainScreen/>
                <BusinessCreditBenefits/>
                <BusinessCreditStepper/>
                <BusinessCreditCalculator/>
                <BusinessCreditQR/>
            </main>
            <FixedActionBar
                label="Открыть Kaspi Gold"
            />
        </>
    );
}

