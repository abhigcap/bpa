import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { GetFilteredBatchesPipe } from '../../pipes/get-filtered-batches.pipe';

@Component({
  selector: 'app-batch-performance-list',
  templateUrl: './batch-performance-list.component.html',
  styleUrls: ['./batch-performance-list.component.scss'],
  providers: [GetFilteredBatchesPipe]
})
export class BatchPerformanceListComponent implements OnInit {

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

 batchDetails: any = [];
 batchDetailsDisplay: any = [];

 public tabList = [
  { tabName: "Batches"},
  { tabName: "Recipes"},
  { tabName: "Equipment"}
];
public selectedTab = 'Batches';

public selectTab(tabName: string) {
  this.selectedTab = tabName;
}

 // For accessing the Grid's API
 @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

 constructor(private http: HttpClient, private getFilteredBatches: GetFilteredBatchesPipe) { }

 // Example load data from sever
 onGridReady(params: GridReadyEvent) {
   this.rowData$ = this.http
     .get<any[]>('https://63f5b2fe9daf59d1ad798b1a.mockapi.io/api/v1/GetBatchDetails');
 }

 ngOnInit() {
  this.getBatchDetails();
 }

 getBatchDetails() {
  this.http.get<any[]>('https://63f5b2fe9daf59d1ad798b1a.mockapi.io/api/v1/GetBatchDetails').subscribe(
    response => { 
      console.log(response);
      this.batchDetails = this.batchDetailsDisplay = response;
    }
    );
  }

  onApplyBatchFilters(batchID: string, batchFormation: string, batchStatus: string) {
      this.batchDetailsDisplay = this.getFilteredBatches.transform(this.batchDetails, batchID,  batchFormation, batchStatus);
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
