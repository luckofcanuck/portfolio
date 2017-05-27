import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KandjComponent } from './kandj.component';

describe('KandjComponent', () => {
  let component: KandjComponent;
  let fixture: ComponentFixture<KandjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KandjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KandjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
