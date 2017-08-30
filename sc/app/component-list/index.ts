import { Component, OnInit } from '@angular/core';
import { Routes, Route } from '@angular/router';
import { appRoutes } from './../app-routing.module';

@Component({
  selector: 'component-list',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class ComponentListComponent implements OnInit {
  listRoutes = appRoutes.filter( (route: Route) => route.component);
  constructor() { }

  ngOnInit() {
  };
}
