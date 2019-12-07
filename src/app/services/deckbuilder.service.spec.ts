import { TestBed } from '@angular/core/testing';

import { DeckbuilderService } from './deckbuilder.service';

describe('DeckbuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeckbuilderService = TestBed.get(DeckbuilderService);
    expect(service).toBeTruthy();
  });
});
