import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditContactsComponent } from './add-edit-contacts.component';


describe('AddEditContactsComponent', () => {
  let component: AddEditContactsComponent;
  let fixture: ComponentFixture<AddEditContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
