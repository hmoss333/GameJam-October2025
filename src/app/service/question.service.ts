import {Injectable} from '@angular/core';
import {DropdownQuestion} from '../models/QuestionDropDown';
import {QuestionBase} from '../models/QuestionBase';
import {TextboxQuestion} from '../models/QuestionTextBox';
import {of} from 'rxjs';
@Injectable()
export class QuestionService {
  // TODO: get from a remote source of question metadata
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: '',
        required: true,
        order: 1,
        level: 1,
      }),
        new TextboxQuestion({
        key: 'lastName',
        label: 'Last name',
        value: '',
        required: true,
        order: 2,
        level: 1,
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 3,
        level: 1,
      }),
      new TextboxQuestion({
        key: 'desiredSalary',
        label: 'What is your expected Salary?',
        type: 'number',
        order: 4,
        level: 2,
        required: true,
      }),
      new DropdownQuestion({
        key: 'favoriteOS',
        label: 'Favorite Operating System',
        options: [
          {key: 'mac', value: 'Mac'},
          {key: 'windows', value: 'Windows'},
          {key: 'gnulinux', value: 'GNU/Linux'},
          {key: 'FreeBSD', value: 'FreeBSD'},
        ],
        order: 5,
        level: 2,
      }),
      new DropdownQuestion({
        key: 'excuse',
        label: 'Why are you looking for a new role?',
        options: [
          {key: 'failure', value: 'Currently Unemployed'},
          {key: 'dissatisfaction', value: 'Avoiding a Crash Out at Current Company'},
          {key: 'curiosity', value: 'Boredom'},
          {key: 'compensation', value: 'I can\'t afford my Warhammer hobby'},
          {key: 'other', value: 'Other'},
        ],
        order: 6,
        level: 3,
        required: true,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}