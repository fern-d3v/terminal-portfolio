import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  try {
    if (config.ascii === 'fern_d3v') {
      const res = await fetch('/assets/ascii.html');
      const ascii = await res.text();

      return String.raw`
        <div class="sumfetch-block">
          <span>${ascii}</span>
          <div class="sumfetch-content">
            <div class="sumfetch-row"><span class="icon"></span><span class="sumfetch-label">ABOUT</span></div>
            <div class="sumfetch-row"><span class="icon"></span><span class="sumfetch-label">${config.name}</span></div>
            <div class="sumfetch-row"><span class="icon"></span><span class="sumfetch-label"><u><a href="${config.repo}" target="_blank">Github repo</a></u></span></div>
            <div class="sumfetch-row"><span class="icon">󱕰</span><span class="description-block">${config.description}</span></div>
            <div class="sumfetch-row"><span class="icon"></span><span class="description-block"><strong>Currently</strong>: ${config.currently}</span></div>
            <div class="sumfetch-row"><span class="icon"></span><span class="sumfetch-label"><strong>Skills</strong>: ${config.skills.map((skill) => {
              const parts = skill.split(' ');
              if (parts.length > 1) {
                return `${parts[0]} <span class=\"icon\">${parts[1]}</span>`;
              }
              return skill;
            }).join(' ')}</span></div>
            <div class="sumfetch-row"><span class="icon"></span><span class="sumfetch-label"><strong>Next Up</strong>: ${config['next_up'].map((up) => {
              const parts = up.split(' ');
              if (parts.length > 1) {
                return `${parts[0]} <span class=\"icon\">${parts[1]}</span>`;
              }
              return up;
            }).join(' ')}</span></div>
            <div class="sumfetch-row"><span class="icon">󱉟</span><span class="sumfetch-label"><strong>Hobbies</strong>: ${config.hobbies.join(', ')}</span></div>
            <div class="sumfetch-row"><span class="icon">󰓉</span><span class="description-block"><strong>Fun fact</strong>: ${config.fun_fact}</span></div>
            <div class="sumfetch-row"><span class="icon">󰖸</span><span class="sumfetch-label"><strong>CONTACT</strong>:</span></div>
            <div class="sumfetch-row"><span class="icon">󱡰</span><span class="sumfetch-label"><u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u></span></div>
            <div class="sumfetch-row"><span class="icon"></span><span class="sumfetch-label"><u><a href="https://github.com/${config.social.github}" target="_blank">github - ${config.social.github}</a></u></span></div>
            <div class="sumfetch-row"><span class="icon"></span><span class="sumfetch-label"><u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin - ${config.social.linkedin}</a></u></span></div>
            <div class="sumfetch-row"><span class="icon"></span><span class="sumfetch-label"><u><a href="https://x.com/${config.social.twitter}" target="_blank">twitter - ${config.social.twitter}</a></u></span></div>
            <div class="sumfetch-row"><span class="icon"></span><span class="sumfetch-label"><strong>DONATE</strong>:</span></div>
            <div class="sumfetch-row"><span class="icon"></span><span class="sumfetch-label"><u><a href="${config.donate_urls['ko-fi']}" target="_blank">ko-fi - ${config.donate_urls['ko-fi']}</a></u></span></div>
          </div>
        </div>
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
