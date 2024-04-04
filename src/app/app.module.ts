import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestServiceService } from './rest-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { QuartecopieComponent } from './quartecopie/quartecopie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DATE_LOCALE, MatLineModule, MatNativeDateModule, MatOptionModule, MatRippleModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { InputValueDirective } from './input-value.directive';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import { AnagraficaCassoniComponent } from './anagrafica-cassoni/anagrafica-cassoni.component';



@NgModule({
  declarations: [
    AppComponent,
    QuartecopieComponent,
    LoginComponent,
    InputValueDirective,
    AnagraficaCassoniComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule,
    FormsModule,
    NgbModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    MatLineModule,
    MatListModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
    
    RestServiceService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent, QuartecopieComponent]
})
export class AppModule { }
