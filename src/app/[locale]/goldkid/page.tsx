import {FixedActionBar} from "@/components/shared/fixed-action-bar";
import {GoldKidMainScreen} from "@/components/pages/gold-kid/main-screen";
import {GoldKidBenefits} from "@/components/pages/gold-kid/benefits";
import {GoldKidStepper} from "@/components/pages/gold-kid/stepper";
import {GoldKidQR} from "@/components/pages/gold-kid/qr";

export default function GoldKidPage() {
    return (
        <>
            <main>
                <GoldKidMainScreen/>
                <GoldKidBenefits/>
                <GoldKidStepper/>
                <GoldKidQR/>
            </main>
            <FixedActionBar
                label="Открыть Kaspi Gold"
            />
        </>
    );
}
