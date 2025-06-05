import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@mui/material';

interface ContactFormData {
    nom: string;
    prenom: string;
    email: string;
    type: string;
    sujet: string;
}

const ContactPage = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        nom: '',
        prenom: '',
        email: '',
        type: '',
        sujet: ''
    });

    const handleChange = (field: keyof ContactFormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [field]: event.target.value
        });
    };

    const handleTypeChange = (event: any) => {
        setFormData({
            ...formData,
            type: event.target.value as string
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <Container maxWidth={'sm'} style={{ marginTop: '50px' }}>
            <Typography variant="h4" component="h1" gutterBottom>Contact</Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Nom"
                    value={formData.nom}
                    onChange={handleChange('nom')}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Prenom"
                    value={formData.prenom}
                    onChange={handleChange('prenom')}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="type-label">Type de requette</InputLabel>
                    <Select
                        labelId="type-label"
                        label="Type de requette"
                        value={formData.type}
                        onChange={handleTypeChange}
                    >
                        <MenuItem value="litige">litige</MenuItem>
                        <MenuItem value="demande info">demande info</MenuItem>
                        <MenuItem value="autre">autre</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    label="Sujet"
                    multiline
                    rows={4}
                    value={formData.sujet}
                    onChange={handleChange('sujet')}
                    margin="normal"
                />
                <Button variant="contained" type="submit" sx={{ mt: 2 }}>Envoyer</Button>
            </Box>
        </Container>
    );
};

export default ContactPage;
