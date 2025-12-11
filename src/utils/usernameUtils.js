const USERNAME_REGEX = /^[a-z0-9._]{3,30}$/;

export function normalizeUsername(username) {
  if (!username) return null;
  return username.trim().toLowerCase();
}

export function validateUsername(username) {
  const normalized = normalizeUsername(username);
  if (!normalized || !USERNAME_REGEX.test(normalized)) {
    return null;
  }
  return normalized;
}
