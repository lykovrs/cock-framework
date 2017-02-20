import { Component, ElementRef, Input, OnInit, Renderer } from '@angular/core';

import { ScSvgIconRegistryService } from './sc-svg-icon-registry.service';


@Component({
	selector: 'sc-svg-icon',
	styles: [ ':host { display:inline-block; }' ],
	template: '<ng-content></ng-content>'
})

export class ScSvgIconComponent implements OnInit {
	@Input() src:string;

	constructor(private element:ElementRef, private renderer:Renderer,
		private iconReg:ScSvgIconRegistryService) {
	}

	ngOnInit() {
		this.loadSvg();
	}

	private loadSvg() {
		this.iconReg.loadSvg(this.src).subscribe(svg => {
			this.setSvg(svg);
		});
	}

	private setSvg(svg:SVGElement) {
		const icon = <SVGElement>svg.cloneNode(true);
		let elem = this.element.nativeElement;
		elem.innerHTML = '';
		this.renderer.projectNodes(elem, [icon]);
	}
}