import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Paper,
    IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import '../input.css';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 400,
    margin: "auto",
    marginTop: theme.spacing(8),
    textAlign: "center",
}));

const StyledForm = styled("form")(({ theme }) => ({
    width: "100%",
    marginTop: theme.spacing(1),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(3, 0, 2),
}));

const GoogleButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(2, 0),
}));

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [generalError, setGeneralError] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        setEmailError("");
        setGeneralError("");
        setError("");

        try {
            console.log("Success to Log in");
            localStorage.setItem("loggedIn", true);
            // navigate("/dashboard");
        } catch (error) {
            console.error("Error Loging in:", error.message);
            if (error.message.includes("(auth/invalid-email)")) {
                setEmailError("Invalid Email");
                setError("");
                setGeneralError("");
            } else if (error.message.includes("(auth/invalid-credential)")) {
                setGeneralError("Incorrect email or password");
                setError("");
                setEmailError("");
            } else {
                setError("Something went wrong, contact the developer");
                setGeneralError("");
                setEmailError("");
            }
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            localStorage.setItem("loggedIn", true);
            // navigate("/dashboard");
        } catch (error) {
            console.error("Error Loging in with Google:", error.message);
            setError("Something went wrong with Google Log-in. Try again later.");
        }
    };

    return (
        <div className="h-full pt-8">
            <Container component="main" maxWidth="xs" className="relative">
                <StyledPaper elevation={3}>
                    <div className="flex items-center">
                        <IconButton
                            onClick={() => navigate("/")}
                            color="inherit"
                            size="small"
                            sx={{ position: "absolute", left: "2rem" }}>
                            <ArrowBack sx={{height: "35px", width: "35px"}}/>
                        </IconButton>
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{ fontWeight: "bold", margin: "0 auto" }}>
                            Log in
                        </Typography>
                    </div>

                    <StyledForm noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={isSubmitted && !!emailError}
                            helperText={isSubmitted && emailError}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={isSubmitted && !!generalError}
                            helperText={isSubmitted && generalError}
                        />
                        {error && (
                            <Typography
                                color="error"
                                variant="body2"
                                align="center">
                                {error}
                            </Typography>
                        )}
                        <SubmitButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary">
                            Log In
                        </SubmitButton>
                        <GoogleButton
                            fullWidth
                            variant="outlined"
                            onClick={handleGoogleSignIn}>
                            Log In with Google
                        </GoogleButton>
                        <Box mt={2}>
                            <Typography variant="body1">
                                Don't have an account?{" "}
                                <Link to="/signup" className="text-[#156DC9]  underline underline-offset-4">Sign Up</Link>
                            </Typography>
                        </Box>
                    </StyledForm>
                </StyledPaper>
            </Container>
        </div>
    );
};

export default Login;