import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UploadImgComponent } from './components/upload-img/upload-img.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { InputCountryComponent } from './components/input-country/input-country.component';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MaterialModule } from './material/mat.module';
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [
    UploadImgComponent,
    InputCountryComponent,
    ConfirmationDialogComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    UploadImgComponent,
    FlexLayoutModule,
    InputCountryComponent
  ],
  providers: []
})
export class SharedModule { }
