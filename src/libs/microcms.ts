import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import { blogs } from '../types/microcms';
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export type Blog = blogs;

if (!process.env.MICROCMS_SERVICE_DOMAIN)
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
if (!process.env.MICROCMS_API_KEY)
  throw new Error('MICROCMS_API_KEY is required');

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: 'blogs',
    queries,
  });
  await sleep(1000);
  return listData;
};
export type BlogResponse = ReturnType<typeof getList>;

export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: 'blogs',
    contentId,
    queries,
  });
  await sleep(1000);
  return detailData;
};
