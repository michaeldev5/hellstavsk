import React from 'react';
import styled from 'styled-components';

const WrapperOuter = styled.div`
  width:100%;
  height: 50vw;
  position: relative;
  text-align:right;
  max-height: 600px;
`;

const WrapperInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow:hidden;
  background:none !important;
`;

const GoogleMaps = () => (
  <WrapperOuter>
    <WrapperInner>
      <iframe id="gmap_canvas" style={{width: '100%', height: '100%'}}
        src="https://maps.google.com/maps?q=vy%C5%A1n%C3%A1%20vo%C4%BEa%20108&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
      </WrapperInner>
  </WrapperOuter>
);

export default GoogleMaps;