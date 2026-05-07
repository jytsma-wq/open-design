import { describe, expect, it } from 'vitest';
import nextConfig from '../../next.config';
import * as spaShellRoute from '../../app/[[...slug]]/page';

describe('SPA shell export route', () => {
  it('stays compatible with static export builds', () => {
    expect(nextConfig.output).toBe('export');
    expect(spaShellRoute.dynamicParams).not.toBe(true);
    expect(spaShellRoute.generateStaticParams()).toEqual([{ slug: [] }]);
  });
});
