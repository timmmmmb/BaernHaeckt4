import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionOfferComponent } from './region-offer.component';

describe('RegionOfferComponent', () => {
  let component: RegionOfferComponent;
  let fixture: ComponentFixture<RegionOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
