import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'demo-typeahead',
  templateUrl: './demo-typeahead.component.html',
  styleUrls: ['./demo-typeahead.component.scss']
})
export class DemoTypeaheadComponent implements OnInit {

  private modelTest = '';
  private placeholderTest = 'Заполните поле ввода';
  private searchMinLengthTest = 0;
  private searchLoadingTest = 1;
  private modTest2 = 'warning';
  private modTest3 = 'attention';

  ngOnInit() {
  }
}
