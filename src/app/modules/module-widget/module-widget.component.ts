import { Component, Input } from '@angular/core';
import { ToastrService }    from 'ngx-toastr';
import { Module }           from '../module';

@Component({
    selector: 'app-module-widget',
    templateUrl: './module-widget.component.html',
    styleUrls: [ './module-widget.component.scss' ]
})
export class ModuleWidgetComponent {

    @Input() public module: Module;

    public constructor(public toastrService: ToastrService) {


    }
    
}
