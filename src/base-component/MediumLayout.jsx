import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';
import loginBanner from './login-banner.png'
import messages from './messages';

const MediumLayout = ({ intl }) => (
  <div>
     <img src={loginBanner} alt='banner' className="login-banner"/>
    {/* <div className="w-100 p-0 mb-3 d-flex">
      <div className="col-md-10 bg-primary-400">
        <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
          <Image alt={getConfig().SITE_NAME} className="logo" src={getConfig().LOGO_WHITE_URL} />
        </Hyperlink>
        <div className="d-flex align-items-center justify-content-center mb-4 ">
          <div className={classNames({ 'mt-1 medium-yellow-line': getConfig().SITE_NAME === 'edX' })} />
          <div>
            <h1
              className={classNames(
                'display-1 text-white mt-5 mb-5 mr-2',
                { 'ml-4.5': getConfig().SITE_NAME !== 'edX' },
              )}
            > */}
              {/* <span className="mr-2">{intl.formatMessage(messages['start.learning'])}</span> */}
              {/* <span className="text-accent-a d-inline-block"> */}
              {/*   {intl.formatMessage(messages['with.site.name'], { siteName: getConfig().SITE_NAME })} */}
              {/* </span> */}
            {/* </h1>
          </div>
        </div>
      </div>
      <div className="col-md-2 bg-white p-0">
        <svg className="w-100 h-100 medium-screen-svg-primary" preserveAspectRatio="xMaxYMin meet">
          <g transform="skewX(168)">
            <rect x="0" y="0" height="100%" width="100%" />
          </g>
        </svg>
      </div>
    </div> */}
  </div>
);

MediumLayout.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(MediumLayout);
