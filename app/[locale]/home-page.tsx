"use client";

import { useTranslations } from "next-intl";
import { Link } from "app/_i18n";

export const HomePage = ({
  menu,
}: {
  menu: {
    label: string;
    link: string;
    type?: string;
    items: {
      label: string;
      link: string;
      subitems?: { label: string; link: string }[];
    }[];
  }[];
}) => {
  const t = useTranslations();

  return (
    <div>
      <h1>Home Page</h1>

      <h2>{t("homePageTitle")}</h2>
      <p>{t("homePageSubTitle")}</p>

      <ul>
        {menu.map((group) => (
          <li key={group.link}>
            <Link
              href={{ pathname: "/[slug]", query: { slug: group.link } }}
              as={group.link}
            >
              {group.label}
            </Link>

            <ul>
              {group.items.map((item) => (
                <li key={`${group.link}-${item.link}`}>
                  <Link
                    href={{ pathname: "/[slug]", query: { slug: item.link } }}
                    as={item.link}
                  >
                    {item.label}
                  </Link>

                  {item.subitems ? (
                    <ul>
                      {item.subitems.map((subitem) => (
                        <li key={`${group.link}-${item.link}-${subitem.link}`}>
                          <Link
                            href={{
                              pathname: "/[slug]",
                              query: { slug: subitem.link },
                            }}
                            as={subitem.link}
                          >
                            {subitem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
