import { Component, Input, OnChanges } from '@angular/core';
@Component({
    selector: 'ct-table',
    templateUrl: './table.component.html'
})
export class TableComponent implements OnChanges { 
    @Input() records: any[];
    @Input() caption: string;
    keys: string[];
    ngOnChanges() {
        //this.keys = Object.keys(this.records[0]);
    }
}