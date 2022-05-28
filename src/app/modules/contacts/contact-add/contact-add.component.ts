import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class AddEditContactsComponent implements OnInit {


  ngOnInit(): void {
  }
  value = '';
  email = '';
  lable = ''
  showMore = false;

  form!: FormGroup;
  constructor() { }



  clearData() {
    this.email = '';
    this.lable = '';
  }
  showMoreInput() {
    this.showMore = !this.showMore;
  }

  onSubmit() {

  }
}
