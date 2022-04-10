async function sleep(t: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}

export default sleep;
