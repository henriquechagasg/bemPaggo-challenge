import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProgressBarService } from 'src/app/core/services/progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  progress: number;

  subscriptions: Subscription[] = [];

  constructor(private progressBarService: ProgressBarService) {}

  ngOnInit(): void {
    const isLoadingSub = this.progressBarService.isLoading.subscribe(
      (isLoading) => {
        this.isLoading = isLoading;
      }
    );

    const progressSub = this.progressBarService.progress.subscribe(
      (progress) => {
        this.progress = progress;
      }
    );

    this.subscriptions.push(isLoadingSub, progressSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
