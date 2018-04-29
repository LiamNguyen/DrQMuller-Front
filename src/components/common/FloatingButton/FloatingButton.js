import React, { Component } from 'react';
import { func, string } from 'prop-types';
import PlusIcon from 'mdi-react/PlusIcon';
import Draggable from 'react-draggable';

import './style.css';

const descriptionStyle = {
  visible: {
    visibility: 'visible',
    opacity: 1
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0
  }
};

class FloatingButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descriptionStyle: descriptionStyle.hidden
    };
  }

  handleMouseEnter = () => {
    this.setState({ descriptionStyle: descriptionStyle.visible });
  };

  handleMouseLeave = () => {
    this.setState({ descriptionStyle: descriptionStyle.hidden });
  };

  render() {
    const { onClick, description } = this.props;

    return (
      <Draggable bounds="body" defaultPosition={{ x: 0, y: 0 }}>
        <div>
          <div
            className="floating-button"
            onClick={onClick}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            <PlusIcon style={{ fill: 'white' }} />
          </div>
          {description && (
            <span
              className="floating-description"
              style={this.state.descriptionStyle}
            >
              {description}
            </span>
          )}
        </div>
      </Draggable>
    );
  }
}

FloatingButton.defaultProps = {
  description: null
};

FloatingButton.propTypes = {
  onClick: func.isRequired,
  description: string
};

export default FloatingButton;
