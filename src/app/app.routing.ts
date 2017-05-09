import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewPlayerStartComponent} from './new-player-start/new-player-start.component';
import {IntroductionComponent} from './introduction/introduction.component';
import { HelpComponent } from './help/help.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NewPlayerStartComponent
  },
  {
    path: 'intro',
    component: IntroductionComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
