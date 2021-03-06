/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { readFileSync } from 'fs';
import { basename, resolve } from 'path';
import * as snapshot from 'snap-shot-it';

import { GitHubRelease } from '../src/github-release';

const fixturesPath = './test/fixtures';

describe('GitHubRelease', () => {
  describe('extractLatestReleaseNotes', () => {
    it('handles CHANGELOG with old and new format entries', () => {
      const changelogContent = readFileSync(
        resolve(fixturesPath, './CHANGELOG-old-new.md'),
        'utf8'
      ).replace(/\r\n/g, '\n');
      const latestReleaseNotes = GitHubRelease.extractLatestReleaseNotes(
        changelogContent,
        'v1.0.0'
      );
      snapshot(latestReleaseNotes);
    });

    it('handles CHANGELOG with old format entries', () => {
      const changelogContent = readFileSync(
        resolve(fixturesPath, './CHANGELOG-old.md'),
        'utf8'
      ).replace(/\r\n/g, '\n');
      const latestReleaseNotes = GitHubRelease.extractLatestReleaseNotes(
        changelogContent,
        'v2.1.0'
      );
      snapshot(latestReleaseNotes);
    });

    it('handles CHANGELOG with new format entries', () => {
      const changelogContent = readFileSync(
        resolve(fixturesPath, './CHANGELOG-new.md'),
        'utf8'
      ).replace(/\r\n/g, '\n');
      const latestReleaseNotes = GitHubRelease.extractLatestReleaseNotes(
        changelogContent,
        'v1.2.0'
      );
      snapshot(latestReleaseNotes);
    });

    // see: https://github.com/googleapis/release-please/issues/140
    it('extracts appropriate release notes when prior release is patch', () => {
      const changelogContent = readFileSync(
        resolve(fixturesPath, './CHANGELOG-bug-140.md'),
        'utf8'
      ).replace(/\r\n/g, '\n');
      const latestReleaseNotes = GitHubRelease.extractLatestReleaseNotes(
        changelogContent,
        'v5.0.0'
      );
      snapshot(latestReleaseNotes);
    });

    describe('php-yoshi', () => {
      it('extracts appropriate release notes, when multiple packages updated', () => {
        const changelogContent = readFileSync(
          resolve(fixturesPath, './CHANGELOG-php-yoshi.md'),
          'utf8'
        ).replace(/\r\n/g, '\n');
        const latestReleaseNotes = GitHubRelease.extractLatestReleaseNotes(
          changelogContent,
          'v0.105.0'
        );
        snapshot(latestReleaseNotes);
      });
    });
  });
});
