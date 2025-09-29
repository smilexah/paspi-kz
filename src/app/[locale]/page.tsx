import {MainScreen} from "@/components/root-page/main-screen/MainScreen";
import {Services} from "@/components/root-page/services/Services";
import {KaspiShop} from "@/components/root-page/kaspi-shop";

export default function HomePage() {
    return (
        <main>
            <MainScreen/>
            <Services/>
            <KaspiShop/>
        </main>
    );
}