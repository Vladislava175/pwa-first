import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OktaAuthStateService } from '@okta/okta-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularBooksPWA';
  searchForm: FormGroup;
  isAuthenticated: boolean;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public oktaAuth: OktaAuthStateService) {
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    });
  }

  onSearch(): void {
    if (!this.searchForm.valid) { return; }
    this.router.navigate(['search'], { queryParams: {query: this.searchForm.get('search')?.value}});
  }
}
