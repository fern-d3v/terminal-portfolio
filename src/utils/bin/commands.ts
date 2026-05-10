// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Salutations! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `
  <div class="about-output">
  <h2 class="text-2xl"><strong>About Me</strong></h2>
  <p>Hey! I'm Rhyn (they/them), though you'll find me online as <strong>ffyrnintheforest</strong>.</p>

  <p>I started my coding journey in June of 2025 and it's been an incredible ride. Currently, I'm diving deep into <strong>computer science</strong>, exploring <strong>game development</strong>, and building <strong>CLI tools</strong>. There's something deeply satisfying about creating things that actually work and solve real problems, and bring joy to others.</p>

  <h2 class="mt-4 text-xl"><strong>What I'm Building</strong></h2>
  <p>I've built several CLI projects that I'm genuinely proud of, and am learning how to make my own programming language</p>

  <h2 class="mt-4 text-xl"><strong>When I'm Not Coding</strong></h2>
  <p>You'll find me absorbed in a fantasy novel (Brandon Sanderson’s Cosmere is my favorite), getting thoroughly challenged by whatever Souls game I'm currently playing, or listening to music (I'm all over the place with metal, K-pop, and dubstep, but honestly I'll vibe with just about anything), or enjoying a TTRPG session. My cat has appointed himself as quality assurance, specializing in keyboard inspections at the most critical moments.</p>

  <p>I really enjoy problem-solving, whether it's debugging complex code, optimizing a character build for a tough Souls boss fight, or helping figure out how to get the party out of whatever chaotic situation we've found ourselves in this week.</p>

  <h2 class="mt-4 text-xl"><strong>Let's Connect</strong></h2>
  <p>Always down to chat with fellow developers, gamers, or really anyone who's into solving cool problems. Feel free to browse my projects or hit me up, I'd love to hear what you're working on.</p>

More about me:
'sumfetch' - short summary.
  </div>`;
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest.
here are the ways you can support my work:
- ☕ <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls['ko-fi']}" target="_blank">ko-fi</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `philosohpical much?`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `it's not kind to snoop in someone's home.`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `where are you going?`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Banner
export const banner = (args?: string[]): string => {
  return `
███████╗███████╗██╗   ██╗██████╗ ███╗   ██╗██╗███╗   ██╗████████╗██╗  ██╗███████╗███████╗ ██████╗ ██████╗ ███████╗███████╗████████╗
██╔════╝██╔════╝╚██╗ ██╔╝██╔══██╗████╗  ██║██║████╗  ██║╚══██╔══╝██║  ██║██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔════╝╚══██╔══╝
█████╗  █████╗   ╚████╔╝ ██████╔╝██╔██╗ ██║██║██╔██╗ ██║   ██║   ███████║█████╗  █████╗  ██║   ██║██████╔╝█████╗  ███████╗   ██║   
██╔══╝  ██╔══╝    ╚██╔╝  ██╔══██╗██║╚██╗██║██║██║╚██╗██║   ██║   ██╔══██║██╔══╝  ██╔══╝  ██║   ██║██╔══██╗██╔══╝  ╚════██║   ██║   
██║     ██║        ██║   ██║  ██║██║ ╚████║██║██║ ╚████║   ██║   ██║  ██║███████╗██║     ╚██████╔╝██║  ██║███████╗███████║   ██║   
╚═╝     ╚═╝        ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
