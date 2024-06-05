import React from 'react';

function CardsRowTitleStatic({searchQuery}) {
    return (
        <>
            <h2 className='titolo-cards mb-3'>{searchQuery}</h2>
        </>
    );
}

export default CardsRowTitleStatic;