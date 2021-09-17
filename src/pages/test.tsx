///{
///"createdOn": "1.01.2011, 02:03:04.567",
///"updatedOn": "1.01.2011, 02:03:04.567",
///"isPublished": true,
///"author": "Laurie Dugdale",
///"tags": ["about", "site"]
///}

import React, { FC, ReactElement } from 'react';
import { Content, Paragraph } from '../components/pageComponents';

export const Test: FC = (): ReactElement => {

    return (
        <Content
            title='Test'
        >
            <Paragraph>
                When I was building this blog, my biggest priority was to find a solution that would let me embed totally custom content in each post, like this exploding-logo animation thing. When using markdown or a rich-text editor in a CMS, it's not at all clear how to do this: you're generally limited to the handful of HTML elements that these tools can render to.
            </Paragraph>
            <Paragraph>
            In this article, I'm going to break down how my blog works, so that you can build something similar for yourself. I'll also cover all the most-commonly-asked questions I've gotten over the years. It's not a tutorial, but it should give you a broad roadmap to follow.
            </Paragraph>

        </Content>
    );
}

export default Test;