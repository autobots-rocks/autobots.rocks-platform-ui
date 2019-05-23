import { Component }      from '@angular/core';
import { Module }         from './module';
import { ModulesService } from './modules.service';

@Component({
    selector: 'app-modules',
    templateUrl: './modules.component.html',
    styleUrls: [ './modules.component.scss' ]
})
export class ModulesComponent {

    public modules: Array<Module>;

    public constructor(private modulesService: ModulesService) {

        modulesService.getPageable().subscribe(pageable => {

            this.modules = pageable.content;
            
            console.log(pageable);

        });

    }

}
