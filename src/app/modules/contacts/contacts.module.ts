import { SharedModule } from './../../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { ContactsComponent } from './components/contact-list/contacts.component';
import { MaterialModule } from 'src/shared/material/mat.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddEditContactsComponent } from './components/contact-add-edit/add-edit-contacts.component';


const routes: Routes = [

      { path: '', component: ContactsComponent },
      { path: 'add', component: AddEditContactsComponent },
      { path: 'edit/:id', component: AddEditContactsComponent },
      { path: 'edit', component: AddEditContactsComponent }
];






@NgModule({
  declarations: [AddEditContactsComponent, ContactsComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxMatIntlTelInputModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class CotactsModule { }
