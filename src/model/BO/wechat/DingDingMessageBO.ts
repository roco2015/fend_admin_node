class DingDingMessageBO {
    static getObj(msg: string) {
      const obj = {
        "msgtype": "text", 
        "text": {
          "content": "error" + msg
        }
      }
      return obj;
  }
}

export default DingDingMessageBO