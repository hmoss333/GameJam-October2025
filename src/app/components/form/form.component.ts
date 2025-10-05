// import { Component, inject, Input } from '@angular/core';
// import { FormArray, FormBuilder, FormGroup, FormControlName, Validators} from '@angular/forms';
// import { JobAppForm } from '../../models/jobAppForm';

// @Component({
//   selector: 'app-form',
//   imports: [],
//   templateUrl: './form.component.html',
//   styleUrl: './form.component.css'
// })
// export class FormComponent {
//   @Input({required: true}) captcha! : boolean;
//   model = new JobAppForm('', '', '', '', '');
// }
import {Component, computed, inject, Input, input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormQuestionComponent} from '../dynamic-form-question/dynamic-form-question.component';
import {QuestionBase} from '../../models/QuestionBase';
import {QuestionControlService} from '../../service/question-control.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [QuestionControlService],
  imports: [DynamicFormQuestionComponent, ReactiveFormsModule],
})
export class FormComponent {
  @Input({required: true}) captcha! : boolean;
  level : integer = 1;
  private readonly qcs = inject(QuestionControlService);
  readonly questions = input<QuestionBase<string>[] | null>([]);
  readonly form = computed<FormGroup>(() =>
    this.qcs.toFormGroup(this.questions() as QuestionBase<string>[]),
  );
  payLoad = '';
  onSubmit() {
    this.level += 1;
    this.form();
    this.payLoad = JSON.stringify(this.form().getRawValue());
  }
}
