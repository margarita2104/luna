import React from 'react'

function RatingReview({rating, setRating}) {
    return (
        <div style={{
            marginRight: '45px',
        }}>
            {[1, 2, 3, 4, 5].map((star) => {
                return (
                    <span
                        className='start'
                        style={{
                            cursor: 'pointer',
                            color: rating >= star ? 'gold' : 'gray',
                            fontSize: `25px`,
                        }}
                        onClick={() => {
                            setRating(star)
                        }}
                    >
            {' '}
                        ★{' '}
          </span>
                )
            })}
        </div>
    )
}

export default RatingReview;
