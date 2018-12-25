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
        subtitle: postEdge.node.frontmatter.subtitle,
        author: postEdge.node.frontmatter.author,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        id: postEdge.node.id,
        bgColor: postEdge.node.frontmatter.bgColor,
        textColor: postEdge.node.frontmatter.textColor,
        titleColor: postEdge.node.frontmatter.titleColor,
        themeStyle: postEdge.node.frontmatter.themeStyle
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (

      <div>

        {postList.slice(0, 1).map(post => (
          <article key={post.title} style={{backgroundColor: `${post.bgColor}`, color: `${post.textColor}`}} className="pt7 pb5">
            <div className="row">
              <Link to={post.path} className="dim">
                <h1
                  className="page-hero__headline"
                  style={{color: `${post.titleColor}`}}>
                  {post.title}&mdash;
                </h1>
              </Link>
              <h2 className="page-hero__headline o-40">{post.subtitle}</h2>
            </div>
          </article>
        ))}

        <ul className="blog-list">
          {
          postList.slice(1).map(post => (
            <li key={post.title} className="blog-list__item">
              <Link
                to={post.path}
                className="blog-list__item__link">
                <div className="row">
                  <h2 className="page-hero__headline">{post.title} <span>⇛</span></h2>
                  <p className="blog-list__item__subtitle f4 o-40 ma0">{post.subtitle}</p>
                </div>
                <div className="blog-list__item__bg" style={{backgroundColor: `${post.bgColor}` }}></div>
              </Link>
            </li>
          ))}
        </ul>

    </div>

    );
  }
}

export default PostListing;
