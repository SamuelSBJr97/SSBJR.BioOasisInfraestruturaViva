import { Injectable, signal, computed } from '@angular/core';
import {
  SupportedLanguage,
  TRANSLATIONS,
  TranslationDictionary,
} from '../i18n/translations';

export interface LanguageOption {
  code: SupportedLanguage;
  label: 'pt-br' | 'en-us' | 'es-es';
  name: string;
  flag: string;
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  readonly availableLanguages: LanguageOption[] = [
    { code: 'pt-BR', label: 'pt-br', name: 'Português', flag: '🇧🇷' },
    { code: 'en-US', label: 'en-us', name: 'English', flag: '🇺🇸' },
    { code: 'es-ES', label: 'es-es', name: 'Español', flag: '🇪🇸' },
  ];

  readonly currentLang = signal<SupportedLanguage>(this.detectInitialLanguage());

  readonly t = computed<TranslationDictionary>(() => TRANSLATIONS[this.currentLang()]);

  setLanguage(lang: SupportedLanguage): void {
    this.currentLang.set(lang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('rede_oasis_lang', lang);
        document.documentElement.lang = lang;
      } catch {
        // ignore in SSR or sandboxed environments
      }
    }
  }

  private detectInitialLanguage(): SupportedLanguage {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('rede_oasis_lang') as SupportedLanguage;
        if (stored && ['pt-BR', 'en-US', 'es-ES'].includes(stored)) {
          return stored;
        }
        const navLang = navigator.language?.toLowerCase() ?? '';
        if (navLang.startsWith('en')) return 'en-US';
        if (navLang.startsWith('es')) return 'es-ES';
      } catch {
        // fallback
      }
    }
    return 'pt-BR';
  }
}
