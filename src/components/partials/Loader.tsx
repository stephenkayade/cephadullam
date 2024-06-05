import React from 'react'

const Loader = () => {
  return (
    <div>
      <div className="suspense">

        <div className="suspense_image ui-text-center">
          <span className='loader purple md'></span>
        </div>

      </div>
    </div>
  )
}


const popNetwork = () => {
  // redirect
  window.location.href = '/no-network'
}

export default { Loader, popNetwork }