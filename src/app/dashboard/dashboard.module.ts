// dashboard/dashboard.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NewsService } from '../services/news.service';
// import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
  ],
  providers: [NewsService],
})
export class DashboardModule {}
