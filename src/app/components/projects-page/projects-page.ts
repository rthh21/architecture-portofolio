import { Component } from '@angular/core';
import { ProjectsGrid } from '../projects-grid/projects-grid';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project';
@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectsGrid],
  templateUrl: "./project-page.html",
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {}
