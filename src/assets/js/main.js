// https://github.com/sasadjolic/dom-terminal
// https://github.com/AleksandarPredic/dom-terminal
import Terminal from '../vendor/terminal/terminal-1.0.2.min';
import Info from './info';

// Convert the 'terminal' DOM element into a live terminal.
// This example defines several custom commands for the terminal.
const MyInfo = new Info();
const terminal = new Terminal('terminal', {}, {
    execute: (cmd, args) => {
        switch (cmd) {
            case 'clear':
                terminal.clear();
                return '';

            case 'name':
                return MyInfo.getName();

            case 'help':
                return 'Commands: clear, help, theme, ver or version<br>More help available <a class="external" href="http://github.com/SDA/terminal" target="_blank">here</a>';

            case 'theme':
                if (args && args[0]) {
                    if (args.length > 1) return 'Too many arguments';
                    else if (args[0].match(/^interlaced|modern|white$/)) { terminal.setTheme(args[0]); return ''; }
                    else return 'Invalid theme';
                }
                return terminal.getTheme();

            case 'ver':
            case 'version':
                return '1.0.0';

            default:
                return 'Unknown command. Type help for info about available commands';
            //return false;
        };
    }
});
