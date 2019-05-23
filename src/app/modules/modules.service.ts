import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIClient }  from '../_lib/APIClient';
import { Pageable }   from '../_lib/Pageable';
import { Module }     from './module';

@Injectable({
    providedIn: 'root'
})
export class ModulesService {

    public constructor(private apiClient: APIClient<Module>) {


    }

    public getPageable(): Observable<Pageable<Module>> {

        return this.apiClient._getPageable('/modules');

    }

}
