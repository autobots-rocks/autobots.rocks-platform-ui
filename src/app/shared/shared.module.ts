import { CommonModule }    from '@angular/common';
import { NgModule }        from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({

    declarations: [],

    imports: [

        ClipboardModule,
        CommonModule

    ],

    exports: [

        ClipboardModule,
        CommonModule

    ]
    
})
export class SharedModule {
}
