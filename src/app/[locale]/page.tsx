import {MainScreen} from "@/components/pages/main/main-screen";
import {Services} from "@/components/pages/main/services";
import {KaspiShop} from "@/components/pages/main/kaspi-shop";
import {Products} from "@/components/pages/main/products";
import {Entrepreneurs} from "@/components/pages/main/entrepreneurs";
import {Terminal} from "@/components/pages/main/kaspi-pay/Terminal";
import {StayPartner} from "@/components/pages/main/kaspi-pay/StayPartner";
import {MainQR} from "@/components/pages/main/qr";

export default function HomePage() {
    return (
        <>
            <MainScreen/>
            <Services/>
            <KaspiShop/>
            <Products/>
            <Entrepreneurs/>
            <Terminal/>
            <StayPartner/>
            <MainQR/>
        </>
    );
}