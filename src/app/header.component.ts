import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'wd-app-header',
  template: `
        <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Weather App</a>
        </div>
      </div>
    </nav>
        `
})
export class HeaderComponent { }
