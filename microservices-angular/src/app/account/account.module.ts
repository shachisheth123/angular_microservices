import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { AccountService } from './account.service';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { accountRoutes } from './account.route';
@NgModule({
    declarations:[
       AccountComponent
    ],
    imports:[
       BrowserModule,
       FormsModule,
       HttpClientModule, 
       RouterModule.forChild(accountRoutes)
    ],
    exports:[
        AccountComponent, RouterModule
    ],
    bootstrap:[],
    providers:[AccountService]
})
export class AccountModule{

}