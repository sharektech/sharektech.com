import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing';
import config from '../../data/SiteConfig';

export default class TagTemplate extends Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMdx.edges;

    return (
      <Layout>
        <Helmet title={`منشورات تحت الوسم "${tag}" – ${config.siteTitle}`} />
        <div className="container">
          <h1>
            منشورات تحت الوسم <u>{tag}</u>
          </h1>
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
                gatsbyImageData (layout: FIXED)
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
