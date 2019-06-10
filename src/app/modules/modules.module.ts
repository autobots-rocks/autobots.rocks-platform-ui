import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { ClipboardModule }       from 'ngx-clipboard';
import { SharedModule }          from '../shared/shared.module';
import { ModuleWidgetComponent } from './module-widget/module-widget.component';
import { ModulesComponent }      from './modules.component';
import { ModuleViewerComponent } from './module-viewer/module-viewer.component';

@NgModule({

    declarations: [

        ModulesComponent,
        ModuleWidgetComponent,
        ModuleViewerComponent

    ],

    imports: [

        ClipboardModule,
        CommonModule,
        SharedModule,
        RouterModule.forChild([

            {

                path: 'modules',
                component: ModulesComponent

            }

        ])

    ]

})
export class ModulesModule {
}
