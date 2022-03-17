import { TestBed } from '@angular/core/testing';
import { ProgressBarService } from './progress-bar.service';

describe('ProgressBarService', () => {
  let service: ProgressBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ProgressBarService] });
    service = TestBed.inject(ProgressBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('isLoading should be false', () => {
    service.isLoading.subscribe((value) => {
      expect(value).toBeFalse();
    });
  });

  it('isLoading should be true after being set to true', () => {
    service.setIsLoading(false);

    service.isLoading.subscribe((value) => {
      expect(value).toBeFalse();
    });
  });

  it('Progress should be 0', () => {
    service.progress.subscribe((value) => {
      expect(value).toBe(0);
    });
  });

  it('Progress should be 100 after beign set to 100', () => {
    service.setProgress(100);

    service.progress.subscribe((value) => {
      expect(value).toBe(100);
    });
  });
});
