export default abstract class SafeService {

  loading = false;

  protected async safeCall(apiCall: () => void, successCall?: () => void) {

    this.loading = true;
    try {
      await apiCall();
      if (successCall) {
        await successCall();
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
  }
}