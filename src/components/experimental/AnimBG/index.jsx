import React from "react";
//import { styled } from "@material-ui/core/styles";
import styled from "styled-components";
import { Bar } from "@visx/shape";
import { Pattern, PatternWaves } from "@visx/pattern";

const SvgContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;
`;

export const AnimBG = () => {
    return(
        <SvgContainer> 
            <svg width="100vw" height="100vh">
                <PatternWaves id="pattern-1" width={12} height={12} fill="transparent" stroke="white" strokeWidth={1}>
                    <animateTransform
                        attributeType="xml"
                        attributeName="patternTransform"
                        type="translate"
                        from="0 0"
                        to="10 0"
                        dur="10s"
                        repeatCount="indefinite"
                    />
                </PatternWaves>
                <Bar fill={`url(#pattern-1)`} x={0} y={0} width="100vw" height="100vh" />
            </svg>
        </SvgContainer>
    );
}