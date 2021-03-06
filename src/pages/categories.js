import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash.kebabcase';
import Layout from '../layout';
import Seo from '../components/SEO';
import config from '../../data/SiteConfig';

export default class CategoriesPage extends Component {
  render() {
    const { data } = this.props;
    const { group } = data.allMdx;

    return (
      <Layout>
        <Seo />
        <Helmet title={`تصنيفات – ${config.siteTitle}`} />
        <div className="container">
          <h1>تصنيفات</h1>
          <div className="tag-container">
            {group.map(category => (
              <Link
                to={`/categories/${kebabCase(category.fieldValue)}`}
                key={category.fieldValue}
              >
                <span key={category.fieldValue}>
                  {category.fieldValue}{' '}
                  <strong className="count">{category.totalCount}</strong>
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
  query CategoriesQuery {
    allMdx(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`;
