import React from 'react';

// common proptypes for tab components
export default {
  tabInfo: React.PropTypes.object.isRequired,
  tabStatusRegistry: React.PropTypes.object.isRequired,
  updateBadge: React.PropTypes.func.isRequired,
  switchToTab: React.PropTypes.func.isRequired,
  addTabToRoom: React.PropTypes.func.isRequired,
  roomAPI: React.PropTypes.object.isRequired,
  setTabReady: React.PropTypes.func.isRequired,
  connectedUsers: React.PropTypes.array.isRequired,
  roomInfo: React.PropTypes.object.isRequired,
  roomReady: React.PropTypes.bool.isRequired,
  classNames: React.PropTypes.string,
  style: React.PropTypes.object,
  uiSize: React.PropTypes.string.isRequired,
  onTop: React.PropTypes.bool.isRequired,
  primaryMediaStreamState: React.PropTypes.object.isRequired,
  screenSharingStreamState: React.PropTypes.object.isRequired,
  touchDevice: React.PropTypes.bool.isRequired,
};
