import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProgressBarService } from 'src/app/core/services/progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  isLoading: boolean;
  progress: number;

  progressSub: Subscription;

  constructor(private progressBarService: ProgressBarService) {}

  ngOnInit(): void {
    this.progressSub = this.progressBarService.progress.subscribe(
      (progress) => {
        if (progress !== 0) {
          this.isLoading = true;
        }

        if (progress === 100) {
          this.isLoading = false;
          this.progressBarService.setProgress(0);
        }
        this.progress = progress;
      }
    );
  }
}
