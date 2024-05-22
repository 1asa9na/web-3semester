import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { EdittableComponent } from './edittable/edittable.component';
import { UpdateComponent } from './update/update.component';
import { TableComponent } from './table/table.component';
import { TableService } from './table.service';
import { CounterService } from './counter.service';
import { CustomDirective } from './custom.directive';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    EdittableComponent,
    UpdateComponent,
    TableComponent,
    CustomDirective,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    CounterService,
    TableService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
