class BaseResult {
  static success(info?: any, msg?: string) {
    const obj = {
      'code': 0,
      'msg': msg || '',
      'info': info || {}
    };
    return obj;
  }
}