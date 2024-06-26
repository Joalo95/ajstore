"use client";

import type {CartItem} from "@/modules/cart/types";

import MercadPagoIcon from "@/components/icons/mercadoPago";
import {Button} from "@/components/ui/button";
import {useCart} from "@/modules/cart/context/client";

interface ServerResponse {
  url: string;
}

export default function PaymentButton() {
  const [{cart}] = useCart();

  const items: CartItem[] = Array.from(cart.values());

  async function payOrder() {
    try {
      const res = await fetch("https://ajstore.vercel.app/payment/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({items}),
      });
      const data: ServerResponse = await res.json();
      const url = new URL(data.url);

      window.open(url, "_blank");
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log("Error en el servidor", e);
    }
  }

  return (
    <div className="flex">
      <Button
        className="w-full"
        size="lg"
        onClick={() => {
          void payOrder();
        }}
      >
        <div className="inline-flex items-center gap-2">
          <MercadPagoIcon />
          <span>Pagar</span>
        </div>
      </Button>
    </div>
  );
}
