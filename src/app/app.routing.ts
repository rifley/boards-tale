import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewPlayerStartComponent} from './new-player-start/new-player-start.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NewPlayerStartComponent

  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
