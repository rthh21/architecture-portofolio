import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})

export class ProjectService {
  
  private thumbnailUrl = '/home-project-tumbnails/project-';
  private projects: Project[] = [
    { id: 1, name: 'My Project', img: this.thumbnailUrl + '1.jpg'},
    { id: 2, name: 'My Project 2', img: this.thumbnailUrl + '2.jpg' },
    { id: 3, name: 'My Project 3', img: this.thumbnailUrl + '3.jpg' },
    { id: 4, name: 'My Project 4', img: this.thumbnailUrl + '4.jpg' }
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }

  addProject(newProject: Project): void {
    this.projects.push(newProject);
  }
  
  getProjectId(index: number, project: Project): number {
    return project.id;
  }
}
