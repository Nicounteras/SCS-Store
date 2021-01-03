import {useEffect, useState} from 'react'
import { useLoading, Audio } from '@agney/react-loading';

const LoadingContainer = () => {

    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Audio width="50" className="loading-element"/>,
      });
      
   return (
      <div className="loading-container">
          {indicatorEl}
      </div>
   )
}

export default LoadingContainer