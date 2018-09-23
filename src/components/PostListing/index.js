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
        titleColor: postEdge.node.frontmatter.titleColor
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (

      <div>

        {postList.slice(0, 1).map(post => (
          <article key={post.title} style={{backgroundColor: `${post.bgColor}`, color: `${post.textColor}`}} className="pv6">
            <div className="row tc">
              <Link to={post.path} className="dim center">
                <h1
                  className="f-headline fw7 dib mv0 mw8"
                  style={{color: `${post.titleColor}`}}>
                  {post.title}
                </h1>
              </Link>
              <p className="tc color-inherit ttu o-60 fw6 tracked sans-serif mv4">by {post.author}</p>
              <h2 className="f2 fw4 o-80 ma0 system-sans center mw7">{post.subtitle}</h2>
            </div>
          </article>
        ))}

        <div className="row">
          <ul className="list ma0 pa0">
            {
            postList.slice(1).map(post => (
              <li key={post.title}>
                <Link
                  to={post.path}
                  className="db bg-black white pa3 mv2">
                  <h1>{post.title}</h1>
                  <h2 className="fw4 o-80 ma0 system-sans">{post.subtitle}</h2>
                  <small>by {post.author}</small>
                  <p className="white">{post.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

    </div>
    );
  }
}

export default PostListing;
