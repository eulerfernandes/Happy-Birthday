import React from 'react';

import { Container } from './styles';

function Video() {
    return (
        <Container>
        <iframe
          className="video-container"
          src="https://youtu.be/qKxAwDFj2-k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </Container>
    )
};

export default Video;