import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { ContactsService } from '../../services/contacts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'add-edit-contacts',
  templateUrl: './add-edit-contacts.component.html',
  styleUrls: ['./add-edit-contacts.component.scss']
})
export class AddEditContactsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: ContactsService,
    private alertService: AlertService) { }

  showMore = false;
  value = ''
  loading = false;
  lable = ''
  id!: string;
  isAddMode!: boolean;
  submitted = false;
  data: any;
  form!: FormGroup;

  buildForm() {
    this.form = this.formBuilder.group({
      // uploadImg: [''],
      // name: [''],
      // surname: [''],
      // company: [''],
      // jobTitle: [''],
      // email: [''],
      // lable: [''],
      // cellPhone: [''],
      // birthday: [''],
      // notes: [''],
      // relationship: [''],
      // chat: [''],
      // internetCell: [''],
      // customField: [''],
      postId: [''],
      id: [''],
      name: [''],
      email: [''],
    });

  }

  ngOnInit(): any {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.buildForm();

    if (!this.isAddMode) {
 
      this.service.getById(this.id)
        .pipe(first())
        .subscribe(x => this.form.patchValue(x));
    }

  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  private createUser() {
    this.service.create(this.form.value)
      .pipe(first())
      .subscribe(() => {
        this.alertService.success('User added', { keepAfterRouteChange: true });
        this.router.navigate(['../'], { relativeTo: this.route });
      })
      .add(() => this.loading = false);
  }

  private updateUser() {
    this.service.update(this.id, this.form.value)
      .pipe(first())
      .subscribe(() => {
        this.alertService.success('User updated', { keepAfterRouteChange: true });
        this.router.navigate(['../../'], { relativeTo: this.route });
      })
      .add(() => this.loading = false);
  }

  showMoreInput() {
    this.showMore = !this.showMore;
  }

}
