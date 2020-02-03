import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form/dynamic-form.module';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FormInputComponent } from './dynamic-form/components/form-input/form-input.component';
import { FormSelectComponent } from './dynamic-form/components/form-select/form-select.component';
import { FormButtonComponent } from './dynamic-form/components/form-button/form-button.component';
import { DynamicFieldDirective } from './dynamic-form/components/dynamic-field.directive';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
