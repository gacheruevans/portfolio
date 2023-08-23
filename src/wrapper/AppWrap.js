import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app_container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
              <p className="p-text">©2023 Evans Gacheru Munene</p>
              <p className="p-text justify-center items-center">All rights reserved</p>
          </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;