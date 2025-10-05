import { Component, inject, Input, OnInit } from '@angular/core';
import { JobListing } from '../../models/JobListing';
import { ActivatedRoute } from '@angular/router';
import { LISTINGS } from '../../job-listings';
import { PhaserCaptchaComponent } from '../../components/phaser-captcha/phaser-captcha.component';
import { NgIf, CommonModule, AsyncPipe } from '@angular/common';
import { FormComponent } from '../../components/form/form.component';
import { QuestionBase } from '../../models/QuestionBase';
import { QuestionService } from '../../service/question.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-application',
  imports: [PhaserCaptchaComponent, FormComponent, NgIf, CommonModule, AsyncPipe, FormComponent],
  providers: [QuestionService],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.css'
})
export class JobApplicationComponent implements OnInit{
  questions$: Observable<QuestionBase<string>[]> = inject(QuestionService).getQuestions();
  job : JobListing | undefined;
  showCaptcha: boolean = false;
  constructor(
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getJob();
  }

  getJob(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    LISTINGS.map(j => {
      if (j.id == id) {
        this.job = j;
      }
    });
  }
}
