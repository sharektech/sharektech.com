import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash.kebabcase';
import Layout from '../layout';
import Seo from '../components/SEO';
import config from '../../data/SiteConfig';

export default class TagsPage extends Component {
  render() {
    const { group } = this.props.data.allMdx;

    return (
      <Layout>
        <Seo />
        <Helmet title={`وسوم – ${config.siteTitle}`} />
        <div className="container">
          <h1>وسوم</h1>
          <div className="tag-container">
            {group.map(tag => (
              <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>
                <span key={tag.fieldValue}>
                  {tag.fieldValue}{' '}
                  <strong className="count">{tag.totalCount}</strong>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query TagsQuery {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
