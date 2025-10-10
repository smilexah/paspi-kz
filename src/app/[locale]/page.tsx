import {MainScreen} from "@/components/pages/main/main-screen";
import {Services} from "@/components/pages/main/services";
import {KaspiShop} from "@/components/pages/main/kaspi-shop";
import {Products} from "@/components/pages/main/products";

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <MainScreen/>
            <Services/>
            <KaspiShop/>
            <Products/>
        </main>
    );
}