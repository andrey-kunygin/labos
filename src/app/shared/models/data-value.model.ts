export interface DataValue<T> {
  loading: boolean;
  error?: boolean;
  data?: T;
}
