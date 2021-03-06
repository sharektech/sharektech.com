import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ThemeContext from '../context/ThemeContext';
import Layout from '../layout';
import Seo from '../components/SEO';
import config from '../../data/SiteConfig';

export default class NotFoundPage extends Component {
  static contextType = ThemeContext;

  componentDidMount() {
    const { setNotFound } = this.context;

    setNotFound();
  }

  componentWillUnmount() {
    const { setFound } = this.context;

    setFound();
  }

  render() {
    return (
      <Layout>
        <Helmet title={`صفحة غير موجودة – ${config.siteTitle}`} />
        <Seo />
        <div className="container">
          <div className="text-center">
            <h1>404</h1>
            <p>لم يتم إيجاد أي صفحة بهذا العنوان.</p>
            <p>المرجود الضغط على أحد الروابط في القائمة أعلاه.</p>
          </div>
        </div>
      </Layout>
    );
  }
}
