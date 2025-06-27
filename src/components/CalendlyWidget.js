// components/CalendlyWidget.js
import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyWidget = () => {
    return (
        <div className="calendly-widget-container">
            <InlineWidget 
                url="https://calendly.com/rajdeeppaul304"
                styles={{
                    height: '100%',
                    width: '100%'
                }}
                pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '00a2ff',
                    textColor: '4d5055'
                }}
            />
            <style>{`
                .calendly-widget-container {
                    height: 100%;
                    width: 100%;
                    min-height: 450px;
                }
                
                /* Ensure Calendly iframe is responsive */
                .calendly-widget-container iframe {
                    width: 100% !important;
                    height: 100% !important;
                    border: none !important;
                }
                
                /* Mobile responsiveness */
                @media (max-width: 768px) {
                    .calendly-widget-container {
                        min-height: 400px;
                    }
                }
                
                @media (max-width: 480px) {
                    .calendly-widget-container {
                        min-height: 350px;
                    }
                }
            `}</style>
        </div>
    );
};

export default CalendlyWidget;