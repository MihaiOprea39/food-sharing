import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(4),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

function getSteps() {
    return ['Select pickup date and location', 'Create an ad group', 'Create an ad'];
}

export default function VerticalLinearStepper({activeStep = 0, stepOneContent, stepTwoContent, canProceedToStepTwo = false, stepThreeContent, canProceedToStepThree, onStepChange}) {
    const classes = useStyles();
    const steps = getSteps();

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return stepOneContent;
            case 1:
                return stepTwoContent;
            case 2:
                return stepThreeContent;
            default:
                return 'Unknown step';
        }
    }

    const handleNext = () => {
        onStepChange((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        onStepChange((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        onStepChange(0);
    };

    const canProceedToNextStep = () => {
        if (activeStep === 0) {
            return canProceedToStepTwo;
        }

        if (activeStep === 1) {
            return canProceedToStepThree;
        }
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            {getStepContent(index)}
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        disabled={!canProceedToNextStep()}
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next step'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
                    </Button>
                </Paper>
            )}
        </div>
    );
}