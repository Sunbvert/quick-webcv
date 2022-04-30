// IMPORT ALL MATERIAL COMPONENTS
// #STEPS
// 1- Import this file as module in app.module.ts ==> import { MaterialModule } from './xyz/abc';
// 2- Initialize it in imports:[] array ==> imports:[MaterialModule]

import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


const AllMaterialModules=[
  MatCardModule,
  MatToolbarModule,
  MatChipsModule,
  MatIconModule,
];

@NgModule({
  imports: [AllMaterialModules],
  exports: [AllMaterialModules],
})
export class MaterialModule {}