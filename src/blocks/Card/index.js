import React, { PureComponent } from "react";
import { Card } from "antd";
import styled, { injectGlobal } from "styled-components";
import styles from "antd/lib/card/style/index.css";

const { Meta } = Card;

injectGlobal`
  ${styles};
`;

const StyledCard = styled(Card)`
  border: 1px solid red;
`;

class ContentCard extends PureComponent {
  render() {
    console.log("styles", styles);
    console.log("styles", JSON.stringify(styles));
    return (
      <StyledCard
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </StyledCard>
    );
  }
}

export default ContentCard;
