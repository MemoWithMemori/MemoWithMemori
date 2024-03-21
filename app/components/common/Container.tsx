import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

type StyleContainerType = {
  children: ReactNode;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;

  width?: string;
  height?: string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;

  backgroundColor?: string;
  borderRadius?: string;
  border?: string;

  borderTopRightRadius?: string;
  borderTopLeftRadius?: string;
  borderBottomRightRadius?: string;
  borderBottomLeftRadius?: string;
};

const Container: React.FC<StyleContainerType> = ({
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  width,
  height,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  backgroundColor,
  borderRadius,
  border,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  children, // 직접 명시해줘도 되고, React.FC를 사용하면 자동으로 포함됩니다.
}) => {
  // 모든 props를 StyledContainer에 전달합니다.
  return (
    <StyledContainer
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      width={width}
      height={height}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      border={border}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
      borderBottomLeftRadius={borderBottomLeftRadius}
      borderBottomRightRadius={borderBottomRightRadius}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;

const StyledContainer = styled.View<StyleContainerType>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'column'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'center'};
  gap: ${(props) => props.gap || '0px'};

  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};

  margin-top: ${(props) => props.marginTop || '0px'};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
  margin-left: ${(props) => props.marginLeft || '0px'};
  margin-right: ${(props) => props.marginRight || '0px'};

  padding-top: ${(props) => props.paddingTop || '0px'};
  padding-bottom: ${(props) => props.paddingBottom || '0px'};
  padding-left: ${(props) => props.paddingLeft || '0px'};
  padding-right: ${(props) => props.paddingRight || '0px'};

  background-color: ${(props) => props.backgroundColor || '#FFFFFF'};
  border-radius: ${(props) => props.borderRadius || '0px'};
  border: ${(props) => props.border || '0px'};

  border-top-right-radius: ${(props) => props.borderTopRightRadius || '0px'};
  border-top-left-radius: ${(props) => props.borderTopLeftRadius || '0px'};
  border-bottom-right-radius: ${(props) =>
    props.borderBottomRightRadius || '0px'};
  border-bottom-left-radius: ${(props) =>
    props.borderBottomLeftRadius || '0px'};
`;
