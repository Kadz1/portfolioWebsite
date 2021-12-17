import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = (props) => (
  <Section nopadding id="project">
  <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((item, index) => {
        return (
          <BlogCard key={index}>
          <Img src={item.image} />
          <TitleContent>
            <HeaderThree title>{item.title}</HeaderThree>
            <Hr />
            <SectionDivider />
          </TitleContent>
          <CardInfo className="card-info">{item.description}</CardInfo>
          <SectionDivider/>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {item.tags.map((item, index) => {
                return <Tag key={index} >{item}</Tag>
              })}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={item.visit}>Code</ExternalLinks>
            <ExternalLinks href={item.source}>Source</ExternalLinks>
          </UtilityList>
          </BlogCard>
        )
      })}
    </GridContainer>
  </Section>
);

export default Projects;