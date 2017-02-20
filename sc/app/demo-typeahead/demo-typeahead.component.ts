import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'demo-typeahead',
  templateUrl: './demo-typeahead.component.html',
  styleUrls: ['./demo-typeahead.component.scss']
})
export class DemoTypeaheadComponent implements OnInit {

  private modelTest = 'ala';
  private placeholderTest = 'Заполните поле ввода';
  private searchMinLengthTest = 0;
  private searchLoadingTest = 1;

  ngOnInit() {
  }
}
