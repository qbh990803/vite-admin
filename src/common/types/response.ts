/**
 * 列表返回数据data结构
 */
export interface IDataList<T> {
  total: number;
  records: T[];
}

/**
 * 接口返回response类型
 */
export interface IResponse {
  /**
   * 状态码 默认200
   */
  code?: number;
  /**
   * 返回信息
   */
  msg?: string;
}

/**
 * 接口返回包含data类型
 */
export interface IResponseData<T> extends IResponse {
  /**
   * 数据对象
   */
  data?: IDataList<T> | T | T[];
}
