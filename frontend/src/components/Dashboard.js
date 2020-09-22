import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faUser, faEnvelope, faLock, faDivide, faUnlock, faUserClock, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 
library.add(faCheckSquare, faCoffee, faUser, faEnvelope, faLock, faDivide, faUnlock, faUserClock, faUserEdit)


export const Dashboard = () => {
  return(
 <div>
   ופתחלנו שערי מזל נגן איתנו פתח לנו היכל 
    <FontAwesomeIcon icon="user"/>
  <FontAwesomeIcon icon="check-square"/>
  <FontAwesomeIcon icon="coffee"/>
  <FontAwesomeIcon icon="envelope"/>
  <FontAwesomeIcon icon="lock"/>
  <FontAwesomeIcon icon="divide"/>
  <FontAwesomeIcon icon="user-clock"/>
  <FontAwesomeIcon icon="user-edit"/>
 </div>
  )
}
  
