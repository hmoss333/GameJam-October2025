import { Component, Input, OnInit } from '@angular/core';
import { JobListing } from '../../interfaces/JobListing';
import { ActivatedRoute } from '@angular/router';
import { LISTINGS } from '../../job-listings';
import { PhaserCaptchaComponent } from '../../components/phaser-captcha/phaser-captcha.component';

@Component({
  selector: 'app-job-application',
  imports: [PhaserCaptchaComponent],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.css'
})
export class JobApplicationComponent implements OnInit{
  job : JobListing | undefined;
  constructor(
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getJob();
  }

  getJob(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    LISTINGS.map(j => {
      if (j.id = id) {
        this.job = j;
      }
    });
  }
}
