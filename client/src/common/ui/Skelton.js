
import React, { Fragment } from 'react';

import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import './style.scss';

let highlightColor = "#E7E7E7";

const UiSkelton = (props) => {
  let type = props.type;

  if (type === true) {
    type = 'g';
  }

  const singleImage = () => {
    return (
      <div className="single-full-image">
        <ReactPlaceholder type='rect'
          showLoadingAnimation={true}
          className="single-full-image-skelton"
          ready={false} color={highlightColor} style={{ width: '100%', height: 150 }}>
        </ReactPlaceholder>
      </div>
    )
  }

  const imageAndLines = () => {
    return (
      <div className="image-and-lines">
        <div className="mid-left">
          <ReactPlaceholder type='rect' color={highlightColor} showLoadingAnimation={true} className="mid-left-skelton" />
        </div>

        <div className="mid-right">
          <SkeltonRect className="mid-right-skelton1" />
          <SkeltonRect className="mid-right-skelton2" />
        </div>
      </div>
    )
  }

  const twoLines = () => {
    return (
      <div className="two-lines">
        <SkeltonRect className="mid-right-skelton1" />
        <SkeltonRect className="mid-right-skelton2" />
      </div>
    )
  }

  const productsSkelton = () => {
    return (
      <div className="products-listing">
        <div className="top">
          {singleImage()}
        </div>

        <div className="mid">
          {imageAndLines()}
          {imageAndLines()}
          {imageAndLines()}
          {imageAndLines()}
        </div>
      </div>
    )
  }

  const genericSkelton = () => {
    return (
      <div className="products-listing">
        <div className="top">
            {singleImage()}
        </div>

        <div className="mid">
            {twoLines()}
            {twoLines()}
            {twoLines()}
            {twoLines()}
        </div>
      </div>
    )
  }

  return (
    <div className="generic-skelton">
      {type === 'p' && productsSkelton()}
      {type === 'g' && genericSkelton()}
    </div>
  )
};

export const SkeltonRect = (props) => {
  if (!props.hide) {
    return (
      <Fragment>
      <ReactPlaceholder type='rect' color={highlightColor}
        showLoadingAnimation={true} className={props.className} 
        style={props.style}
      />
      </Fragment>
    );
  }

  return null;
};

export default UiSkelton;
