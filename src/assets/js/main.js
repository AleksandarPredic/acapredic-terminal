/**
 * Api documentation example
 *
 * @see https://swapi.co/documentation#root
 */


// https://github.com/sasadjolic/dom-terminal
// https://github.com/AleksandarPredic/dom-terminal
import Terminal from "../vendor/terminal/terminal";
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
        <ul>
          <li>help</li>
          <li>clear</li>
          <li>basic (Basic info)</li>
          <li>projects</li>
          <li>projects/{id} (All details for single project.  Example: projects/1)</li>
          <li>More help available <a class="external" href="#" target="_blank">here</a></li>
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
    else {
      return '404. Unknown command. Type help for info about available commands';
    }

  }
});



