import { CommonModule }                                  from '@angular/common';
import { HttpClient }                                    from '@angular/common/http';
import { NgModule }                                      from '@angular/core';
import { MatTooltipModule }                              from '@angular/material';
import { ClipboardModule }                               from 'ngx-clipboard';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';

export function markedOptionsFactory(): MarkedOptions {

    const renderer = new MarkedRenderer();

    renderer.blockquote = (text: string) => {

        return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';

    };

    return {

        renderer: renderer,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,

    };

}

@NgModule({

    declarations: [],

    imports: [

        ClipboardModule,
        CommonModule,

        MarkdownModule.forRoot({

            loader: HttpClient,
            markedOptions: {

                provide: MarkedOptions,
                useFactory: markedOptionsFactory,

            },

        }),

        MatTooltipModule,

    ],

    exports: [

        ClipboardModule,
        CommonModule,
        MarkdownModule,
        MatTooltipModule,

    ]

})
export class SharedModule {
}
