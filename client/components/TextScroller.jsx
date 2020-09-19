import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import EamesSVG from '../assets/eames.svg'
import * as s from './StyledComponentLibrary.jsx';

class TextScroller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previous: 0,
      current: 0,
    }
    this.checkForScroll = this.checkForScroll.bind(this);
  }

  checkForScroll() {
    const { current } = this.state;
    const { section } = this.props;
    if (section !== current) {
      this.setState({ current : section })
    }
  }

  render() {
    const { section, previous } = this.props;
    let left;
    let right;
    let svg;
    let one = (<s.Wrapper><s.Header>the poofiest pleather</s.Header><br/><s.Copy>just imagine plopping your tuchus down on this guy after a long day of work</s.Copy></s.Wrapper>);
    let two = (<s.Wrapper><s.Header>smooth, smoother</s.Header><br/><s.Copy>a crispy profile for all your reclining needs</s.Copy></s.Wrapper>);
    let three = (<s.Wrapper><s.Header>structural titanium</s.Header><br/><s.Copy>really, really firm metal bits on the bottom</s.Copy></s.Wrapper>);
    let four = (<s.Wrapper><s.Header>ooo</s.Header><br/><s.Copy>a backside to die for</s.Copy></s.Wrapper>);
    let five = (<s.Wrapper><s.Header>quintessentially supple</s.Header><br/><s.Copy>these artisinal contours exude class</s.Copy></s.Wrapper>);
    let six = (<s.Wrapper><s.Header>the poofiest pleather</s.Header><br/><s.Copy>just imagine plopping your tuchus down on this guy after a long day of work</s.Copy></s.Wrapper>);
    if (section === 0) {
      left = section >= previous
      ? <s.Zero><s.TitleInBottom>eames luxury 2000</s.TitleInBottom></s.Zero>
      : <s.Zero><s.TitleInTop>eames luxury 2000</s.TitleInTop></s.Zero>
      svg = section < previous
        ? <s.SVGShellIn><EamesSVG /></s.SVGShellIn>
        : <s.SVGShell><EamesSVG /></s.SVGShell>
    } else if (section === 1) {
      left = section > previous
        ? <s.One><s.InBottom>{one}</s.InBottom></s.One>
        : <s.One><s.InTop>{one}</s.InTop></s.One>
      right = section > previous
        ? <s.Zero><s.TitleOutTop>eames luxury 2000</s.TitleOutTop></s.Zero>
        : <s.Two><s.OutBottom>{two}</s.OutBottom></s.Two>
      svg = section > previous
        ? <s.SVGShellOut><EamesSVG /></s.SVGShellOut>
        : <> </>
    } else if (section === 2) {
      left = section > previous
        ? <s.One><s.OutTop>{one}</s.OutTop></s.One>
        : <s.Three><s.OutBottom>{three}</s.OutBottom></s.Three>
      right = section > previous
        ? <s.Two><s.InBottom>{two}</s.InBottom></s.Two>
        : <s.Two><s.InTop>{two}</s.InTop></s.Two>
      svg = <s.SVGHide></s.SVGHide>
    } else if (section === 3) {
      left = section > previous
        ? <s.Three><s.InBottom>{three}</s.InBottom></s.Three>
        : <s.Three><s.InTop>{three}</s.InTop></s.Three>
      right = section > previous
        ? <s.Two><s.OutTop>{two}</s.OutTop></s.Two>
        : <s.Four><s.OutBottom>{four}</s.OutBottom></s.Four>
    } else if (section === 4) {
      left = section > previous
        ? <s.Three><s.OutTop>{three}</s.OutTop></s.Three>
        : <s.Five><s.OutBottom>{five}</s.OutBottom></s.Five>
      right = section > previous
        ? <s.Four><s.InBottom>{four}</s.InBottom></s.Four>
        : <s.Four><s.InTop>{four}</s.InTop></s.Four>
    } else if (section === 5) {
      left = section > previous
        ? <s.Five><s.InBottom>{five}</s.InBottom></s.Five>
        : <s.Five><s.InTop>{five}</s.InTop></s.Five>
      right = section > previous
        ? <s.Four><s.OutTop>{four}</s.OutTop></s.Four>
        : <s.Six><s.OutBottom></s.OutBottom></s.Six>
    } else if (section === 6) {
      left = section > previous
        ? <s.Five><s.OutTop>{five}</s.OutTop></s.Five>
        : <></>
    } else if (section === 9) {
      svg = section > previous
      ? <></>
      : <s.SVGShellOut><EamesSVG /></s.SVGShellOut>;
    } else if (section === 10) {
        svg = <s.SVGShellIn><EamesSVG /></s.SVGShellIn>;
    }
    return (
      <s.TextShell>
        { left }
        { right }
        { svg }
      </s.TextShell>
    )
  }
}

export default TextScroller;

