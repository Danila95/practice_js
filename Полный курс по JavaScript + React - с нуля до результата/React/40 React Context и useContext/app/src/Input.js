import {useContext} from 'react'
import dataContext from './context'

const InputComponent = () => {

    const context = useContext(dataContext)
  
    return (
      <input
        value={context.mail}
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onFocus={context.forceChangeMail}
      />
    )
}

export default InputComponent