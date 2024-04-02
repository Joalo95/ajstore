import MercadPagoIcon from "@/components/icons/mercadoPago";
import { Button } from "@/components/ui/button";
import { useCart } from "@/modules/cart/context/client";
import { CartItem } from "@/modules/cart/types";

export function Page() {
    const [{ cart }] = useCart();

    const items: CartItem[] = Array.from(cart.values());

    async function payOrder() {
        try {
            const res = await fetch('/payment/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items }),
            });
            const { url } = await res.json();
            window.open(url, '_blank');
        } catch (e) {
            console.log("Error en el servidor", e);
        }
    }

    return (
        <div className="flex">
            <Button className="w-full" size="lg" onClick={payOrder}>
                <div className="inline-flex items-center gap-2">
                    <MercadPagoIcon />
                    <span>Pagar</span>
                </div>
            </Button>
        </div>
    );
}