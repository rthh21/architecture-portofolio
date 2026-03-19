import { Component, OnInit} from '@angular/core';
import { ProjectService } from '../../services/project';
import { Project } from '../../models/project';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [RouterLink],
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