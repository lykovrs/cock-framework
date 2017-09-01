import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'sc-typeahead',
    templateUrl: './sc-typeahead.component.html',
    styleUrls: ['./sc-typeahead.component.scss'],
})
export class ScTypeaheadComponent {
    @Input() search: Observable<any[]>
}
