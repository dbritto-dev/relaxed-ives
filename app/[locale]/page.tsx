import { Link } from "app/_i18n";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTimeZone } from "next-intl/server";
import { HomePage } from "./home-page";

export default async function Page({ params }: { params: { locale: string } }) {
  const messages = await getMessages(params.locale as never);
  const timeZone = await getTimeZone(params.locale as never);
  const menu = await import("app/_data/home-menu.json").then(
    (mod) => mod.default
  );

  return (
    <NextIntlClientProvider
      locale={params.locale}
      messages={messages}
      timeZone={timeZone}
    >
      <HomePage menu={menu} />
    </NextIntlClientProvider>
  );
}
