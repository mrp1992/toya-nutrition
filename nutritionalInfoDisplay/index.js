import React from 'react';

const NutritionalInfoDisplay = ({ data }) => {
    console.log("data1", data);
    // if (!data || !data.overallSummary) {
    //     return <p>Loading or no data available...</p>;
    // }
    return (
        <div className="nutritional-info-display">
            <h2>Overall Summary</h2>
            <p><strong>Is it healthy?</strong> {data.overallSummary.healthRating}</p>
            <p><strong>Overall Assessment:</strong> {data.overallSummary.explanation}</p>
        </div>
    );
};

export default NutritionalInfoDisplay;
