import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MenuItem { label: string; path: string; }

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <header class="header">
      <div class="brand">
        <img src="assets/KPMGLOGO.png" alt="KPMG" class="logo" />
        <span class="vline"></span>
        <span class="product">Access Management</span>
      </div>
    </header>

    <nav class="tabbar">

      <div class="tabs desktop-menu">
        <a *ngFor="let item of menuItems"
           class="tab"
           [routerLink]="item.path"
           routerLinkActive="active"
           [routerLinkActiveOptions]="{ exact: true }">
          {{ item.label }}
        </a>
      </div>

      <button class="apps mobile-menu-btn" (click)="toggleMobile()">
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path stroke="#4b5563" stroke-width="2" fill="none"
          d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>

    <div class="scrim" *ngIf="mobileOpen" (click)="closeMobile()"></div>

    <aside class="drawer" [class.open]="mobileOpen">
      <a *ngFor="let item of menuItems"
         class="drawer-link"
         [routerLink]="item.path"
         routerLinkActive="active"
         (click)="closeMobile()">
        {{ item.label }}
      </a>
    </aside>

    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    :host {
      display:block;
      background:#fff;
      color:#111827;
      font-family:'Segoe UI',Roboto,system-ui,-apple-system,Arial,sans-serif;
    }

  
    .header {
      background:#1f1f1f;
      color:#fff;
      padding:18px 28px;
      border-radius:10px 10px 0 0;
    }
    .brand { display:flex; align-items:center; gap:14px; }
    .logo { height:46px; width:auto; }
    .vline { width:1px; height:34px; background:rgba(255,255,255,.4); }
    .product { font-size:26px; font-weight:700; }

    .tabbar {
      background:#fff;
      border-bottom:1px solid #e6e6e6;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 20px;
    }

    .tabs {
      display:flex;
      align-items:center;
      gap:36px;
      height:64px;
      font-size:18px;
      font-weight:600;
    }

    .tab {
      text-decoration:none;
      color:#2a2f36;
      padding-bottom:10px;
      border-bottom:3px solid transparent;
      transition:.2s;
      white-space:nowrap;
    }
    .tab:hover { color:#000; }
    .tab.active {
      color:#000;
      font-weight:700;
      border-bottom-color:#000;
    }

    .mobile-menu-btn {
      border:0;
      background:transparent;
      cursor:pointer;
      display:none;
      padding:10px;
    }

    .scrim {
      position:fixed;
      inset:0;
      background:rgba(0,0,0,.3);
      z-index:20;
    }

    .drawer {
      position:fixed;
      top:0; left:-260px; bottom:0;
      width:260px;
      background:#fff;
      box-shadow:2px 0 12px rgba(0,0,0,.15);
      padding:84px 16px;
      transition:.25s ease;
      z-index:21;
    }
    .drawer.open { left:0; }

    .drawer-link {
      display:block;
      padding:12px 10px;
      margin-bottom:6px;
      text-decoration:none;
      font-weight:600;
      color:#111827;
      border-radius:6px;
    }
    .drawer-link.active {
      background:#eef2ff;
    }

    .container { padding:24px; }

    @media (max-width: 900px) {
      .desktop-menu { display:none; }
      .mobile-menu-btn { display:inline-flex; }
    }

    @media (min-width: 901px) {
      .drawer, .scrim { display:none !important; }
    }

    @media (max-width:520px) {
      .product { font-size:18px; }
      .logo { height:34px; }
    }
  `]
})
export class AppComponent implements OnInit {
  menuItems: MenuItem[] = [];
  mobileOpen = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<MenuItem[]>('assets/menu.json')
      .subscribe(d => this.menuItems = d);
  }

  toggleMobile() { this.mobileOpen = !this.mobileOpen; }
  closeMobile() { this.mobileOpen = false; }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 900 && this.mobileOpen) this.mobileOpen = false;
  }
}
