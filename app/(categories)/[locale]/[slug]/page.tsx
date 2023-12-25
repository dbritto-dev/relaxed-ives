import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTimeZone } from "next-intl/server";
import { CategoryPage } from "./category-page";

export default async function Page({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const messages = await getMessages(params.locale as never);
  const timeZone = await getTimeZone(params.locale as never);

  return (
    <NextIntlClientProvider
      locale={params.locale}
      messages={messages}
      timeZone={timeZone}
    >
      <CategoryPage />
    </NextIntlClientProvider>
  );
}
