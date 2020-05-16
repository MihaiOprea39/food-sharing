import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import completeAnimation from '../../assets/img/check-final.gif';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    stepper: {
        backgroundColor: '#fefcff'
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
    return ['Select pickup date and location', 'Send a personalized message', 'Review your request'];
}

export default function VerticalLinearStepper({activeStep = 0, stepOneContent, stepTwoContent, canProceedToStepTwo = false, stepThreeContent, canProceedToStepThree, onStepChange, onReset}) {
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
        onStepChange(activeStep + 1);
    };

    const handleBack = () => {
        onStepChange(activeStep - 1);
    };

    const handleReset = () => {
        onStepChange(0);
        onReset();
    };

    const canProceedToNextStep = () => {
        if (activeStep === 0) {
            return canProceedToStepTwo;
        }

        if (activeStep === 1) {
            return canProceedToStepThree;
        }

        return true;
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical" className={classes.stepper}>
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
                                        size="medium"
                                    >
                                        {activeStep === steps.length - 1 ? 'Submit' : 'Next step'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <div>
                    <img src={completeAnimation} alt="..." className="img-fluid d-block m-auto"/>
                    <div className="congratulate-container d-block text-center" style={{zIndex: 10}}>
                        <h2 className="font-weight-bold">Congratulations!</h2>
                        <p>You're all set! Your request has been submitted and is awaiting approval.</p>

                        <br/>

                        <p>While you wait for your pick-up, you can schedule another <span onClick={handleReset} className="font-weight-bold cursor-pointer">one.</span></p>
                    </div>
                </div>
            )}
        </div>
    );
}
