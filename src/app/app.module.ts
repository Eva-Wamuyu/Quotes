import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuotelistComponent } from './developercomponents/quotelist/quotelist.component';
import { FormComponent } from './developercomponents/form/form.component';
import { HeropageComponent } from './developercomponents/heropage/heropage.component';
import { QuotecomponentComponent } from './developercomponents/quotecomponent/quotecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotelistComponent,
    FormComponent,
    HeropageComponent,
    QuotecomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
