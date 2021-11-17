import mitt, { Emitter, Handler } from "mitt";

class EventService {
  private emiter;
  constructor() {
    this.emiter = mitt();
  }

  on(event: string, callback: Handler) {
    this.emiter.on(event, callback);
  }

  once(event: string, callback: Handler) {
    const cb = (e: any) => {
      // 执行毁掉
      callback(e);
      // 清除回调函数
      this.off(event, cb);
    };
    this.on(event, cb);
  }

  off(event: string, callback: Handler) {
    this.emiter.off(event, callback);
  }

  emit(event: string, payload: unknown) {
    this.emiter.emit(event, payload);
  }
}
const event = new EventService();
export default event;
