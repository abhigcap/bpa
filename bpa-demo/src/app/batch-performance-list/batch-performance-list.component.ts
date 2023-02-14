import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-batch-performance-list',
  templateUrl: './batch-performance-list.component.html',
  styleUrls: ['./batch-performance-list.component.scss']
})
export class BatchPerformanceListComponent {

 // Each Column Definition results in one Column.
 public columnDefs: ColDef[] = [
   { field: 'GOLDEN',
     checkboxSelection: true,
     showDisabledCheckboxes: true
   },
   { field: 'ALERTS'},
   { field: 'BATCH ID' },
   { field: 'RECIPE'},
   { field: 'SITE'},
   { field: 'PLANT/AREA' },
   { field: 'PCELL'},
   { field: 'UNIT'},
   { field: 'STATUS' },
   { field: 'BPI'},
   { field: 'QUALITY'},
   { field: 'CYCLE TIME' },
   { field: 'RM USAGE'},
   { field: 'COMPARE'}
 ];

 // DefaultColDef sets props common to all Columns
 public defaultColDef: ColDef = {
   sortable: true,
   //filter: true,
 };
 
 // Data that gets displayed in the grid
 public rowData$!: Observable<any[]>;
 url = 'http://localhost:4200';

 // For accessing the Grid's API
 @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

 constructor(private http: HttpClient) {}

 // Example load data from sever
 onGridReady(params: GridReadyEvent) {
   this.rowData$ = this.http
     .get<any[]>('assets/mock.json');
 }

 // Example of consuming Grid Event
 onCellClicked( e: CellClickedEvent): void {
   console.log('cellClicked', e);
 }

 // Example using Grid's API
 clearSelection(): void {
   this.agGrid.api.deselectAll();
 }

 
}
