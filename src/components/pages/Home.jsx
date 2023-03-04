import { useCallback, useEffect, useState } from "react";
import { getPosts } from "../../api/post";

function Home() {
  const [posts, setPosts] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const { data, isLoading, error } = posts;

  const fetchData = useCallback(async () => {
    const data = await getPosts(1);

    setPosts({ data, error: null, isLoading: false });
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  if (isLoading) return <div>로딩 중...</div>;
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li>
            <img src={item.img_list[0].url} alt="데이터이미지들" />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
