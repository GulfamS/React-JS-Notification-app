const Notification = props => {
  const {className, url, message} = props
  const containerClassNames = `notification-container ${className}`
  return (
    <div className={containerClassNames}>
      <img className='icon' src={url} />
      <p className='message'>{message}</p>
    </div>
  )
}

const element = (
  <div>
    <div className='bg-container'>
      <div className='heading-element'>
        <h1 className='heading'>Notifications</h1>
      </div>
      <div className='notification-list-container'>
        <Notification
          className='primary-bg'
          url='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
          message='Information Message'
        />

        <Notification
          className='success-bg'
          url='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
          message='Success Message'
        />

        <Notification
          className='warning-bg'
          url='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
          message='Warning Message'
        />

        <Notification
          className='error-bg'
          url='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
          message='Error Message'
        />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
