import type { Metadata } from "next";

import api from "~/store/api";
import CartProvider from "~/cart/context";
import ThemeProvider from "~/theme/context";
import ThemeToggle from "~/theme/components/ThemeToggle";

import FacebookIcon from "@/components/icons/facebook";
import WhatsappIcon from "@/components/icons/whatsapp";

import NotificationsPage from "./notifications/page";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const store = await api.fetch();

  return {
    title: store.title,
    description: store.subtitle,
  };
}

async function RootLayout({ children }: { children: React.ReactNode }) {
  const store = await api.fetch();

  return (
    <html suppressHydrationWarning lang="es">
      <head />

      <body className="font-sans antialiased">
        <ThemeProvider>
          <div className="relative m-auto max-w-screen-xl rounded-sm">
            <header className="flex flex-col gap-4 p-4">
              <img
                alt={store.title}
                className="h-32 rounded-lg object-fit sm:h-64"
                src="./assets/banner.jpg"
              />
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-4">
                <div className="-mt-20 rounded-full p-1 sm:-mt-12">
                  <img
                    alt={store.title}
                    className="h-32 w-32 min-w-[128px] object-cover rounded-full border-8 border-background"
                    src="./assets/avatar.jpg"
                  />
                </div>
                <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:gap-2 sm:text-left">
                  <div className="flex flex-col gap-1">
                    <p className="text-3xl font-bold sm:text-4xl">{store.title}</p>
                    <p className="font-medium text-muted-foreground">{store.subtitle}</p>
                  </div>
                  <div className="flex gap-2">
                    {store.facebook ? (
                      <a
                        aria-label="Instagram"
                        href={store.facebook}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
                          <FacebookIcon />
                        </div>
                      </a>
                    ) : null}
                    {store.whatsapp ? (
                      <a
                        aria-label="Whatsapp"
                        href={store.whatsapp}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
                          <WhatsappIcon />
                        </div>
                      </a>
                    ) : null}
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </header>
            <main className="px-4">
              <CartProvider>{children}</CartProvider>
            </main>
            <NotificationsPage />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;