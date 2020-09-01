import React, { Component } from "react";
import Head from "next/head";
import axios from "axios";

class Index extends Component {
  static async getInitialProps() {
    const { data } = await axios.get(
      "https://nihilism-server.herokuapp.com/api/blog/posts"
    );
    const { posts } = data;
    return { posts };
  }

  renderPosts = () => {
    return this.props.posts.map((post) => {
      return (
        <a href={`/posts/${post.slug}`}>
          <div style={{ fontSize: 16, fontWeight: "bold" }}>{post.title}</div>
          <div style={{ fontSize: 16 }}>{post.date}</div>
          <img src={post.image} style={{ width: 300 }} />
        </a>
      );
    });
  };

  render() {
    return (
      <div>
        <Head>
          <title>Nihilism</title>
          <link rel="icon" href="/face.png" />
        </Head>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: 40,
          }}
          href="/"
        >
          <div style={{ fontSize: 64, fontWeight: "bold" }}>Nihilism.</div>
          <div style={{ fontSize: 32, marginTop: 20 }}>
            Ay. You already know the bibes.
          </div>
        </a>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: 40,
          }}
        >
          <div
            style={{ width: "80%", display: "flex", flexDirection: "column" }}
          >
            <div style={{ marginTop: 20 }}>{this.renderPosts()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
