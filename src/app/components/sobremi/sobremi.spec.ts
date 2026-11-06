import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sobremi } from './sobremi';

describe('Sobremi', () => {
  let component: Sobremi;
  let fixture: ComponentFixture<Sobremi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sobremi],
    }).compileComponents();

    fixture = TestBed.createComponent(Sobremi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
