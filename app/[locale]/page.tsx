import { Link } from "app/_i18n";

export default async function Page() {
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
