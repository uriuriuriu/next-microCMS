type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type blogs<T='get'> = Structure<
T,
{
  /**
   * タイトル
   */
  title?: string
  /**
   * 内容
   */
  content?: string
  /**
   * アイキャッチ
   */
  eyecatch?: { url: string, width: number, height: number }
  /**
   * カテゴリ
   */
  category?: Reference<T,unknown | null>
}>


export interface EndPoints {
  get: {
    'blogs': blogs<'get'>
  }
  gets: {
    'blogs': blogs<'gets'>
  }
  post: {
    'blogs': blogs<'post'>
  }
  put: {
    'blogs': blogs<'put'>
  }
  patch: {
    'blogs': blogs<'patch'>
  }
}
