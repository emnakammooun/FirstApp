import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MemberFormComponent } from './member-form/member-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component'
import { FirebaseModule } from './Firebase.module';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ArticleFormComponent } from './article-form/article-form.component';
import { MatSortModule } from '@angular/material/sort';
import { ArticleForm2Component } from './article-form2/article-form2.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventVisibilityComponent } from './event-visibility/event-visibility.component';
import { NgChartsModule} from 'ng2-charts';
import { MemberModalComponent } from './member-modal/member-modal.component';
import { AdherentService } from 'src/Services/adherent.service';
import { AdherentComponent } from './adherent/adherent.component';
import { MatTableModule } from '@angular/material/table';
import { AdherentFormComponent } from './adhernt-form/adherent-form.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Importer MatProgressSpinnerModule
import { BicycleTypeComponent } from './bicycle-type/bicycle-type.component';
import { BicycleTypeFormComponent } from './bicycle-type-form/bicycle-type-form.component';
import { BicycleFormComponent } from './bicycle-form/bicycle-form.component';
import { BicyclesComponent } from './bicycles/bicycles.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
    ConfirmDialogComponent,
    LayoutComponent,
    DashboardComponent,
    ArticlesComponent,
    EventsComponent,
    LoginComponent,
    ArticleFormComponent,
    ArticleForm2Component,
    EventCreateComponent,
    EventVisibilityComponent,
    MemberModalComponent,
    AdherentComponent,
    AdherentFormComponent,
    BicycleTypeComponent,
    BicycleTypeFormComponent,
    BicycleFormComponent,
    BicyclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatOptionModule,
    FirebaseModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgChartsModule,MatTableModule,
    MatRadioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
