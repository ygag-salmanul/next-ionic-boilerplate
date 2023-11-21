import { IonPage, useIonRouter } from '@ionic/react'
import React from 'react'

const Notification = () => {
  const router = useIonRouter()
  const click=()=>{
router.push('/tabs/lists')
  }
  return (
<IonPage>
<div>Notification
    <button onClick={click}> Hlo</button></div></IonPage>
  )
}

export default Notification