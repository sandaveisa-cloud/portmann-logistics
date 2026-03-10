import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['lv', 'en', 'ru', 'de'],
  defaultLocale: 'lv'
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
