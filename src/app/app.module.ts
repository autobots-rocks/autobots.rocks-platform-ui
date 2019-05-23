import { HttpClientModule }        from '@angular/common/http';
import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';
import { ToastrModule }            from 'ngx-toastr';

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
        HttpClientModule,
        ModulesModule,
        RouterModule.forRoot([]),
        SharedModule,
        ToastrModule.forRoot({

            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            progressBar: true,
            enableHtml: true,
            closeButton: true

        }),


    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
