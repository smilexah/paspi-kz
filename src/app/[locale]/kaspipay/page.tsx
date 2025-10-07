import {KaspiPayMainScreen} from "@/components/pages/kaspi-pay/main-screen";
import {KaspiPayQRBar} from "@/components/pages/kaspi-pay/bar";
import {KaspiPayBenefits} from "@/components/pages/kaspi-pay/benefits";
import {KaspiPayStepper} from "@/components/pages/kaspi-pay/stepper";
import {KaspiPayQR} from "@/components/pages/kaspi-pay/qr";

export default function KaspiPayPage() {
    return (
        <>
            <main>
                <KaspiPayMainScreen/>
                <KaspiPayBenefits/>
                <KaspiPayStepper/>
                <KaspiPayQR/>
            </main>
            <KaspiPayQRBar
                label="Открыть Kaspi Gold"
                imageSrc="/qr/kaspipay-qr.png"
            />
        </>
    );
}

