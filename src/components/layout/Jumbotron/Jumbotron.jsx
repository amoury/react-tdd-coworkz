import React from 'react'
import styled from 'styled-components';

const JumboWrapper = styled.div`
  width: 100vw;
  height: 40vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const Jumbotron = () => {
  return (
    <JumboWrapper style={{ backgroundImage: `url('https://source.unsplash.com/random/1200x800')`}} />
  )
}

export default Jumbotron
