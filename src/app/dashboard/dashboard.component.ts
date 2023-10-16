import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsItem } from './newsItem.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('slide', [
      state('opened', style({ transform: 'translateX(0)' })),
      state('closed', style({ transform: 'translateX(100%)' })),
      transition('opened <=> closed', animate('300ms ease-in-out')),
      transition('closed <=> opened', animate('300ms ease-in-out')),
    ]),
  ],
})


export class DashboardComponent implements OnInit {

  public showDrawer: boolean = false;
  public newsItems: NewsItem[] = [];
  public newsData: NewsItem[] = [];
  public storyA: number = 0;
  public storyB: number = 3;
  openDrawers: boolean[] = [];

  constructor(private newsService: NewsService) { }

  
  
  ngOnInit(): void {
    this.getNewsHeadlines();
  }

  public getNewsHeadlines(): void {
    this.newsService.getNewsHeadlines().subscribe((data: { results: NewsItem[] }) => {
      this.newsItems = data.results;
      this.newsData = data.results.slice(this.storyA,this.storyB);
      console.log(this.newsData);
    });
  }

    public showNextStory(): void {
      if(this.storyB <= this.newsItems.length){
        this.storyA++;
        this.storyB++;
      this.newsData = this.newsItems.slice(this.storyA,this.storyB);
      }else{
        return;
      }

    }

    public showPreviousStory(): void {
      if(this.storyA >= 0){
        this.storyA--;
        this.storyB--;
      this.newsData = this.newsItems.slice(this.storyA,this.storyB);
      }else{
        return
      }
    }

  

  public   openDrawer(index: number): void {
      // Toggle the visibility of the drawer for the clicked item
      this.openDrawers[index] = !this.openDrawers[index];
    }
  }
  


  





