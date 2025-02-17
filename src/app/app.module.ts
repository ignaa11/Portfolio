import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    StudiesComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
