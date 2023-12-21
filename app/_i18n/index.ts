import { getRequestConfig } from "next-intl/server";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const defaultLocale = "en";

export const settings = {
  locales: [defaultLocale, "es"],
  defaultLocale: defaultLocale,
};

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: settings.locales,
  });

export const timeZone = "America/New_York";

export const formats = {
  dateTime: {
    dayOfWeek: {
      weekday: "long" as const,
    },
    dayOfMonth: {
      day: "numeric" as const,
    },
    monthDay: {
      month: "short" as const,
      day: "numeric" as const,
    },
    year: {
      year: "numeric" as const,
    },
  },
};

export default getRequestConfig(async ({ locale }) => {
  const messages = (await import(`app/_i18n/locales/${locale}.json`)).default;
  const now = new Date();

  return {
    formats,
    messages,
    timeZone,
    now,
  };
});
