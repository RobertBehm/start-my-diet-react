import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

export default function ResponsivePlayer2({ url }) {
  return (
    <Player2Wrapper>
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="90%"
        controls={true}
        config={{
          vimeo: {
            playerOptions: {
              color: "#0554fe",
            },
          },
        }}
      />
    </Player2Wrapper>
  );
}

const Player2Wrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
