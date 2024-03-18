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
  margin?: string;
  padding?: string;

  backgroundColor?: string;
  borderRadius?: string;
  border?: number;

  borderTopRight?: number;
  borderTopLeft?: number;
  borderBottomRight?: number;
  borderBottomLeft?: number;
};

const Container: React.FC<StyleContainerType> = ({
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  width,
  height,
  margin,
  padding,
  backgroundColor,
  borderRadius,
  border,
  borderTopLeft,
  borderTopRight,
  borderBottomLeft,
  borderBottomRight,
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
      margin={margin}
      padding={padding}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      border={border}
      borderTopLeft={borderTopLeft}
      borderTopRight={borderTopRight}
      borderBottomLeft={borderBottomLeft}
      borderBottomRight={borderBottomRight}
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
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};

  background-color: ${(props) => props.backgroundColor || '#FFFFFF'};
  border-radius: ${(props) => props.borderRadius || '0px'};
  border: ${(props) => props.border || 0};

  border-top-right-radius: ${(props) => props.borderTopRightRadius || 0};
  border-top-left-radius: ${(props) => props.borderTopLeftRadius || 0};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius || 0};
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius || 0};
`;
