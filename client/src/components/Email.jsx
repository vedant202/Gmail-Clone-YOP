import React from 'react'
import { Checkbox } from "@mui/material";
import { StarBorder } from '@mui/icons-material';

export default function Email({mail}) {
    console.log(mail)
  return (
    <div>
        <Checkbox size='small'/>
        <StarBorder size='small'/>
        <div>
            <p>
            {mail && mail.name}
            </p>
            <p>{mail && mail.Subject}</p>
        </div>
        Email
    </div>
  )
}
