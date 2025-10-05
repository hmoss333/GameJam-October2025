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
        new TextboxQuestion({
        key: 'angularjs',
        label: 'Please explain in detail how AngularJS has affected your personal life',
        value: '',
        required: true,
        order: 7,
        level: 3,
      }),
      new TextboxQuestion({
        key: 'confession',
        label: 'Have you ever been convicted of a crime?',
        value: '',
        required: true,
        order: 8,
        level: 3,
      }),
      new TextboxQuestion({
        key: 'justAsking',
        label: 'Is your mom single?',
        value: '',
        required: true,
        order: 9,
        level: 3,
      }),
      new TextboxQuestion({
        key: 'esperanto',
        label: 'Are you fluent in Esperanto?',
        value: '',
        required: true,
        order: 10,
        level: 3,
      }),
      new TextboxQuestion({
        key: 'worm',
        label: 'Would you still love me if I was a worm?',
        value: '',
        required: true,
        order: 11,
        level: 4,
      }),
      new TextboxQuestion({
        key: 'ex',
        label: 'Did your ex break up with you, or was it ‘mutual’?',
        value: '',
        required: true,
        order: 12,
        level: 4,
      }),
      new TextboxQuestion({
        key: 'tree',
        label: 'If you were a tree, what kind of tree would you be?',
        value: '',
        required: true,
        order: 13,
        level: 4,
      }),
      new TextboxQuestion({
        key: 'coinflip',
        label: 'What’s the most you’ve ever lost on a coin flip?',
        value: '',
        required: true,
        order: 14,
        level: 4,
      }),
      new TextboxQuestion({
        key: 'treason',
        label: 'Are you comfortable with committing some light treason?',
        value: '',
        required: true,
        order: 15,
        level: 5,
      }),
      new TextboxQuestion({
        key: 'klondike',
        label: 'What would you do for a Klondike Bar?',
        value: '',
        required: true,
        order: 16,
        level: 5,
      }),
      new TextboxQuestion({
        key: 'cat',
        label: 'Does your cat like you?',
        value: '',
        required: true,
        order: 17,
        level: 5,
      }),
      new DropdownQuestion({
        key: 'kids',
        label: 'If it was a choice between you and your spouse, who would your kids pick?',
        options: [
          {key: 'you', value: 'You'},
          {key: 'spouse', value: 'Your spouse'},
        ],
        order: 18,
        level: 5,
        required: true,
      }),
      new TextboxQuestion({
        key: 'duolingo',
        label: 'What is your longest Duo Lingo streak?',
        type: 'number',
        order: 19,
        level: 6,
        required: true,
      }),
      new TextboxQuestion({
        key: 'enough',
        label: 'Describe a time you did your best and why it was not enough',
        value: '',
        required: true,
        order: 20,
        level: 6,
      }),
      new TextboxQuestion({
        key: 'cop',
        label: 'Are you a cop? Because you have to tell us if you are a cop',
        value: '',
        required: true,
        order: 21,
        level: 6,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}