import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyfilterDirective } from './keyfilter.directive';

@NgModule({
  declarations: [KeyfilterDirective],
  imports: [CommonModule],
  exports: [KeyfilterDirective]
})
export class ParticleKeyfilterModule { }
