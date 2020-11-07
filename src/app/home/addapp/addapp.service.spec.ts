import { TestBed } from '@angular/core/testing';

import { AddappService } from './addapp.service';

describe('AddappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddappService = TestBed.get(AddappService);
    expect(service).toBeTruthy();
  });
});
