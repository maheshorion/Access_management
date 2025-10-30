import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <header class="header">
      <div class="brand">
        <div class="logo-container">
          <img src="assets/KPMGLOGO.png" alt="KPMG" class="logo" />
        </div>
        <span class="divider"></span>
        <span class="product">Access Management</span>
      </div>
    </header>

    <nav class="tabbar">
      <div class="tabs">
        <span class="apps" aria-label="Apps">
          <svg viewBox="0 0 24 24" width="24" height="24" focusable="false" aria-hidden="true">
            <circle cx="5" cy="5" r="2"></circle>
            <circle cx="12" cy="5" r="2"></circle>
            <circle cx="19" cy="5" r="2"></circle>
            <circle cx="5" cy="12" r="2"></circle>
            <circle cx="12" cy="12" r="2"></circle>
            <circle cx="19" cy="12" r="2"></circle>
            <circle cx="5" cy="19" r="2"></circle>
            <circle cx="12" cy="19" r="2"></circle>
            <circle cx="19" cy="19" r="2"></circle>
          </svg>
        </span>

        <a routerLink="/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="tab">Dashboard</a>
        <a routerLink="/applications-features" routerLinkActive="active" class="tab">Applications &amp; Features</a>
        <a routerLink="/groups" routerLinkActive="active" class="tab">Groups</a>
        <a routerLink="/roles" routerLinkActive="active" class="tab">Roles</a>
        <a routerLink="/users" routerLinkActive="active" class="tab">Users</a>
        <a routerLink="/templates" routerLinkActive="active" class="tab">Templates</a>
        <a routerLink="/audit-log" routerLinkActive="active" class="tab">Audit Log</a>
      </div>
    </nav>

    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      background: #fff;
      color: #111827;
      font-family: 'Segoe UI', Roboto, system-ui, -apple-system, Arial, sans-serif;
    }

    .header {
      background: #1f1f1f;
      color: #fff;
      padding: 18px 36px;
      display: flex;
      align-items: center;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 18px;
    }

    .logo {
      height: 60px;
      width: auto;
      object-fit: contain;
    }

    .divider {
      width: 1px;
      height: 42px;
      background: rgba(255, 255, 255, 0.4);
    }

    .product {
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 0.4px;
    }

    .tabbar {
      background: #fff;
      border-bottom: 1px solid #e5e7eb;
    }

    .tabs {
      display: flex;
      align-items: center;
      gap: 44px;
      height: 82px;                   
      padding: 0 36px;
    }

    .apps svg {
      fill: #9ca3af;
      transition: fill 0.2s;
    }

    .apps:hover svg {
      fill: #111827;
    }

    .tab {
      text-decoration: none;
      color: #1f2937;
      font-weight: 600;
      font-size: 20px;
      letter-spacing: 0.25px;
      padding-bottom: 14px;
      border-bottom: 4px solid transparent;
      transition: color 0.25s, border-color 0.25s;
    }

    .tab:hover {
      color: #000;
    }


    .tab.active {
      color: #000;
      font-weight: 700;
      border-bottom-color: #000;    
    }

    .container {
      padding: 32px;
    }
  `]
})
export class AppComponent {}
