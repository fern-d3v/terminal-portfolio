import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  try {
    if (config.ascii === 'fern_d3v') {
      const res = await fetch('/assets/ascii.html');
      const ascii = await res.text();

      const override = `<style>
        .ascii{ font-size:3.6px !important; line-height:1.2 !important; }
        .ascii{ border:1px solid #f95678 !important; background: transparent !important; }
      </style>`;

      return String.raw`
        <div style="display:flex; align-items:flex-start; gap:2ch">
          ${override}
          <span>${ascii}</span>
          <div style="white-space:pre; line-height:1.2">
-----------
 ABOUT
 ${config.name}
 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
󱕰 ${config.description}
󰔟 ${config.currently}
 ${config.skills.join(", ")}
 ${config["next_up"].join(", ")}
󱉟 ${config.hobbies.join(", ")}
󰓉 Fun fact: ${config.fun_fact}

-----------
󰖸 CONTACT
󱡰 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">github - ${config.social.github}</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin - ${config.social.linkedin}</a></u>
 <u><a href="https://x.com/${config.social.twitter}" target="_blank">twitter - ${config.social.twitter}</a></u>

-----------
 DONATE
 <u><a href="${config.donate_urls['ko-fi']}" target="_blank">ko-fi - ${config.donate_urls['ko-fi']}</a></u>
          </div>
        </div>
      `;
    }

    // Fallback minimal output
    return `
${config.name}
GitHub: https://github.com/${config.social.github}
Repo: ${config.repo}
Email: ${config.email}
`;
  } catch (e) {
    return 'Failed to load summary.';
  }
};

export default sumfetch;
