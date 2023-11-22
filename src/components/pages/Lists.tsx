import { IonContent, IonPage, useIonRouter } from '@ionic/react'
import React from 'react'

const Lists = () => {
  const router = useIonRouter()
  const click = ()=>{
    router.push('/tabs/settings')
  }
  return (
    <IonPage>
      <IonContent>
<div><img src="/img/c1.avif" alt="" /></div>
<button onClick={click}>go</button>
</IonContent>
</IonPage>
  )
}

export default Lists