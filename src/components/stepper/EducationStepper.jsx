

import React, { useContext } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
  Chip,
} from '@mui/material';
import {
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  DoneAll as DoneAllIcon,
} from '@mui/icons-material';
import { EducationsContext } from "../../contexts/EducationsContext"
import Loader from '../Loader';



export default function EducationStepper() {

  const {educations, isLoading} = useContext(EducationsContext);

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
     {isLoading? <Loader/>: ( <Stepper activeStep={activeStep} orientation="vertical">
        {educations.map(({ title, description, university, start, end }, index) => (
          <Step key={title}>
            <StepLabel StepIconComponent={StepIcon}>
              <Typography  variant='h6' sx={{color:"white", fontWeight:"bolder"}}> {title}</Typography>
            </StepLabel>
            <StepContent>
              <Chip label={university} color="primary" variant="outlined" />
              <span style={{color:"#65748B"}}> {start}--{end}</span>
              <Typography color="primary.contrastText">{description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="text"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={activeStep === educations.length - 1}
                  >
                    Next <KeyboardArrowRightIcon />
                  </Button>
                  <Button
                    variant="text"
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={activeStep === 0}
                  >
                    <KeyboardArrowLeftIcon /> Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>)}
      {activeStep === educations.length && (
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
      {completed ? <DoneAllIcon /> : active ? <WorkIcon /> : <DoneAllIcon />}
    </Box>
  );
}
