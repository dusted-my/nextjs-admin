import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';


export default function Login() {
  const theme = createTheme();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      
      <Grid container component="main" sx={{ height: '70vh', mt:'15vh', justifyContent: 'center' }}>
   
        <CssBaseline />
        
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper} 
          elevation={6} 
          square
          sx={{
            backgroundImage: 'url(/clean.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundPosition: 'center',
          }}
          
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor:'white',
            }}
          >
           
           <img src="/logo.png" width="200" height="64"/>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Email sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email" />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <FormControl margin="normal" required fullWidth variant="outlined">
           <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
           <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
                label="Password"  
          />
        </FormControl>
        </Box>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Link href="/index">
              <Button 
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor:'black' }}
                >Log In</Button>
              </Link>
          
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}