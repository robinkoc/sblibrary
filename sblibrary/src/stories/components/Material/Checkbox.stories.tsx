
import React from "react";
import { Meta, Story } from "@storybook/react";
import { Checkbox, CheckboxProps, Container } from "@material-ui/core";


export default {
    component: Checkbox,
    title: 'Material/Checkbox',
    argTypes: {
        disabled: {type:"boolean"},
        color: {
            options: ["default","primary","secondary"],
            control: {
                type: "inline-radio"
            }
        },
        size: {
            options: ["small","medium"],
            control: {
                type: "inline-radio"
            }
        }
    }
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
    return (
        <Container maxWidth="sm">
            <Checkbox {...args} >..</Checkbox>
        </Container>
    );
};

export const PrimaryCheck = Template.bind({});
PrimaryCheck.args = {
    color: "primary",
    disabled: false,
    size: "medium",
};



