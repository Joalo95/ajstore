"use client";

import { useEffect, useState } from "react";

const getPayment = async () => {
    try {
        const res = await fetch('/notifications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res.ok) {
            const { notification } = await res.json();
            //setNotifications([notification]);
            //console.log(notification);
            return notification;
        } else {
            console.error('Error en la solicitud:', res.status);
        }
    } catch (e) {
        console.error('Error en el servidor:', e);
    }
}

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState<
        { id: number; transaction_amount: number; status: string }[]
    >([]);

    useEffect(() => {
        getPayment()
            .then(notification => setNotifications([
                ...notifications,
                notification as { id: number; transaction_amount: number; status: string },
            ]))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (notifications.length) {
            const timeout = setTimeout(() => {
                setNotifications((notifications) =>
                    notifications.slice(1, notifications.length));
            }, 8000);

            return () => clearTimeout(timeout);
        }
    }, [notifications]);

    console.log(notifications);

    if (!notifications.length) {
        return null;
    }
    return (
        <section className="absolute bottom-4 left-4 grid items-center justify-center gap-2 rounded-md border bg-black p-4 text-center">
            <p className="text-2xl font-bold">
                <span><strong>Orden #{notifications[0]?.id}</strong>, {notifications[0]?.status}</span>
                <span>{notifications[0]?.transaction_amount.toLocaleString("es-UY", { style: "currency", currency: "UYU" })}</span>
            </p>
        </section>
    );
}