
import {sleep} from './Timer';

jest.setTimeout('10000');

describe('Timer', () => {

  it('should wait 3 seconds', async () => {
    const t = Date.now();
    await sleep(3);
    expect(Date.now() - t).toBeGreaterThanOrEqual(3000);
  });

  it('should wait 2 seconds', async () => {
    const t = Date.now();
    await sleep(2);
    expect(Date.now() - t).toBeGreaterThanOrEqual(2000);
  });

});

// par défaut les tests sur les autres fichiers sont réalisés de manière async,
// pour le faire dans un même fichier ->
describe('Timer with concurrence', () => {

  it.concurrent('should wait 3 seconds', async () => {
    const t = Date.now();
    await sleep(3);
    expect(Date.now() - t).toBeGreaterThanOrEqual(3000);
  });

  it.concurrent('should wait 2 seconds', async () => {
    const t = Date.now();
    await sleep(2);
    expect(Date.now() - t).toBeGreaterThanOrEqual(2000);
  });

})