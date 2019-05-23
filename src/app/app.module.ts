import { HttpClientModule }        from '@angular/common/http';
import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';
import { ToastrModule }            from 'ngx-toastr';

import { AppComponent }      from './app.component';
import { HomeComponent }     from './home/home.component';
import { HeaderComponent }   from './layout/header/header.component';
import { ModulesModule }     from './modules/modules.module';
import { RendererComponent } from './renderer/renderer.component';
import { SharedModule }      from './shared/shared.module';

@NgModule({

    declarations: [

        AppComponent,
        HeaderComponent,
        HomeComponent,
        RendererComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ModulesModule,
        RouterModule.forRoot([

            {

                path: 'page/:page',
                component: RendererComponent

            }, {

                path: '',
                pathMatch: 'full',
                redirectTo: 'page/getting-started'

            }

        ]),
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
