import { Component } from '@angular/core';
import { JobListingComponent } from '../../components/job-listing/job-listing.component';
import { NgFor } from '@angular/common';
import { LISTINGS } from '../../job-listings';

@Component({
  selector: 'app-listings-page',
  imports: [NgFor, JobListingComponent],
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css'
})
export class ListingsPageComponent {
    listings = LISTINGS;
}
