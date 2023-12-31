import React from 'react'
import { Alert, Button, Drawer, Icon } from 'rsuite'
import { useMediaQuery, useModalState } from '../../misc/custom-hooks'
import Dashboard from '.'
import { useCallback } from 'react'
import { auth } from '../../misc/firebase'

const DashboardToggle = () => {

    const { isOpen, close, open} = useModalState()
    const isMobile = useMediaQuery('(max-width: 992px)')

    const onSignedOut = useCallback(() => {
        auth.signOut()
        Alert.info('Signed Out', 4000)
        close()
    }, [close])
  return (
    <>
        <Button block color='blue' onClick = {open}>
            <Icon icon="dashboard"/> Dashboard
        </Button> 
        <Drawer full={isMobile} show={isOpen} onHide={close} placement='left'>
            <Dashboard onSignedOut= {onSignedOut}/>
        </Drawer>
    </>
  )
}

export default DashboardToggle
