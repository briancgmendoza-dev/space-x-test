import { useState } from 'react'
import PropTypes from 'prop-types'

import { yearsAgo } from '../../utils'

const LaunchCard = ({ name, status, details, upcoming, meta }) => {
  const [view, setView] = useState(false)
  const statusStr = status ? 'success' : 'failed'
  return (
    <div className="launch__item">
      <div className="launch__body">
        <h2>{name}</h2>
        {upcoming ? (
          <p className={`launch__status launch__status--info`}>upcoming</p>
          ) : (
          <p className={`launch__status launch__status--${statusStr === 'success' ? 'success' : 'danger'}`}>{statusStr}</p>
        )}
      </div>
      {view && (
        <>
          <div className="launch__meta">
            <span className="launch__meta-item">{upcoming ? 'in a year' : yearsAgo(meta.date)}</span>
            {!upcoming && (
              <>
                <a href={meta.article} className="launch__meta-item">Article</a>
                <a href={meta.video} className="launch__meta-item">Video</a>
              </>
            )}
          </div>
          <div className="launch__details">
            {upcoming ? (
              <>
                <p className='no-content'>No image yet.</p>
                <p className='no-content'>No image yet.</p>
              </>
            ) : (
              <>
                <div className='media'>
                  <img src={meta.src} alt={name} />
                </div>
                <p>{details}</p>
              </>
            )}
          </div>
        </>
      )}
      <button className='btn btn--primary' onClick={() => setView(!view)}>{view ? 'Hide' : 'View'}</button>
    </div>
  )
}

LaunchCard.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  details: PropTypes.string.isRequired,
  upcoming: PropTypes.bool.isRequired,
  meta: PropTypes.object.isRequired
}
export default LaunchCard
