import { Link } from "app/_i18n";
import { useTranslations } from "next-intl";

export const CategoryPage = () => {
  const t = useTranslations();

  return (
    <div>
      <h1>Category Page</h1>

      <p>{t("topRivalries")}</p>

      <ul>
        <li>
          <Link href="/">Back Home</Link>
        </li>
      </ul>
    </div>
  );
};
