globalThis.startup = {
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  localDate: new Date('2030-01-01T23:00').toISOString(),
};
