import { Component, Input } from '@angular/core';
import { JobListing } from '../../models/JobListing';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-listing',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.css'
})
export class JobListingComponent {
  @Input({required: true}) jobListing! : JobListing;
}
