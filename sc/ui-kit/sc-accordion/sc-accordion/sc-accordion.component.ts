import {Component, Directive, Input, Output, OnInit, OnDestroy, AfterContentInit, ContentChild, TemplateRef, ViewContainerRef, EventEmitter} from '@angular/core';

import {Subscription} from 'rxjs/Subscription';
import {ScAccordionsService, ScAccordionChangeEvent} from './../sc-accordions/sc-accordions.service';
import {ColorType, SizeType} from 'ui-kit/sc-panel/sc-panel.component';

@Directive({
    selector: 'ng-template[scPanelContent]'
})
export class ScPanelContent {
    constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
    selector: 'ng-template[scAccordionContent]'
})
export class ScAccordionContent {
    constructor(public templateRef: TemplateRef<any>) {}
}

@Component({
    selector    : 'sc-accordion',
    templateUrl : './sc-accordion.component.html',
    styleUrls   : ['./sc-accordion.component.scss']
})
export class ScAccordionComponent implements OnInit, AfterContentInit {
    @Input() accordionId: string;
    @Input() title: string;
    @Input() isOpened: boolean;
    @Input() isDisabled: boolean;
    @Input() colorType: ColorType;
    @Input() sizeType: ColorType;

    @Output() accordionChange = new EventEmitter<ScAccordionChangeEvent>();
    private subscription: Subscription;

    @ContentChild(ScPanelContent) panelContent: ScPanelContent;
    @ContentChild(ScAccordionContent) accordionContent: ScAccordionContent;
    constructor(private scAccordionsService: ScAccordionsService) {
        this.subscription = scAccordionsService.accordionToggled.subscribe(
            accordionToggled => {
                if ( scAccordionsService.closeOthersAccordions ) {
                    this.isOpened = accordionToggled.isOpened && accordionToggled.accordionId === this.accordionId;
                }
            }
        )
    }

    public getIconUrl(): string {
        return this.isOpened ? 'sc/svg/caret-right.svg' : 'sc/svg/caret-left.svg';
    }

    ngOnInit() {}

    ngAfterContentInit() {}

    toggleOpened() {
        if ( this.isDisabled ) return;

        this.isOpened = !this.isOpened;

        const accordionEvent = {
            accordionId: this.accordionId,
            isOpened: this.isOpened
        };

        this.accordionChange.emit(accordionEvent);
        this.scAccordionsService.toggleAccordion(accordionEvent);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
