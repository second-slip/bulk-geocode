import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkRequest } from './bulk-request';

describe('BulkRequest', () => {
  let component: BulkRequest;
  let fixture: ComponentFixture<BulkRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
