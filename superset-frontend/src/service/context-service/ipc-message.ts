type IpcMessage = {
  type: string;
  correlationId?: string;
  payload?: any;
};
