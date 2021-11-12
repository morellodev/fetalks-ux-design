export async function wait(delay, value) {
  return new Promise((resolve) => setTimeout(resolve, delay, value));
}
