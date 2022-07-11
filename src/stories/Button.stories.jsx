import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,

  // zeplinLink: "https://app.zeplin.io/project/5e7a6d478204d59183a1c76b/styleguide/components?coid=5eac833c5f1f2f1cb19f4f19",

  
  parameters: {
    // zeplinLink: "https://app.zeplin.io/project/62c69ee3c2df61144c1f09f0/styleguide/components?coid=62c6b63e9f12ba1bd789d872",

    zeplinLink: "https://app.zeplin.io/project/62c69ee3c2df61144c1f09f0/screen/62c6b63e9f12ba1bd789d872"
  },

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

Primary.parameters = {
  zeplinLink: 'https://app.zeplin.io/project/62c69ee3c2df61144c1f09f0/screen/62c6b63e9f12ba1bd789d872',
}


export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

Secondary.parameters = {
  zeplinLink: 'http://localhost:6006/?path=/story/example-button--secondary',
}


export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

Large.parameters = {
  zeplinLink: 'http://localhost:6006/?path=/story/example-button--large',
}


export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button small',
};

Small.parameters = {
  zeplinLink: 'http://localhost:6006/?path=/story/example-button--small',
}
