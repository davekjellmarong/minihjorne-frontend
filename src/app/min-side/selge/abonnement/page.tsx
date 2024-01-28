"use client"
import { useStore } from '@/stateManagment/ZustandStore';
import { CommonUser, UserRQ } from '@/utils/types';
import { UserMethods } from '@/utils/utils';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const Abonnement = () => {
  const user = useStore((state) => state.user)

  if (!user) return (<div>
    <h1>Abonnement</h1>
    <p>Du må være logget inn for å se denne siden</p>
  </div>)

  return (
    <div>
      <h1 className="text-center">Abonnement</h1>
      {user.active && (
        <div>
          <p>Abonnement: {user.active}</p>
          <p>Abonnement utløper: {user.activeUntill}</p>
        </div>
      )}
      {!user.active && (
        <div>
          <p>Du har ikke noe aktivt abonnement</p>
        </div>
      )}
    </div>
  )
}

export default Abonnement