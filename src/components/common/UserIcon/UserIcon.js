import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, string } from 'prop-types';

import './style.css';
import OptionsPanel from './OptionsPanel';
import AuthActions from '../../../actions/AuthActions';

class UserIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionsPanelShow: false
    };
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleHideOptionsPanel, false);
  }

  componentWillUnmount() {
    document.removeEventListener(
      'mousedown',
      this.handleHideOptionsPanel,
      false
    );
  }

  handleShowOptionsPanel = () => {
    this.setState({ optionsPanelShow: true });
  };

  handleHideOptionsPanel = e => {
    if (this.node.contains(e.target)) return;

    this.setState({ optionsPanelShow: false });
  };

  handleSignoutClick = () => {
    this.props.signout();
    this.setState({ optionsPanelShow: false });
  };

  render() {
    const { width, height, locale } = this.props;
    const { optionsPanelShow } = this.state;

    let optionsPanelStyle = {};
    if (optionsPanelShow) {
      optionsPanelStyle = {
        opacity: 1,
        visibility: 'visible'
      };
    }

    return (
      <div
        className="user-icon-container"
        onClick={this.handleShowOptionsPanel}
        ref={node => (this.node = node)}
      >
        <svg
          viewBox="0 0 24 24"
          width={width}
          height={height}
          className="mdi-icon user-icon"
        >
          <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5C13.66,5 15,6.34 15,8C15,9.66 13.66,11 12,11C10.34,11 9,9.66 9,8C9,6.34 10.34,5 12,5M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.47 17.5,2 12,2Z" />
        </svg>
        <OptionsPanel
          locale={locale}
          style={optionsPanelStyle}
          onSignoutClick={this.handleSignoutClick}
        />
      </div>
    );
  }
}

UserIcon.propTypes = {
  signout: func.isRequired,
  locale: string.isRequired
};

export default connect(
  state => ({ locale: state.Localization.locale }),
  dispatch => bindActionCreators({ ...AuthActions }, dispatch)
)(UserIcon);
