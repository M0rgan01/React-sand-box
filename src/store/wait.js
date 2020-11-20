
// fake async call
export default function wait(duration = 1000) {
  return new Promise(resolve => {
    window.setTimeout(() => {
      resolve({});
    }, duration);
  });
}