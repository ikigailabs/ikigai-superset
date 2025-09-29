export function generateUUID(): string {
  return crypto.randomUUID?.() || Math.random().toString(36);
}
