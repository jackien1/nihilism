import React, { Component } from "react";
import Head from "next/head";
import axios from "axios";
import ReactMarkdown from "react-markdown";

class Post extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const { data } = await axios.get(
      `https://nihilism-server.herokuapp.com/api/blog/post?id=${slug}`
    );

    const { post, metadata } = data;
    return { post, metadata };
  }

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.metadata.title}</title>
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
        <ReactMarkdown source={this.props.post} />
      </div>
    );
  }
}

export default Post;
