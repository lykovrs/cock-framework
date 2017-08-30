import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

export interface ScAccordionChangeEvent {
    accordionId: string;
    isOpened: boolean;
}

@Injectable()
export class ScAccordionsService {
    public closeOthersAccordions: boolean = false;

    private accodionSource = new Subject<ScAccordionChangeEvent>();
    public accordionToggled = this.accodionSource.asObservable();

    constructor() {}
    
    public toggleAccordion(accordionEvent: ScAccordionChangeEvent) {
        this.accodionSource.next( accordionEvent );
    }
    
}
