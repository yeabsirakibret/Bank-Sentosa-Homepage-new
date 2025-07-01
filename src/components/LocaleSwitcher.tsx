import {useLocale} from 'next-intl';
import {routing} from '@/i18n/routing';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

const localeMeta = {
  en: { label: 'US', flag: '🇺🇸' },
  id: { label: 'ID', flag: '🇮🇩' }
};

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {routing.locales.map((cur) => {
        const meta = localeMeta[cur as keyof typeof localeMeta];
        return (
          <option key={cur} value={cur}>
            {meta.flag} {meta.label}
          </option>
        );
      })}
    </LocaleSwitcherSelect>
  );
}
