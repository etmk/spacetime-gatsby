import React from 'react';
import Link from 'gatsby-link';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        type: postEdge.node.frontmatter.type,
        path: postEdge.node.frontmatter.path,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        id: postEdge.node.id
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <ul className="list ma0 pa0">
        {
        postList.map(post => (
          <li key={post.title}>
            <Link
              to={post.path}
              className="db bg-black white pa3 mv2">
              <h1>{post.title}</h1>
              <small>Posted on {post.date} | Post type {post.type}</small>
              <p className="white">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default PostListing;
