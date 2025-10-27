export type RequestHandler<T = any> = ({
  payload,
  respond,
  acknowledge,
}: {
  payload: T;
  respond: (payload: any) => void;
  acknowledge: () => void;
  source: MessageEventSource | null;
}) => any;
