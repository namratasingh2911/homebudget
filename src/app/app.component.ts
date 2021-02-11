import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEntryComponent } from './components/add-entry/add-entry.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog:MatDialog){}
  title = 'homebudget';

  createEntry(){
    const dialogRef = this.dialog.open(AddEntryComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}
