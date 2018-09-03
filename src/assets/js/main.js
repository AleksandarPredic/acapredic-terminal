// https://github.com/sasadjolic/dom-terminal
// https://github.com/AleksandarPredic/dom-terminal
import Terminal from "../vendor/terminal/terminal-1.0.2.min";
import info from './info';

const terminal = new Terminal('terminal', {}, {
  execute: (cmd, args) => {

    if ('clear' === cmd) {
      terminal.clear();
      return '';
    }
    else if('help' === cmd) {
      return `
        Commands: <br />
        <ul>
          <li>help</li>
          <li>clear</li>
          <li>basic (Basic info)</li>
          <li>More help available <a class="external" href="http://github.com/SDA/terminal" target="_blank">here</a></li>
        </ul>`;
    }
    else if('basic' === cmd) {
      return info.getBasicInfo();
    }
    else if('projects' === cmd) {
      return info.getProjects();
    }
    else if(-1 !== cmd.indexOf('project/')) {
      return info.getProject(parseInt(cmd.replace('project/', '')));
    }
    else {
      return '404. Unknown command. Type help for info about available commands';
    }

  }
});



