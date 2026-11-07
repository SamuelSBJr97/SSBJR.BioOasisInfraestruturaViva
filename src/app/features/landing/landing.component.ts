import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ParadigmShiftComponent } from './paradigm-shift/paradigm-shift.component';
import { RegionalOasisComponent } from './regional-oasis/regional-oasis.component';
import { TraceabilityComponent } from './traceability/traceability.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ParadigmShiftComponent,
    RegionalOasisComponent,
    TraceabilityComponent,
    FooterComponent,
  ],
  template: `
    <div class="min-h-screen bg-dark-bg text-gray-100 flex flex-col">
      <app-navbar />
      <main class="flex-grow">
        <app-hero />
        <app-paradigm-shift />
        <app-regional-oasis />
        <app-traceability />
      </main>
      <app-footer />
    </div>
  `,
})
export class LandingComponent {}
