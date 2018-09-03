/**
 * Api documentation example
 *
 * @see https://swapi.co/documentation#root
 */


// https://github.com/sasadjolic/dom-terminal
// https://github.com/AleksandarPredic/dom-terminal
import Terminal from "../vendor/terminal/terminal-1.0.2.min";
import info from './info';

const terminal = new Terminal('terminal', {}, {
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
          <li>project/{id} (All details for single project.  Example: project/1)</li>
          <li>More help available <a class="external" href="#" target="_blank">here</a></li>
        </ul>`;
    }
    else if('basic' === request) {
      return info.getBasicInfo();
    }
    else if('projects' === request) {
      return info.getProjects();
    }
    else if(-1 !== request.indexOf('project/')) {
      return info.getProject(parseInt(cmd.replace('project/', '')));
    }
    else {
      return '404. Unknown command. Type help for info about available commands';
    }

  }
});



