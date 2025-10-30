import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
    standalone: false,

  template: `
    <div class="subheader"><h1 class="page-title">Dashboard</h1></div>
    <div class="row">
      <div class="card">
        <div class="searchbar">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <input placeholder="Search" />
          <div class="mic">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10a7 7 0 0 1-14 0"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 style="margin:0 0 8px; font-size:22px;">Exchange Shape</h2>
        <p style="color:var(--muted); margin:0;">(Put your list/table here)</p>
      </div>
    </div>
  `
})
export class DashboardComponent {}
