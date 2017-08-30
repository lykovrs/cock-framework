import {Component, Input, OnInit, ContentChildren, QueryList} from '@angular/core';
import {ScAccordionComponent} from './../sc-accordion/sc-accordion.component';
import {ScAccordionsService, ScAccordionChangeEvent} from './sc-accordions.service';

@Component({
    selector    : 'sc-accordions',
    templateUrl : './sc-accordions.component.html',
    styleUrls   : ['./sc-accordions.component.scss'],
    providers   : [ScAccordionsService]
})
export class ScAccordionsComponent implements OnInit {
    private _accordions: QueryList<ScAccordionComponent>;
    @Input('closeOthers') closeOthersAccordions: boolean;
    @ContentChildren(ScAccordionComponent) set accordions(list: QueryList<ScAccordionComponent>) {
        list.forEach((accordion: ScAccordionComponent, index) => {
            if ( accordion.accordionId ) {
                accordion.accordionId = [accordion.accordionId, '-' , index].join('');
            } else {
                accordion.accordionId = index + '';
            }
        });
        this._accordions = list;
    }

    get accordions(): QueryList<ScAccordionComponent> {
        return this._accordions;
    }

    constructor(private scAccordionsService: ScAccordionsService) {}

    ngOnInit() {
        this.scAccordionsService.closeOthersAccordions = this.closeOthersAccordions;
    }

    accordionChange(accordionChangeEvent: ScAccordionChangeEvent) {
        this.closeOthersAccordions && this._accordions.forEach((accordion) => {
            accordion.isOpened = accordion.accordionId === accordionChangeEvent.accordionId;
        });
    }

}
