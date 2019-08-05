import React from 'react';
import Proptypes from 'prop-types';

const ThemeContext = React.createContext('light');

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: 'light' };
  }

  render() {
    const { theme } = this.state;
    return (
      <div>
        <ThemeContext.Provider value={theme}>
          <AppBody />
        </ThemeContext.Provider>
      </div>
    );
  }
}

class AppBody extends React.PureComponent {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => theme}
      </ThemeContext.Consumer>
    );
  }
}


View.propTypes = {
};

export default View;
