
import React from "react";
import { Meta, Story } from "@storybook/react";
import { Switch, SwitchProps, Container } from "@material-ui/core";


export default {
    component: Switch,
    title: 'Material/Switch',
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

const Template: Story<SwitchProps> = (args) => {
    return (
        <Container maxWidth="sm">
            <Switch {...args} >..</Switch>
        </Container>
    );
};

export const PrimarySwitch = Template.bind({});
PrimarySwitch.args = {
    color: "primary",
    disabled: false,
    size: "medium",
};



