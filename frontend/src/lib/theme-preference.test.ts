import test from 'node:test'
import assert from 'node:assert/strict'

import { normalizeThemePreference } from './theme-preference.ts'

test('normalizes missing and invalid preferences to system', () => {
  assert.equal(normalizeThemePreference(undefined), 'system')
  assert.equal(normalizeThemePreference('solarized'), 'system')
})

test('preserves supported explicit preferences', () => {
  assert.equal(normalizeThemePreference('light'), 'light')
  assert.equal(normalizeThemePreference('dark'), 'dark')
  assert.equal(normalizeThemePreference('system'), 'system')
})
