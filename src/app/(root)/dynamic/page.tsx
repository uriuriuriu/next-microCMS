import Link from 'next/link';
import { getList } from '@libs/microcms';

// 60秒間はキャッシュを利用する
export const revalidate = 60;

export default async function StaticPage() {
  const { contents } = await getList();

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <h1>{time}</h1>
      <ul>
        {contents.map(post => {
          return (
            <li key={post.id}>
              <Link href={`/dynamic/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
