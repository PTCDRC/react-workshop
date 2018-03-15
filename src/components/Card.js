import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 1px solid black;
  padding 40px;
  box-shadow: 3px 3px 5px 6px #ccc;
  max-width: 300px;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Title = styled.h1`
  margin-bottom: 40px;
`;


export default class Card extends React.Component {
  render(){
    return(
        <CardWrapper>
          <Title>{this.props.title}</Title>
          <Image src={this.props.imageUrl}/>
        </CardWrapper>
    )
  }
};
