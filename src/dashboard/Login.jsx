import { useNavigate } from "react-router-dom";

// material

import { Stack, Typography, Box, Card } from '@mui/material';
// components
import { LoadingButton } from '@mui/lab';
// material
import {
  Alert,
  IconButton,
  InputAdornment, Link,
  TextField
} from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// ----------------------------------------------------------------------


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

export default function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const isSubmitting = false;
  const navigate = useNavigate();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().max(30).required('Ce champ est obligatoire'),
      password: Yup.string().max(30).required('Ce champ est obligatoire'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        const user = await axios.post('https://my-portfolio-backend-final.vercel.app/secretpannel/login', {
          email: values.email,
          password: values.password

        })
        if (user.status === 200) {
          setError(false)
          localStorage.setItem("token", user.data.token)
          localStorage.setItem("email", user.data.email)
          navigate("/dashboard")

          console.log(user.data)
        }
        else console.log("ooooooopsyyyy")

      } catch (err) {
        console.error(err);
        setError(true)
      }
    }
  });
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  if (localStorage.getItem("token")) {
    navigate("/dashboard")
  }
  return (
    <Box sx={{ flexGrow: 1 }}>

      <Grid container spacing={2}>
        <Grid item xs={5} md={4}>
          <Card sx={{ padding: "10px" }}>
            <img style={{ width: "30%" }} src="/logo.png"></img>
            <Grid container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: '100vh' }}>
              <Typography sx={{ fontSize: "50px", fontWeight: "bold" }}>welcome </Typography>
              <img style={{ width: "80%", padding: "20px 0" }} src="/bg.png"></img>
            </Grid>

          </Card>
        </Grid>

        <Grid item xs={7} md={8}
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}>
          <Box sx={{ px: 1, py: 3 }}>
            <Stack sx={{ mb: 5 }}>
              <Typography variant="h4" gutterBottom>
              login_dashboard
                
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Entrez vos coordonnées ci-dessous.</Typography>
            </Stack>
            <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  autoComplete="email"
                  type="email"
                  name="email"
                  label="Nom d'utilisateur"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  fullWidth
                  name='password'
                  onChange={formik.handleChange}
                  autoComplete="current-password"
                  type={showPassword ? 'text' : 'password'}
                  label="Mot de passe"
                  value={formik.values.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
                          {/*showPassword ?  : eyeOffFill*/}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  error={Boolean(formik.touched.password && formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Stack>

              <Box justifyContent="flex-end" sx={{ display: 'flex', my: 2 }}>
                {/* <Link component={RouterLink} variant="subtitle2" to="#">
                  Mot de passe oublié ?
                </Link> */}
              </Box>

              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Se connecter
              </LoadingButton>
            </form>

            {error && <Alert sx={{ m: 2 }} severity="error"> invalid email/ password </Alert>}

          

          </Box>
        </Grid>



      </Grid>
    </Box>



  );
}