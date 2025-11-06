export type PendingRequest = {
  resolve: (data: any) => void;
  reject: (err: any) => void;
  timerId?: number;
  requestType: string;
};
