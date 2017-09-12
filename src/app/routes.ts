import {RouterModule,Routes} from '@angular/router';  
import { DetailsComponent } from "app/details/details.component";
import { HomeComponent } from "app/home/home.component";
import { AboutusComponent } from "app/aboutus/aboutus.component";
import { TemplateComponent } from "app/template/template.component";
const APP_ROUTES: Routes = [  
    {path:'',component:HomeComponent},  
    {path:'detils',component:DetailsComponent},  
    {path:'aboutus',component:AboutusComponent},
    {path:'template',component:TemplateComponent},
    {path:'**',redirectTo:''}  
];  
  
export const Routes_Provider=RouterModule.forRoot(APP_ROUTES);  