import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSectionIndex: 0,
    };
  }

  render() {
    const theme = this.props.theme;
    const { sections } = this.props;
    const { openSectionIndex } = this.state;

    return (
      <div className="experience-accord">
        <Accordion>
          {sections.map((section, sectionIndex) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                expanded={sectionIndex === openSectionIndex}
                onChange={() => {
                  this.setState((prevState) => ({
                    openSectionIndex:
                      prevState.openSectionIndex === sectionIndex
                        ? -1
                        : sectionIndex,
                  }));
                }}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                      border: `1px solid`,
                      borderRadius: `5px`,
                      borderColor: `${theme.headerColor}`,
                      marginBottom: `3px`,
                      fontFamily: "Google Sans Regular",
                      color: `${theme.text}`,
                      ":hover": {
                        color: `${theme.secondaryText}`,
                      },
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience, index) => (
                  <ExperienceCard
                    key={index}
                    index={index}
                    totalCards={section["experiences"].length}
                    experience={experience}
                    theme={theme}
                  />
                ))}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
