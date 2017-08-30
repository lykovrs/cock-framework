import { Component, ElementRef, Input, OnInit, Renderer, ViewEncapsulation } from '@angular/core';

import { ScSvgIconRegistryService } from './sc-svg-icon-registry.service';


@Component({
	selector: 'sc-svg-icon',
	styles: [ ':host { display:inline-block; }' ],
    styleUrls: ['./sc-svg-icon.component.scss'],
	template: '<ng-content></ng-content>',
    encapsulation: ViewEncapsulation.None,
})

export class ScSvgIconComponent implements OnInit {
	@Input() set src(iconUrl: string) {
		
		this.iconReg.loadSvg(iconUrl).subscribe(svg => {
			this.setSvg(svg);
		});
	};

	constructor(
		private element: ElementRef,
		private renderer: Renderer,
		private iconReg: ScSvgIconRegistryService) {
	}

	ngOnInit() {}

	private setSvg(svg: SVGElement) {
		const icon = <SVGElement>svg.cloneNode(true);
		let elem = this.element.nativeElement;
		elem.innerHTML = '';
		this.renderer.projectNodes(elem, [icon]);
	}
}
