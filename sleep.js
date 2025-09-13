
export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve("Salom")
    }, ms);
  });
}

