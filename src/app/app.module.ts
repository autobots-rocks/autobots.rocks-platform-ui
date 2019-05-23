import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }    from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ModulesModule }   from './modules/modules.module';
import { SharedModule }    from './shared/shared.module';

@NgModule({

    declarations: [

        AppComponent,
        HeaderComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        ModulesModule,
        SharedModule,


    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
