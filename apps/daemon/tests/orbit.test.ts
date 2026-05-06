import path from 'node:path';

import { describe, expect, it } from 'vitest';

import { buildOrbitPrompt, type OrbitTemplateSelection } from '../src/orbit.js';

describe('buildOrbitPrompt', () => {
  it('embeds selected Orbit template instructions and staged side-file guidance', () => {
    const template: OrbitTemplateSelection = {
      id: 'orbit-general',
      name: 'orbit-general',
      examplePrompt: 'Render the editorial bento dashboard.',
      dir: path.join('/repo', 'skills', 'orbit-general'),
    };

    const prompt = buildOrbitPrompt(new Date('2026-05-06T15:32:52.361Z'), template);

    expect(prompt).toContain('Skill id: orbit-general');
    expect(prompt).toContain('Staged root: .od-skills/orbit-general/');
    expect(prompt).toContain('read ".od-skills/orbit-general/SKILL.md"');
    expect(prompt).toContain('".od-skills/orbit-general/example.html"');
    expect(prompt).toContain('visual/domain guidance');
    expect(prompt).not.toContain('Selected template skill instructions:');
    expect(prompt).toContain('Selected template example prompt:');
    expect(prompt).toContain('Render the editorial bento dashboard.');
  });
});
