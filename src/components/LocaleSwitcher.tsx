import {useLocale} from 'next-intl';
import {routing} from '@/i18n/routing';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

const localeMeta = {
  en: { label: 'ENG', flag: '/flags/us.svg' },
  id: { label: 'ID', flag: '/flags/id.svg' }
};

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect 
      defaultValue={locale} 
      options={Object.entries(localeMeta).map(([locale, { label, flag }]) => ({ value: locale, label, icon: flag }))}
    >
      {routing.locales.map((cur) => {
        const meta = localeMeta[cur as keyof typeof localeMeta];
        return (
          <option key={cur} value={cur}>
            {meta.label}
          </option>
        );
      })}
    </LocaleSwitcherSelect>
  );
}
