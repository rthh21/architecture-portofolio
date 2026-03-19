import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIndividual } from './project-individual';

describe('ProjectIndividual', () => {
  let component: ProjectIndividual;
  let fixture: ComponentFixture<ProjectIndividual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectIndividual],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectIndividual);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
