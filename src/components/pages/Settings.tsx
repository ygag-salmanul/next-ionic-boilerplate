import { IonPage, useIonRouter } from '@ionic/react'
import Link from 'next/link'
import React from 'react'

const Settings = () => {
  return (
    <IonPage>
      <div>Settings
        <Link href={'/dashboard'}>
          <button > Hlo</button></Link></div>
    </IonPage>
  )
}

export default Settings