import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import { URL_JSON_SERVER } from '../App';

export const AddComposer = () => {
    const onSubmit = (e) => {
        // e.preventDefault()
        const form = e.target
        axios.post(URL_JSON_SERVER,
            {
                "name": form.name.value,
                "surname": form.surname.value,
                "born": form.born.value,
                "died": form.died.value,
                "photo_url": form.photo_url.value,
            }
        )
    }
    return <>
        <h1>AddComposer</h1>
        <form onSubmit={onSubmit}>
            <Box my={2}>
                <TextField
                    label="Name"
                    variant='outlined'
                    name='name'
                />
            </Box>
            <Box my={2}>
                <TextField
                    label="Surname"
                    variant='outlined'
                    name='surname'
                />
            </Box>
            <Box my={2}>
                <TextField
                    label="Born"
                    variant='outlined'
                    name='born'
                />
            </Box>
            <Box my={2}>
                <TextField
                    label="Died"
                    variant='outlined'
                    name='died'
                />
            </Box>
            <Box my={2}>
                <TextField
                    label="URL of Photo"
                    variant='outlined'
                    name='photo_url'
                />
            </Box>
            <Button variant='contained' type='submit'> Submit </Button>
        </form>
    </>
}

