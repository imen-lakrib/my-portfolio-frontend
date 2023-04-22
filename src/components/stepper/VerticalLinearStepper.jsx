

import React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
} from '@mui/material';
import {
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  DoneAll as DoneAllIcon,
} from '@mui/icons-material';

const steps = [
  { label: 'Education', description: 'My educational qualifications', icon: <SchoolIcon /> },
  { label: 'Work Experience', description: 'My work experience', icon: <WorkIcon /> },
  { label: 'Skills', description: 'My skills', icon: <DoneAllIcon /> },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map(({ label, description, icon }, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepIcon}>
              {label}
            </StepLabel>
            <StepContent>
              <Typography>{description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="text"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={activeStep === steps.length - 1}
                  >
                    Next <KeyboardArrowRightIcon/>
                  </Button>
                  <Button
                    variant="text"
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={activeStep === 0}
                  >
                    <KeyboardArrowLeftIcon/> Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Box sx={{ p: 3 }}>
          <Typography>This is my work experience. I'm always looking for new challenges.</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Box>
      )}
    </Box>
  );
}

function StepIcon(props) {
  const { active, completed, icon } = props;

  return (
    <Box
      sx={{
        color: 'text.primary',
        '& .MuiStepIcon-active': {
          color: 'secondary.main',
        },
        '& .MuiStepIcon-completed': {
          color: 'primary.main',
        },
      }}
    >
      {completed ? <DoneAllIcon /> : active ? <WorkIcon /> : <DoneAllIcon/>}
    </Box>
  );
}