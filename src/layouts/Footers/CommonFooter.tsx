"use client";
import React, { useEffect, useState } from "react";
import FooterNewsletter from "./subComponents/FooterNewsletter";

// Тип для постов
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function CommonFooter({ className = "pt-100" }) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then((data: Post[]) => {
        setPosts(data.slice(0, 5)); // показываем первые 5 постов
      })
      .catch(err => console.error("Ошибка при загрузке постов:", err));
  }, []);

  return (
    <footer className={`tp-footer-area p-relative ${className}`}>
      <div className="tp-footer-bg"></div>
      <div className="container">
        <div className="tp-footer-widget-border">
          <div className="row">
            <FooterNewsletter />

            <div className="col-12 mt-4">
              <h4>Последние посты (JSONPlaceholder):</h4>
              <ul>
                {posts.map(post => (
                  <li key={post.id}>
                    <strong>{post.title}</strong>
                    <p>{post.body}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
