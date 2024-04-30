import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app_container ${classNames}`}>
      <SocialMedia />
      
      <div className="app__wrapper app__flex">
          <Component />
          <NavigationDots active={idName} />
          <div className="copyright">
              <p className="p-text">@2024 Evans Gacheru Munene</p>
              <p className="p-text">All rights reserved</p>
          </div>
      </div>
    </div>
  );
};

export default AppWrap;