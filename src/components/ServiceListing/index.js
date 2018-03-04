import React from 'react';
import Link from 'gatsby-link';

class ServiceListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
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
      <ul>
        {
        postList.map(post => (
          <li key={post.title}>
            <Link to={post.path}>
              <h1>{post.title}</h1>
              <small>Posted on {post.date}</small>
              <p>{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default ServiceListing;
