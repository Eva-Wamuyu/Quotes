import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuotelistComponent } from './developercomponents/quotelist/quotelist.component';
import { FormComponent } from './developercomponents/form/form.component';
import { HeropageComponent } from './developercomponents/heropage/heropage.component';
import { QuotecomponentComponent } from './developercomponents/quotecomponent/quotecomponent.component';
import { DatecountPipe } from './datecount.pipe';
import { QuotedetailsComponent } from './developercomponents/quotedetails/quotedetails.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotelistComponent,
    FormComponent,
    HeropageComponent,
    QuotecomponentComponent,
    DatecountPipe,
    QuotedetailsComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
