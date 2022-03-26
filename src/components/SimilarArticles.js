// SimilarArticles.js

import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { SimilarArticlesFactory } from './SimilarArticlesFactory';
import moment from 'moment';
import { formatDate } from '../utils/global';

// SimilarArticles.js

function getPostsFromQuery(posts) {
  if (posts) {
    return posts.edges
      .map(edge => edge.node)
      .map(node =>
        Object.assign({}, node.frontmatter, node.fields, {
          excerpt: node.excerpt
        })
      );
  }

  return [];
}

const query = graphql`
  query SimilarArticles {
    latest: allMdx(
      limit: 500
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`;

const SimilarArticlesComponent = ({ articles }) => (
  <section className="posts">
    {articles.map(({ article }, i) => {
      return (
        <Link to={article.slug} key={i}>
          <div className="each">
            {article.thumbnail ? (
              <Img fixed={article.thumbnail.childImageSharp.fixed} />
            ) : (
              <div />
            )}
            <div className="each-list-item">
              <h2>{article.title}</h2>
              <div>{formatDate(article.date)}</div>
            </div>
          </div>
        </Link>
      );
    })}
  </section>
);

// (1.) Query for articles
export default props => (
  <StaticQuery
    query={query}
    render={data => {
      const { category, tags, currentArticleSlug } = props;

      // (2.) Marshall the response into articles
      const articles = getPostsFromQuery(data.latest);

      // (3.) Use a SimilarArticlesFactory to get my similar articles
      const similarArticles = new SimilarArticlesFactory(
        articles,
        currentArticleSlug
      )
        .setMaxArticles(4)
        .setCategory(category)
        .setTags(tags)
        .getArticles();

      // (4.) Render it
      return <SimilarArticlesComponent articles={similarArticles} />;
    }}
  />
);
