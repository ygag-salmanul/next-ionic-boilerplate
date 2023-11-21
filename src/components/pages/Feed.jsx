import { IonPage, useIonRouter } from '@ionic/react'
import React from 'react'

const Feed = () => {
  const router = useIonRouter()
  const click=()=>{
router.push('/tabs/lists')
  }
  return (
<IonPage>
<div>Feed
    <button onClick={click}> Hlo</button></div></IonPage>
  )
}

export default Feed