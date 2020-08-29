import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/ui/Button'

const Dashboard = props => {
  const [text, setText] = useState()
  const [showInput, setShowInput] = useState(true)
  
  return (
    <div>
      {showInput && 
        <input 
          value={text} 
          onChange={e => setText(e.target.value) } 
        />
      }
      <Button>Create new board</Button>
    </div>
  )
}

Dashboard.propTypes = {

}

export default Dashboard
