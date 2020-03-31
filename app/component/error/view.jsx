import React, { Suspense } from 'react';
class Page404 extends React.Component {
  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  renderDetail(pageType) {
    const dynamicDetail = React.lazy(() => import(`./test/${pageType}.jsx`));
    return dynamicDetail;
  }

  render() {
    const pageType = ['view', 'view2', 'view3'];

    const result = pageType.map(v => this.renderDetail(v));
    function Story(v) {
      const SpecificStory = v;
      return <SpecificStory />;
    }
    return (
      <div>
        <h1>404，可能搞错了～</h1>
        {/*{result}*/}
        <Suspense fallback={<div>Loading...</div>}>
          {
            result.map((v, ind) => (
              <React.Fragment key={ind}>
                {Story(v)}
              </React.Fragment>
            ))
          }
        </Suspense>
      </div>
    );
  }
}

export default Page404;
