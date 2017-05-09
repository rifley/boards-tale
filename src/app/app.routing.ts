import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewPlayerStartComponent} from './new-player-start/new-player-start.component';
import {IntroductionComponent} from './introduction/introduction.component';
import { HelpComponent } from './help/help.component';
import { TileDetailComponent } from './tile-detail/tile-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NewPlayerStartComponent
  },
  {
    path: 'intro',
    component: IntroductionComponent
  },
  {
    path: 'tiles/:id',
    component: TileDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
