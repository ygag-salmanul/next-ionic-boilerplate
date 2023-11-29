import { IonPage, useIonRouter } from '@ionic/react'
import React from 'react'
import { isPlatform } from '@ionic/react';
import { Share } from '@capacitor/share';

const Feed = () => {
  const isAndroid = isPlatform('android');
  const isIOS = isPlatform('iphone');
  const router = useIonRouter()
  const share=async()=>{
    await Share.share({
      text: 'Really awesome thing you need to see right meow',
    });
  }
  const click = () => {
    router.push('/tabs/lists')
  }
  return (
    <IonPage>
      <div>Feedss
        {
          isAndroid && <div>
            welcome to android
          </div>
        }
        {
          isIOS && <div>
            welcome to android
          </div>
        }
        <button onClick={click}> Hlo</button><br />
        <button onClick={share}>share</button>
        
        </div>
    </IonPage>
  )
}

export default Feed