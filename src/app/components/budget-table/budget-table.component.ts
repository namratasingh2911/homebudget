import {Component} from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

export interface BudgetTableElement {
  task: string;
  position: number;
  amount: number;
  type: string;
  status : string;
}

const Budget_Data: BudgetTableElement[] = [
  {position: 1, task: 'bring vegetable', type: 'grocery', amount: 123,status : 'debit'},
  {position: 2, task: 'shopping', type: 'grocery', amount: 456,status : 'debit'},
  {position: 3, task: 'bring vegetable', type: 'grocery', amount: 123,status : 'debit'},
  {position: 4, task: 'shopping', type: 'grocery', amount: 456,status : 'debit'},
  {position: 5, task: 'bring vegetable', type: 'grocery', amount: 123,status : 'debit'},
  {position: 6, task: 'shopping', type: 'grocery', amount: 456,status : 'debit'},
  {position: 6, task: 'salary', type: 'grocery', amount: 10000,status : 'credit'},
  {position: 6, task: 'salary', type: 'grocery', amount: 20000,status : 'credit'},
  
];

/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
@Component({
  selector: 'app-budget-table',
  styleUrls: ['budget-table.component.css'],
  templateUrl: 'budget-table.component.html',
})
export class BudgetTableComponent {
  displayedColumns: string[] = ['position', 'task', 'type', 'amount','status'];
  dataSource = Budget_Data;

}