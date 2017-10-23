import { Injectable }    from '@angular/core';
import { CONSULTATIONS } from './mock-consultation';
import { Consultation }  from './consultation';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ClientService {

    getConsultationsAll(): Consultation [] {
        return CONSULTATIONS;
    }
    
    getLastConsultation(ownerId: number): Consultation {
        let consult: Consultation [] = this.getConsultationsAll();
        let max: number = consult[0].date.getTime();
        let max_index: number = 0;
        for (let i:number = 1; i < consult.length; i++){
            if(consult[i].date.getTime()> max) { 
                max = consult[i].date.getTime();
                max_index[i];
            }
        }
        return consult[max_index];
    }
}
