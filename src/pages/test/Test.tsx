import React from 'react';
import {Button} from "@leetvin/ui-kit";
import s from './Test.module.css'

export const Test = () => {
    return (
        <div className={s.wrapper}>
            TEST
            <Button variant={'primary'}>TEST</Button>
            <Button variant={'tertiary'}>TEST</Button>
            <Button variant={'secondary'}>TEST</Button>
            <Button variant={'link'}>TEST</Button>

        </div>
)
}

