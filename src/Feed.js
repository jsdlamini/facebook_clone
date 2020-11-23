import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    // console.log(posts);
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
          message={post.data.message}
        />
      ))}
      {/* <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjidvk3DPBtaN3SXhqTDVhzve_yJEhYIE9xQ&usqp=CAU"
        message="Now this works"
        timestamp=""
        username="Time stamp here"
        image="https://image.shutterstock.com/image-photo/happy-multiethnic-family-sitting-on-600w-717416929.jpg"
      /> */}
      {/* 
      <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjidvk3DPBtaN3SXhqTDVhzve_yJEhYIE9xQ&usqp=CAU"
        message="Now this works"
        timestamp=""
        username="Time stamp here"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvw65--Bz3j2IRCkPfEvNNmAL_ghdwcP4BEQ&usqp=CAU"
      /> */}
    </div>
  );
}

export default Feed;
