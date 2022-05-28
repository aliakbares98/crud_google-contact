import { first } from 'rxjs';
import { User } from '../../model/user';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { ConfirmationDialogComponent } from 'src/shared/components/confirmation-dialog/confirmation-dialog.component';





@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource: User[]
  selection = new SelectionModel<User>(true, []);
  users!: User[];
  displayedColumns: string[] = ['select', 'postId', 'name', 'email', 'jobTitle', 'lable', 'action'];

  constructor(
    private userService: ContactsService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.dataSource = data;
        console.log(data);
      }
    });
  }

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    // const numRows = this.dataSource.data.length;
    // return numSelected === numRows;
    return true
  }

  masterToggle() {
    this.selection.clear();
    return;
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: User): any {}

  filterGrid(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogRemove(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      const user = this.users.find(x => x.id === id);
      if (!user) return;
      this.userService.delete(id)
        .pipe(first())
      this.dataSource = this.dataSource.filter((u) => u.id !== id);

    });
  }

}
