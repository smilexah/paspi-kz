import {FixedActionBar} from "@/components/shared/fixed-action-bar";
import {GoldMainScreen} from "@/components/pages/gold/main-screen";
import {GoldBenefits} from "@/components/pages/gold/benefits";
import {GoldStepper} from "@/components/pages/gold/stepper";
import {GoldQR} from "@/components/pages/gold/qr";

export default function GoldPage() {
    return (
        <>
            <main>
                <GoldMainScreen/>
                <GoldBenefits/>
                <GoldStepper/>
                <GoldQR />
            </main>
            <FixedActionBar
                label="Открыть Kaspi Gold"
            />
        </>
    );
}
