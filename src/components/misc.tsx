import {
  clsx,
  type ClassValue
} from 'clsx';
import i18n from 'i18next';
import { useState } from 'react';
import { twMerge } from "tailwind-merge";
import { useTranslation } from 'react-i18next';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useCustomHook = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(() => i18n.language.toLowerCase());

  /*Handle pages navigation*/
  const handleNavigate = (page: string) => {
    return setCurrentPage(page);
  }

  /*Handle Language Change and Translation*/
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language)
  };

  /*Get Current Language*/
  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage.toUpperCase()) || languages[0];
  }

  return {
    t,
    currentPage,
    setCurrentPage,
    mobileMenuOpen,
    setMobileMenuOpen,
    currentLanguage,
    setCurrentLanguage,
    handleNavigate,
    handleLanguageChange,
    getCurrentLanguage
  }
}

export const navigationItems = [
  { key: 'home', label: 'MENU_LIST.HOME' },
  // { key: 'about-us', label: 'MENU_LIST.ABOUT_US' },
  // { key: 'products', label: 'MENU_LIST.PRODUCTS' },
  // { key: 'testimonial', label: 'MENU_LIST.TESTIMONIAL' },
  // { key: 'contact-us', label: 'MENU_LIST.CONTACT_US' }
];

export const languages = [
  { code: 'EN', name: 'English'},
  { code: 'BM', name: 'Bahasa Malaysia'}
];

const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={ERROR_IMG_SRC}
          alt="Error loading"
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}

export function handleWhatsAppOrderFromSlider () {
  const message = "Hi! I'm interested in ordering Wetty products. Can you help me?"
  const encodedMessage = encodeURIComponent(message)
  const whatsappNumber = "+1234567890" // Replace with actual number
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
}