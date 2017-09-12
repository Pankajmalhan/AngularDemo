import { RouterModule } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DetailsComponent } from "app/details/details.component";
import { HomeComponent } from "app/home/home.component";
import { AboutusComponent } from "app/aboutus/aboutus.component";
import { Routes_Provider } from "app/routes";
import { UnlessDirective } from "app/unless.directive";
import { DemoServicesService } from "app/demo-services.service";
import { ListComponent } from "app/list/list.component";
import { TemplateComponent } from "app/template/template.component";

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HighlightDirective,
    HomeComponent,
    AboutusComponent,
    UnlessDirective,
    ListComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    Routes_Provider
  ],
  providers: [DemoServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
