/* eslint-disable */
export class IpcTimeoutError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'IpcTimeoutError';
  }
}

export class IpcRemoteError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'IpcRemoteError';
  }
}
