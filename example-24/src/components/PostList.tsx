// src/components/PostList.tsx
import React, { useEffect, useState } from "react";
import api from "../api/api";
import { Post } from "../types/Post";

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]); // 게시물 데이터 상태
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태

  useEffect(() => {
    // API 호출 함수
    const fetchPosts = async () => {
      try {
        const response = await api.get<Post[]>("/posts");
        setPosts(response.data); // 데이터 설정
      } catch (err) {
        setError("데이터를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchPosts();
  }, []);

  // 로딩 중 화면
  if (loading) return <div>로딩 중...</div>;

  // 에러 화면
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>게시물 목록</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
