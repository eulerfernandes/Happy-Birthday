import React from 'react';

import { Container } from './styles';

function Video() {
    return (
        <Container>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KnuR0phgfo8?si=tpVDYiPR15Cd6ibz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Container>  
    )
};

export default Video;