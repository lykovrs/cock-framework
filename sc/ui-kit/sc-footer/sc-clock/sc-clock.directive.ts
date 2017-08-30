import {Directive, OnDestroy, Input, OnInit, ElementRef, LOCALE_ID} from "@angular/core";
import {DatePipe} from "@angular/common";
@Directive(
    {selector: '[sc-clock]'}
)
/**
 * Директива отображения времени
 * @directive sc-clock
 */
export class ScClockDirective implements OnInit, OnDestroy{
    private timeoutId: any;
    @Input() scClock: string;

    constructor(private el: ElementRef, public pipe: DatePipe) {}

    ngOnInit() {
        this.timeoutId = setInterval((): void => {
            this.updateTime();
        }, 1000);
    }

    ngOnDestroy() {
        clearInterval(this.timeoutId);
    }

    private updateTime(): void {
        //let dateValue: string;
        let newDate = new Date();
        let resultString =
            this.pipe.transform(newDate, 'd ') +
            this.convertMonthToGenitive(this.pipe.transform(newDate, 'MMMM')) +
            this.pipe.transform(newDate, ', HH:mm');
        this.el.nativeElement.innerText = resultString;
    }

    /*
    Переводим в родительный падеж
     */
    private convertMonthToGenitive(month: string): string {
        if (month) {
            // Снаяала удалим ненужные окончания
            if (month.endsWith('ь') || month.endsWith('й')) {
                month = month.slice(0, -1);
                // Затем добавим правильное окончание
                month = month + 'я'
            } else {
                month = month + 'а'
            }
        }
        return month;
    }
}


