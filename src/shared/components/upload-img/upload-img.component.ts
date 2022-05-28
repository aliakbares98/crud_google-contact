import { ChangeDetectorRef, Component, ElementRef, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadImgComponent),
      multi: true,
    },
  ],
})
export class UploadImgComponent implements ControlValueAccessor {


  constructor(
    public fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) { }

  writeValue(obj: any): void {
    this.imageUrl = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private onChange(_: object) { }
  private onTouched() { }


  /*########################## File Upload ########################*/
  @ViewChild('fileInput') el!: ElementRef;

  imageUrl: any = "../../assets/img/user.jpg";
  editFile: boolean = true;
  removeUpload: boolean = false;
  uploadFile(event: any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.editFile = false;
        this.removeUpload = true;
        this.onChange(this.imageUrl)
      }
      this.cd.markForCheck();
    }
  }

}
