import React from "react";
import {MarketingButton} from "../styles/Button";
import {Wrapper} from "../styles/Header";
import {FlexColumnCenter, FlexCenter} from "../styles/Grid";
import Card from "./Card";

function Hero({handleLogIn}) {
  return (
    <React.Fragment>
      <Wrapper>
        <Card>
          <FlexColumnCenter>
            <h1>Open Sauced Dashboard</h1>
            <p>Login with GitHub - Happyyogi to start tracking open source projects.</p>
            <br />
            <FlexCenter>
            <MarketingButton alt="pizza Happyyogi" primary onClick={handleLogIn}>
              Login with GitHub
            </MarketingButton>
          </FlexCenter>
          </FlexColumnCenter>
        </Card>
      </Wrapper>
   </React.Fragment>
  );
}

export default Hero;
