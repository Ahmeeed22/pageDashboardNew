import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
@NgModule({
  declarations: [ 

  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule
  ],
  exports:[
    ButtonModule,
    DropdownModule,
    MultiSelectModule
  ]
})
export class SharedModule { }
