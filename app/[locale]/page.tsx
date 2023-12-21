import { unstable_setRequestLocale } from "next-intl/server";
import { Link } from "app/_i18n";

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <div>
      Home Page
      <ul>
        <li>
          <Link href="/arsenal-tickets">Arsenal Tickets</Link>
        </li>
      </ul>
    </div>
  );
}
