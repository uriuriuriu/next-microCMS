import { blogs, EndPoints } from '../types/microcms';
import { MicroCMS } from 'microcms-lib';
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export type Blog = blogs;
interface GetOptions<T> {
  draftKey?: string;
  fields?: ReadonlyArray<T>;
  depth?: number;
  globalKey?: boolean;
}
interface GetsOptions<T> {
  draftKey?: string;
  limit?: number;
  offset?: number;
  orders?: string;
  q?: string;
  fields?: T[];
  ids?: string;
  filters?: string;
  depth?: number;
  globalKey?: boolean;
}

if (!process.env.MICROCMS_SERVICE_DOMAIN)
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
if (!process.env.MICROCMS_API_KEY)
  throw new Error('MICROCMS_API_KEY is required');

const cms = new MicroCMS<EndPoints>({
  service: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getList = async (queries?: GetsOptions<keyof Blog>) => {
  const listData = await cms.gets('blogs', queries);
  await sleep(1000);
  return listData;
};
export type BlogResponse = ReturnType<typeof getList>;

export const getDetail = async (
  contentId: string,
  queries?: GetOptions<keyof Blog>
) => {
  const detailData = await cms.get('blogs', contentId, queries);
  await sleep(1000);
  return detailData;
};
