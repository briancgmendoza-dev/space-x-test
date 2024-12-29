import PropTypes from 'prop-types'

import LaunchCard from './Card';
import '../../assets/scss/styles.scss'

const LaunchList = ({ list }) => (
  <div className="launch">
    <div className="launch__wrapper">
      <div className="launch__list">
        {list.length > 0 && list.map((launch) => (
          <LaunchCard
            key={launch.flight_number}
            name={launch.mission_name}
            status={launch.launch_success ?? ''}
            upcoming={launch.upcoming}
            details={launch.details ?? ''}
            meta={{
              date: launch.launch_year,
              article: launch.links?.article_link,
              video: launch.links?.video_link,
              src: launch.links?.mission_patch_small
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

LaunchList.propTypes = {
  list: PropTypes.array.isRequired
}
export default LaunchList;
