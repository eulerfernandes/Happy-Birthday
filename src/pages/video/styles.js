/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 50px;

  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 80%;
  }
`;