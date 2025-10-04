import {PaymentsBenefits} from "@/components/pages/payments/benefits/PaymentsBenefits";
import {PaymentsMainScreen} from "@/components/pages/payments/main-screen";
import {Partners} from "@/components/pages/payments/partners";
import {FixedActionBar} from "@/components/shared/fixed-action-bar";

export default function PaymentsPage() {
    return (
        <>
            <main>
                <PaymentsMainScreen/>
                <PaymentsBenefits/>
                <Partners/>
            </main>

            <FixedActionBar
                label="Открыть Kaspi Gold"
            />
        </>
    );
}
