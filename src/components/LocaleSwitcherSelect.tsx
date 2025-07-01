'use client';

import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {Locale} from 'next-intl';
import {ChangeEvent, ReactNode, useTransition, useState, useEffect, useRef} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';

type Props = {
  children: ReactNode;
  defaultValue: string;
  options: Array<{value: string, label: string, icon: string}>;
};

export default function LocaleSwitcherSelect({ children, defaultValue, options }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options.find(o => o.value === defaultValue));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref]);

  function onSelect(option: typeof selected) {
    if (!option) return;
    setSelected(option);
    setIsOpen(false);
    const nextLocale = option.value as Locale;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <div>
        <button type="button" className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setIsOpen(!isOpen)}>
          <img src={selected?.icon} alt="" className="w-5 h-5 mr-2" />
          {selected?.label}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-lg shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map(option => (
              <a href="#" key={option.value} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900" role="menuitem" onClick={() => onSelect(option)}>
                <img src={option.icon} alt="" className="w-5 h-5 mr-2" />
                {option.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
