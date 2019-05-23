import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { MarkdownService }   from 'ngx-markdown';

@Component({
    selector: 'app-renderer',
    templateUrl: './renderer.component.html',
    styleUrls: [ './renderer.component.scss' ]
})
export class RendererComponent implements OnInit {

    public page: string;
    public content: string;

    public constructor(private markdownService: MarkdownService,
                       private route: ActivatedRoute) {

    }

    public ngOnInit() {

        this.route.params.subscribe(params => {

            if (params.page) {

                this.page = params.page;

                // this.markdownService.getSource(`/assets/content/${ params.page }.md`).subscribe(content => {
                //
                //     console.log(content);
                //
                //     // this.content = content;
                //     this.content = this.markdownService.compile(content);
                //
                // });

            }

        });

    }

}
