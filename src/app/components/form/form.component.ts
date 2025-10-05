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
import {Component, computed, inject, Input, input, model} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormQuestionComponent} from '../dynamic-form-question/dynamic-form-question.component';
import {QuestionBase} from '../../models/QuestionBase';
import {QuestionControlService} from '../../service/question-control.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [QuestionControlService],
  imports: [DynamicFormQuestionComponent, ReactiveFormsModule],
})
export class FormComponent {
  constructor(
    private route: ActivatedRoute
  ) {}
  captcha = model<boolean>(false);
  level : integer = 1;
  private readonly qcs = inject(QuestionControlService);
  readonly questions = input<QuestionBase<string>[] | null>([]);
  readonly form = computed<FormGroup>(() =>
    this.qcs.toFormGroup(this.questions() as QuestionBase<string>[]),
  );
  payLoad = '';

  isValid() {
    let validity = true;
    this.questions()?.filter(q => q.level <= this.level).forEach(q => {
      if (this.form().controls[q.key]?.errors != null) {
        validity =  false;
      }
    });
    return validity;
  }
  onSubmit() {
    console.log(this.form());
    console.log(this.questions())
    if (this.level > Number(this.route.snapshot.paramMap.get('id'))){
      this.captcha.update(currentValue => !currentValue);
    } else {
      this.level += 1;
    }
  }
}
