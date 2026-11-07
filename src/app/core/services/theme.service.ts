import { Injectable, signal } from '@angular/core';

export interface NavLink {
  label: string;
  fragment: string;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDark = signal(true);

  readonly navLinks = signal<NavLink[]>([
    { label: 'Início', fragment: 'hero' },
    { label: 'Paradigma', fragment: 'paradigm' },
    { label: 'Oásis Regionais', fragment: 'regional' },
    { label: 'Rastreabilidade', fragment: 'traceability' },
    { label: 'Contato', fragment: 'footer' },
  ]);
}
