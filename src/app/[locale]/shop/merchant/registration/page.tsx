import {SMRMainScreen} from "@/components/pages/shop-merchant-registration/main-screen";
import {SMRBenefits} from "@/components/pages/shop-merchant-registration/benefits";
import {SMRStepper} from "@/components/pages/shop-merchant-registration/stepper";
import {SMRConditions} from "@/components/pages/shop-merchant-registration/conditions";

export default function MerchantRegistrationPage() {
    return (
        <>
            <main>
                <SMRMainScreen/>
                <SMRBenefits/>
                <SMRStepper/>
                <SMRConditions/>
            </main>
        </>
    );
}

