import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() config: any[] = [];
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup(): FormGroup {

    const group = this.fb.group({});
    this.config.forEach(control => {     
      group.addControl(control.name, this.fb.control('', control.validators));
    });
    
    return group;
  }

  onSubmit(): void {
    
    this.submitted.emit(this.form.value)
  }

}
