import { Component, OnInit} from '@angular/core';
import { ProjectService } from '../../services/project';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [],
  templateUrl: './projects-grid.html',
  styleUrls: ['./projects-grid.scss'],
})

export class ProjectsGrid implements OnInit {
  myProjects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.myProjects = this.projectService.getProjects();
  }
}