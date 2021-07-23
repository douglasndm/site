import React, { useState, useCallback, useMemo } from 'react';

import { Container, ArrowImage } from './styles';

const BottomButton: React.FC = () => {
    const pageHeight = document.body.scrollHeight;
    const viewHeight = window.innerHeight;

    const availableSteps = pageHeight / viewHeight;

    const handleMoveDown = useCallback(() => {
        if (process.env.NODE_ENV === 'development') {
            console.log(`Total pageHeight: ${pageHeight}`);
            console.log(`Currectly ViewHeight: ${viewHeight}`);
            console.log(`AvailableSteps: ${availableSteps}`);
            console.log(`Y Offset: ${window.pageYOffset}`);
        }

        if (window.pageYOffset < document.body.scrollHeight) {
            window.scrollTo(0, window.pageYOffset + window.innerHeight);
        }
    }, [availableSteps, pageHeight, viewHeight]);

    return (
        <Container onClick={handleMoveDown}>
            <ArrowImage
                src={`${process.env.PUBLIC_URL}/Assets/Images/navigation-down-circle.png`}
            />
        </Container>
    );
};

export default BottomButton;
