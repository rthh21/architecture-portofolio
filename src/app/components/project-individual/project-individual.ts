import { Component, inject, input, computed } from '@angular/core'; // Added input, computed
import { ProjectService } from '../../services/project';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-individual',
  standalone: true,
  imports: [], 
  templateUrl: './project-individual.html',
  styleUrl: './project-individual.scss',
})
export class ProjectPage {
  private projectService = inject(ProjectService);
  id = input.required<string>(); 
  project = computed<Project | undefined>(() => {
    const idNum = Number(this.id());
    return this.projectService.getProjectById(idNum);
  });
}