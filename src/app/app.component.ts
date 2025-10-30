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
      <div class="tabs">
        <button class="apps" (click)="toggleMobile()">
          <svg viewBox="0 0 24 24" width="22" height="22">
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
        </button>

        <a *ngFor="let item of menuItems"
           class="tab"
           [routerLink]="item.path"
           routerLinkActive="active"
           [routerLinkActiveOptions]="{ exact: true }">
          {{ item.label }}
        </a>
      </div>
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
    .logo { height:46px; width:auto; object-fit:contain; }
    .vline { width:1px; height:34px; background:rgba(255,255,255,.4); }
    .product { font-size:26px; font-weight:700; }

    .tabbar { background:#fff; border-bottom:1px solid #e6e6e6; }
    .tabs {
      display:flex; align-items:center; gap:36px;
      height:64px; padding:0 24px;
      font-size:18px; font-weight:600;
      overflow-x:auto; scrollbar-width:thin;
    }
    .tabs::-webkit-scrollbar { height:6px; }
    .tabs::-webkit-scrollbar-thumb { background:#d1d5db; border-radius:4px; }

    .apps {
      border:0; background:transparent;
      padding:0; margin-right:8px;
      display:flex; align-items:center;
      cursor:pointer;
    }
    .apps svg { fill:#9ca3af; }
    .apps:hover svg { fill:#111827; }

    .tab {
      text-decoration:none;
      color:#2a2f36;
      padding-bottom:10px;
      border-bottom:3px solid transparent;
      white-space:nowrap;
      transition:color .2s, border-color .2s;
    }
    .tab:hover { color:#000; }
    .tab.active {
      color:#000;
      font-weight:700;
      border-bottom-color:#000;
    }

    .container { padding:24px; }

    .scrim {
      position:fixed; inset:0;
      background:rgba(0,0,0,.3);
      z-index:20;
    }

    .drawer {
      position:fixed; top:0; left:0; bottom:0;
      width:280px; background:#fff;
      box-shadow:2px 0 12px rgba(0,0,0,.15);
      transform:translateX(-100%);
      transition:transform .25s ease;
      padding:84px 16px 16px;
      z-index:21;
    }
    .drawer.open { transform:translateX(0); }

    .drawer-link {
      display:block; padding:12px 8px; margin-bottom:6px;
      text-decoration:none; color:#111827;
      font-weight:600; border-radius:8px;
    }
    .drawer-link.active {
      background:#eef2ff;
      color:#111827;
    }

    @media (min-width:1440px) {
      .tabs { gap:44px; height:68px; font-size:19px; }
      .product { font-size:28px; }
      .logo { height:50px; }
    }
    @media (max-width:1200px) {
      .tabs { gap:28px; font-size:17px; height:60px; }
      .product { font-size:24px; }
    }
    @media (max-width:992px) {
      .tabs { gap:22px; font-size:16px; height:56px; }
      .product { font-size:22px; }
      .logo { height:42px; }
    }
    @media (max-width:768px) {
      .tabs { gap:18px; font-size:16px; padding:0 16px; height:56px; }
      .product { font-size:20px; }
      .logo { height:38px; }
      .apps { margin-right:4px; }
    }
    @media (max-width:520px) {
      .tabs { gap:16px; font-size:15px; height:52px; }
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
      .subscribe({ next: d => this.menuItems = d, error: () => this.menuItems = [] });
  }

  toggleMobile() { this.mobileOpen = !this.mobileOpen; }
  closeMobile() { this.mobileOpen = false; }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768 && this.mobileOpen)
      this.mobileOpen = false;
  }
}
