
import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps, Container } from "@material-ui/core";

function scrollToTop() {
    window.scrollTo(0, 0);
}

export default {
    component: Button,
    title: 'Material/Button',
    argTypes: {
        disabled: {type:"boolean"},
        disableElevation: {type:"boolean"},
        fullWidth: {type: 'boolean'},
        href: {type: 'string'},
        variant: {
            options: ["contained","outlined","text"],
            control: {
                type: "inline-radio"
            }
        },
        color: {
            options: ["default","primary","secondary"],
            control: {
                type: "inline-radio"
            }
        }
    }
} as Meta;

const Template: Story<ButtonProps> = (args) => {
    return (
        <Container maxWidth="sm">
            <Button {...args} >ClickMe</Button>
        </Container>
    );
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    variant: "contained",
    color: "primary",
    disabled: false,
    disableElevation: false,
    fullWidth: false,
}; 

export const TopOfPage = Template.bind({});
TopOfPage.args = {
    variant: "contained",
    color: "primary",
    disabled: false,
    disableElevation: false,
    fullWidth: false,
    onClick: function scrollToTop() {
        window.scrollTo(0, 0);
    },
}; 
