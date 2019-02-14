/**
 * Api documentation example
 *
 * @see https://swapi.co/documentation#root
 *
 * icons: https://simpleicons.org/
 */

/**
 * TODO: Add og and twitter and google tags in index.html
 */


// https://github.com/sasadjolic/dom-terminal
// https://github.com/AleksandarPredic/dom-terminal
import Terminal from "../vendor/dom-terminal/dist/terminal-1.0.2.min";
import info from './info';
import isIOS from './isIos';

const terminal = new Terminal('terminal',
  {
    scrollIntoViewAfter: isIOS.isIOS() ? false : true
  },
  {
  execute: (cmd, args) => {

    let request = cmd.toLowerCase();

    if ('clear' === request) {
      terminal.clear();
      return '';
    }
    else if('help' === request) {
      return `
        <h4>Commands:</h4>
        <h5>Type command and press enter.</h5>
        <ul>
          <li>help</li>
          <li>clear</li>
          <li>basic</li>
          <li>projects</li>
          <li>projects/{id}</li>
          <li>experiences</li>
          <li>experiences/{id}</li>
          <li>education</li>
          <li>skills</li>
          <li>volunteer</li>
          <li>Don't like command prompts? <a class="external" href="https://www.linkedin.com/in/aleksandarpredic" target="_blank" rel="nofollow">visit my LinkedIn profile</a></li>
        </ul>`;
    }
    else if('basic' === request) {
      return info.getBasicInfo();
    }
    else if('projects' === request) {
      return info.getProjects();
    }
    else if(request.includes('projects/')) {
      return info.getProject(parseInt(request.replace('projects/', '')));
    }
    else if('experiences' === request) {
      return info.getExperiences();
    }
    else if(request.includes('experiences/')) {
      return info.getExperience(parseInt(request.replace('experiences/', '')));
    }
    else if('education' === request) {
      return info.getEducation();
    }
    else if('skills' === request) {
      return info.getSkills();
    }
    else if('volunteer' === request) {
      return info.getVolunteer();
    }
    else {
      return '404. Unknown command. Type help for info about available commands';
    }

  }
});



